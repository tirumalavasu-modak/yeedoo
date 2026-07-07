const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');
const TurndownService = require('turndown');
const yaml = require('js-yaml');

const collectionsDir = path.join(__dirname, '../collections');
const contentDir = path.join(__dirname, '../content');

// Helper to slugify strings
function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start
    .replace(/-+$/, '');            // Trim - from end
}

// Helper to format dates
function formatDate(dateStr) {
  if (!dateStr) return new Date().toISOString().split('T')[0];
  try {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) {
      return new Date().toISOString().split('T')[0];
    }
    return d.toISOString().split('T')[0];
  } catch (e) {
    return new Date().toISOString().split('T')[0];
  }
}

// Helper to escape unallowed HTML tags in MDX (e.g. <options>)
function escapeUnallowedHtml(text) {
  const allowedTags = /^(p|h1|h2|h3|h4|h5|h6|a|span|strong|em|ul|ol|li|br|hr|img|pre|code|blockquote|figure|figcaption|div|style|iframe|script|video|audio|picture|source|tbody|thead|tr|th|td|table|q|cite|b|i|u|s|strike|del|ins|sub|sup|small|mark|kbd|abbr|address|section|article|aside|header|footer|nav|main|svg|path|g|rect|circle|line|polyline|polygon|ellipse)$/i;

  return text.replace(/<(\/?[a-z0-9\-]+)([^>]*)>/gi, (match, tagName, attributes) => {
    const normalizedTag = tagName.replace(/^\//, '').toLowerCase();
    if (allowedTags.test(normalizedTag)) {
      return match;
    }
    return `&lt;${tagName}${attributes}&gt;`;
  });
}

// Scan collections directory
if (!fs.existsSync(collectionsDir)) {
  console.error("Collections directory not found!");
  process.exit(1);
}

const files = fs.readdirSync(collectionsDir);
const authorsFile = files.find(f => f.startsWith('Yeedu - Authors') && f.endsWith('.csv'));
const blogsFile = files.find(f => f.startsWith('Yeedu - Blogs') && f.endsWith('.csv'));
const benchmarksFile = files.find(f => f.startsWith('Yeedu - Benchmarks') && f.endsWith('.csv'));
const caseStudiesFile = files.find(f => f.startsWith('Yeedu - Case Studies') && f.endsWith('.csv'));

const turndownService = new TurndownService({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced'
});

// Avoid converting script blocks or empty divs in weird ways
turndownService.addRule('preformatted', {
  filter: ['pre', 'code'],
  replacement: function (content, node) {
    return '\n```\n' + content.trim() + '\n```\n';
  }
});

const allTags = new Map(); // name -> slug

// Process tags helper
function registerTags(keywordsStr) {
  if (!keywordsStr) return [];
  const tagsList = [];
  const rawTags = keywordsStr.split(',');
  for (let tag of rawTags) {
    tag = tag.trim();
    if (!tag) continue;
    const slug = slugify(tag);
    allTags.set(tag, slug);
    tagsList.push(slug);
  }
  return tagsList;
}

// 1. Migrate Authors
function migrateAuthors() {
  return new Promise((resolve) => {
    if (!authorsFile) {
      console.log("No Authors CSV file found.");
      return resolve();
    }
    const authors = [];
    fs.createReadStream(path.join(collectionsDir, authorsFile))
      .pipe(csv())
      .on('data', (row) => {
        if (row['Archived'] === 'true' || row['Draft'] === 'true') return;
        authors.push({
          slug: row['Slug'],
          name: row['Name'],
          introduction: row['Bio Summary'] || ''
        });
      })
      .on('end', () => {
        const authorsYmlPath = path.join(__dirname, '../meta/authors.yml');
        fs.mkdirSync(path.dirname(authorsYmlPath), { recursive: true });
        fs.writeFileSync(authorsYmlPath, yaml.dump({ authors }), 'utf-8');
        console.log(`Migrated ${authors.length} authors to ${authorsYmlPath}`);
        resolve();
      });
  });
}

// 2. Migrate Blogs (Posts)
function migrateBlogs() {
  return new Promise((resolve) => {
    if (!blogsFile) {
      console.log("No Blogs CSV file found.");
      return resolve();
    }
    const outputDir = path.join(contentDir, 'posts');
    fs.mkdirSync(outputDir, { recursive: true });

    let count = 0;
    fs.createReadStream(path.join(collectionsDir, blogsFile))
      .pipe(csv())
      .on('data', (row) => {
        if (row['Archived'] === 'true' || row['Draft'] === 'true') return;

        const slug = row['Slug'];
        const title = row['Blog Title'];
        const date = formatDate(row['Published On'] || row['Created On']);
        const authorSlug = row['Author'] ? slugify(row['Author']) : 'milind-chitgupakar';
        const tags = registerTags(row['Keywords']);

        const bodyHTML = row['Post Content'] || '';
        const bodyMarkdown = escapeUnallowedHtml(turndownService.turndown(bodyHTML));

        const frontmatter = {
          slug,
          title,
          date,
          author: authorSlug,
          tags,
          thumbnail: row['Blog Thumbnail'] || '',
          thumbnail_alt: row['Thumbnail ALT Text'] || '',
          meta_title: row['Meta Title'] || '',
          meta_description: row['Meta Description'] || '',
          og_title: row['OG Title'] || '',
          og_description: row['OG Description'] || '',
          keywords: row['Keywords'] || '',
          about_author_link: row['About Author Link'] || ''
        };

        const fileContent = `---\n${yaml.dump(frontmatter)}---\n\n${bodyMarkdown}\n`;
        fs.writeFileSync(path.join(outputDir, `${slug}.mdx`), fileContent, 'utf-8');
        count++;
      })
      .on('end', () => {
        console.log(`Migrated ${count} blog posts to ${outputDir}`);
        resolve();
      });
  });
}

// 3. Migrate Benchmarks
function migrateBenchmarks() {
  return new Promise((resolve) => {
    if (!benchmarksFile) {
      console.log("No Benchmarks CSV file found.");
      return resolve();
    }
    const outputDir = path.join(contentDir, 'benchmarks');
    fs.mkdirSync(outputDir, { recursive: true });

    let count = 0;
    fs.createReadStream(path.join(collectionsDir, benchmarksFile))
      .pipe(csv())
      .on('data', (row) => {
        if (row['Archived'] === 'true' || row['Draft'] === 'true') return;

        const slug = row['Slug'];
        const title = row['Benchmark Title'];
        const date = formatDate(row['Published On'] || row['Created On']);
        const tags = registerTags(row['Keywords']);

        const bodyHTML = row['Benchmark Content'] || '';
        const bodyMarkdown = escapeUnallowedHtml(turndownService.turndown(bodyHTML));

        const frontmatter = {
          slug,
          title,
          date,
          tags,
          hero_desc: row['Hero Desc'] || '',
          thumbnail: row['Benchmark Thumbnail'] || '',
          thumbnail_alt: row['Thumbnail alt text'] || '',
          meta_title: row['Meta Title'] || '',
          meta_description: row['Meta Description'] || '',
          og_title: row['OG Title'] || '',
          og_description: row['OG Description'] || ''
        };

        const fileContent = `---\n${yaml.dump(frontmatter)}---\n\n${bodyMarkdown}\n`;
        fs.writeFileSync(path.join(outputDir, `${slug}.mdx`), fileContent, 'utf-8');
        count++;
      })
      .on('end', () => {
        console.log(`Migrated ${count} benchmarks to ${outputDir}`);
        resolve();
      });
  });
}

// 4. Migrate Case Studies
function migrateCaseStudies() {
  return new Promise((resolve) => {
    if (!caseStudiesFile) {
      console.log("No Case Studies CSV file found.");
      return resolve();
    }
    const outputDir = path.join(contentDir, 'case-studies');
    fs.mkdirSync(outputDir, { recursive: true });

    let count = 0;
    fs.createReadStream(path.join(collectionsDir, caseStudiesFile))
      .pipe(csv())
      .on('data', (row) => {
        if (row['Archived'] === 'true' || row['Draft'] === 'true') return;

        const slug = row['Slug'];
        const title = row['Case Study Title'];
        const date = formatDate(row['Published On'] || row['Created On']);
        const tags = registerTags(row['Keywords']);

        const bodyHTML = row['Content'] || '';
        const bodyMarkdown = escapeUnallowedHtml(turndownService.turndown(bodyHTML));

        const frontmatter = {
          slug,
          title,
          date,
          tags,
          hero_desc: row['Hero Desc'] || '',
          thumbnail: row['Case Study Thumbnail image'] || '',
          thumbnail_alt: row['Thumbnail ALT text'] || '',
          meta_title: row['Meta Title'] || '',
          meta_description: row['Meta Description'] || '',
          og_title: row['OG Title'] || '',
          og_description: row['OG Description'] || ''
        };

        const fileContent = `---\n${yaml.dump(frontmatter)}---\n\n${bodyMarkdown}\n`;
        fs.writeFileSync(path.join(outputDir, `${slug}.mdx`), fileContent, 'utf-8');
        count++;
      })
      .on('end', () => {
        console.log(`Migrated ${count} case studies to ${outputDir}`);
        resolve();
      });
  });
}

// Run migration sequence
async function run() {
  console.log("Starting Webflow CMS migration...");
  await migrateAuthors();
  await migrateBlogs();
  await migrateBenchmarks();
  await migrateCaseStudies();

  // Save tags
  const tagsList = [];
  allTags.forEach((slug, name) => {
    tagsList.push({ slug, name });
  });
  const tagsYmlPath = path.join(__dirname, '../meta/tags.yml');
  fs.writeFileSync(tagsYmlPath, yaml.dump({ tags: tagsList }), 'utf-8');
  console.log(`Saved ${tagsList.length} tags to ${tagsYmlPath}`);
  console.log("Migration complete!");
}

run().catch(err => {
  console.error("Migration failed:", err);
});
