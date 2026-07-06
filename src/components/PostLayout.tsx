import React from "react";
import Layout from "./Layout";
import BasicMeta from "./meta/BasicMeta";
import JsonLdMeta from "./meta/JsonLdMeta";
import OpenGraphMeta from "./meta/OpenGraphMeta";
import TwitterCardMeta from "./meta/TwitterCardMeta";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import { PostContent } from "../lib/posts";

type Props = {
  title: string;
  date: Date;
  slug: string;
  tags: string[];
  author?: string;
  description?: string;
  thumbnail?: string;
  recentPosts?: PostContent[];
  prefix?: string;
  children: React.ReactNode;
};

export default function PostLayout({
  title,
  date,
  slug,
  tags,
  author,
  description = "",
  thumbnail,
  recentPosts = [],
  prefix,
  children,
}: Props) {
  const formattedDate = date ? format(date, "MMMM d, yyyy") : "";
  const pathPrefix = prefix || "/posts";

  const formatAuthor = (authorName?: string) => {
    if (!authorName) return "Yeedu Team";
    return authorName
      .split(" ")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
  };

  const getThumbnail = (post: PostContent) => {
    return post.thumbnail || "https://cdn.prod.website-files.com/67724ebcc1aad14c5b2a2be4/69087da8180c4364fce29928_elephant-in-the-room.jpg";
  };

  const category = tags.length > 0 
    ? tags[0].split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ") 
    : "Spark Cost Optimization";

  return (
    <Layout>
      <BasicMeta
        url={`${pathPrefix}/${slug}`}
        title={title}
        keywords={tags}
        description={description}
      />
      <TwitterCardMeta
        url={`${pathPrefix}/${slug}`}
        title={title}
        description={description}
      />
      <OpenGraphMeta
        url={`${pathPrefix}/${slug}`}
        title={title}
        description={description}
      />
      <JsonLdMeta
        url={`${pathPrefix}/${slug}`}
        title={title}
        keywords={tags}
        date={date}
        author={formatAuthor(author)}
        description={description}
      />

      <div className="blog-post-page">
        {/* Post Header Block */}
        <div className="post-header-container">
          <div className="post-breadcrumbs">
            <Link href="/posts"><a>Resources</a></Link>
            <span className="separator">/</span>
            <Link href="/posts"><a>Blogs</a></Link>
            <span className="separator">/</span>
            <span className="current-tag">{category}</span>
          </div>

          <h1 className="post-title">{title}</h1>

          <div className="post-author-line">
            <span className="author-name">By {formatAuthor(author)}</span>
            <span className="bullet">•</span>
            <span className="publish-date">{formattedDate}</span>
          </div>
        </div>

        {/* Large Cover Image */}
        <div className="post-cover-container">
          <img
            src={thumbnail || "https://cdn.prod.website-files.com/67724ebcc1aad14c5b2a2be4/69087da8180c4364fce29928_elephant-in-the-room.jpg"}
            alt={title}
            className="post-cover-image"
          />
        </div>

        {/* Main Content Area */}
        <div className="post-content-container">
          <article className="post-markdown-body">
            {children}
          </article>

          {/* Back button */}
          <div className="back-to-blogs-wrap">
            <Link href="/posts">
              <a className="back-to-blogs-btn">Back to blogs</a>
            </Link>
          </div>
        </div>

        {/* Recent Articles Footer Section */}
        {recentPosts.length > 0 && (
          <section className="recent-articles-section">
            <div className="recent-articles-container">
              <div className="recent-header-wrap">
                <h2 className="recent-section-title">Recent Articles</h2>
                <Link href="/posts"><a className="see-all-link">See all</a></Link>
              </div>

              <div className="recent-articles-grid">
                {recentPosts.map((post, idx) => (
                  <div key={idx} className="recent-article-card">
                    <Link href={`${pathPrefix}/${post.slug}`}>
                      <a className="recent-card-link">
                        <div className="recent-card-img-wrap">
                          <img src={getThumbnail(post)} alt={post.title} className="recent-card-img" />
                        </div>
                        <div className="recent-meta-row">
                          <span className="recent-author">{formatAuthor(post.author)}</span>
                          <span className="recent-date">{post.date ? format(parseISO(post.date), "MMMM d, yyyy") : ""}</span>
                        </div>
                        <h3 className="recent-card-title">{post.title}</h3>
                      </a>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Email Newsletter Subscription Box */}
        <section className="newsletter-section">
          <div className="newsletter-card">
            <h3 className="newsletter-title">Join our Insider Circle</h3>
            <p className="newsletter-desc">
              Get exclusive content tailored to engineers, architects, and CTOs looking to manage their cloud platforms efficiently.
            </p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email address"
                required
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-btn">Subscribe</button>
            </form>
          </div>
        </section>
      </div>

      <style jsx>{`
        .blog-post-page {
          background-color: #0b0c10;
          color: #ffffff;
          font-family: "Inter", sans-serif;
          padding-bottom: 80px;
        }

        /* Header block */
        .post-header-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 80px 20px 40px 20px;
          text-align: center;
        }

        .post-breadcrumbs {
          font-size: 0.85rem;
          color: #888;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 20px;
        }

        .post-breadcrumbs a {
          color: #ff5b1a;
          text-decoration: none;
          font-weight: 600;
        }

        .post-breadcrumbs .separator {
          margin: 0 8px;
        }

        .post-breadcrumbs .current-tag {
          color: #aaa;
        }

        .post-title {
          font-size: 2.75rem;
          font-weight: 800;
          line-height: 1.25;
          margin: 0 0 25px 0;
          color: #ffffff;
        }

        .post-author-line {
          font-size: 0.95rem;
          color: #aaa;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
        }

        .author-name {
          color: #ff5b1a;
          font-weight: 600;
        }

        .bullet {
          color: #444;
        }

        /* Cover Image */
        .post-cover-container {
          max-width: 900px;
          margin: 0 auto 50px auto;
          padding: 0 20px;
        }

        .post-cover-image {
          width: 100%;
          border-radius: 16px;
          border: 1px solid #1f2229;
          object-fit: cover;
          max-height: 480px;
        }

        /* Content Area */
        .post-content-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .post-markdown-body {
          font-size: 1.1rem;
          line-height: 1.75;
          color: #ccc;
        }

        /* Back to blogs button */
        .back-to-blogs-wrap {
          margin-top: 60px;
          padding-top: 40px;
          border-top: 1px solid #1f2229;
          text-align: center;
        }

        .back-to-blogs-btn {
          display: inline-block;
          padding: 12px 28px;
          background-color: #111217;
          border: 1px solid #1f2229;
          color: #ffffff;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.2s ease;
        }

        .back-to-blogs-btn:hover {
          background-color: #ff5b1a;
          border-color: #ff5b1a;
        }

        /* Recent Articles Section */
        .recent-articles-section {
          background-color: #111217;
          border-top: 1px solid #1f2229;
          border-bottom: 1px solid #1f2229;
          padding: 60px 20px;
          margin-top: 80px;
        }

        .recent-articles-container {
          max-width: 1000px;
          margin: 0 auto;
        }

        .recent-header-wrap {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 40px;
        }

        .recent-section-title {
          font-size: 1.75rem;
          font-weight: 700;
          color: #ffffff;
          margin: 0;
        }

        .see-all-link {
          color: #ff5b1a;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.95rem;
        }

        .recent-articles-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
        }

        .recent-article-card {
          background: #0b0c10;
          border: 1px solid #1f2229;
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .recent-article-card:hover {
          transform: translateY(-4px);
          border-color: #ff5b1a;
        }

        .recent-card-link {
          text-decoration: none;
          color: inherit;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .recent-card-img-wrap {
          height: 180px;
          overflow: hidden;
        }

        .recent-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .recent-meta-row {
          display: flex;
          justify-content: space-between;
          padding: 16px 20px 8px 20px;
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
        }

        .recent-author {
          color: #ff5b1a;
        }

        .recent-date {
          color: #666;
        }

        .recent-card-title {
          font-size: 1.05rem;
          line-height: 1.4;
          font-weight: 700;
          margin: 0;
          padding: 0 20px 20px 20px;
          color: #ffffff;
        }

        .recent-article-card:hover .recent-card-title {
          color: #ff5b1a;
        }

        /* Email newsletter section */
        .newsletter-section {
          padding: 80px 20px 0 20px;
          display: flex;
          justify-content: center;
        }

        .newsletter-card {
          max-width: 700px;
          width: 100%;
          background: #111217;
          border: 1px solid #1f2229;
          border-radius: 16px;
          padding: 40px;
          text-align: center;
        }

        .newsletter-title {
          font-size: 1.8rem;
          font-weight: 800;
          color: #ffffff;
          margin: 0 0 12px 0;
        }

        .newsletter-desc {
          color: #aaa;
          font-size: 0.95rem;
          line-height: 1.6;
          max-width: 500px;
          margin: 0 auto 30px auto;
        }

        .newsletter-form {
          display: flex;
          gap: 15px;
          max-width: 500px;
          margin: 0 auto;
        }

        .newsletter-input {
          flex: 1;
          background: #0b0c10;
          border: 1px solid #1f2229;
          border-radius: 8px;
          padding: 12px 16px;
          color: #ffffff;
          font-size: 0.95rem;
        }

        .newsletter-input:focus {
          outline: none;
          border-color: #ff5b1a;
        }

        .newsletter-btn {
          background-color: #ff5b1a;
          color: #ffffff;
          border: none;
          border-radius: 8px;
          padding: 0 24px;
          font-weight: 700;
          cursor: pointer;
          transition: background-color 0.2s ease;
        }

        .newsletter-btn:hover {
          background-color: #e04a10;
        }

        @media (max-width: 767px) {
          .post-title {
            font-size: 2rem;
          }

          .newsletter-form {
            flex-direction: column;
            gap: 10px;
          }

          .newsletter-btn {
            padding: 12px;
          }
        }
      `}</style>

      {/* Global Markdown Content Custom Styling */}
      <style global jsx>{`
        .post-markdown-body p {
          margin-bottom: 24px;
        }

        .post-markdown-body h2 {
          font-size: 1.8rem;
          font-weight: 700;
          color: #ffffff;
          margin-top: 48px;
          margin-bottom: 16px;
          border-bottom: 1px solid #1f2229;
          padding-bottom: 8px;
        }

        .post-markdown-body h3 {
          font-size: 1.4rem;
          font-weight: 700;
          color: #ffffff;
          margin-top: 36px;
          margin-bottom: 12px;
        }

        .post-markdown-body ul, .post-markdown-body ol {
          margin-bottom: 24px;
          padding-left: 24px;
        }

        .post-markdown-body li {
          margin-bottom: 8px;
        }

        .post-markdown-body table {
          width: 100%;
          border-collapse: collapse;
          margin: 32px 0;
          background: #111217;
          border: 1px solid #1f2229;
          border-radius: 8px;
          overflow: hidden;
        }

        .post-markdown-body th {
          background: #ff5b1a;
          color: #ffffff;
          font-weight: 700;
          padding: 12px 16px;
          text-align: left;
        }

        .post-markdown-body td {
          padding: 12px 16px;
          border-bottom: 1px solid #1f2229;
        }

        .post-markdown-body code {
          background: #1e1e24;
          color: #ff5b1a;
          padding: 3px 6px;
          border-radius: 4px;
          font-family: monospace;
          font-size: 0.95rem;
        }

        .post-markdown-body pre {
          background: #1e1e24;
          padding: 20px;
          border-radius: 8px;
          overflow-x: auto;
          margin-bottom: 24px;
          border: 1px solid #1f2229;
        }

        .post-markdown-body pre code {
          background: transparent;
          color: #fff;
          padding: 0;
          font-size: 0.9rem;
        }
      `}</style>
    </Layout>
  );
}
