import React from "react";
import { PostContent } from "../lib/posts";
import { TagContent } from "../lib/tags";
import Link from "next/link";
import { parseISO, format } from "date-fns";

type Props = {
  posts: PostContent[];
  tags: TagContent[];
  pagination: {
    current: number;
    pages: number;
  };
  prefix?: string;
};

export default function PostList({ posts, tags, pagination, prefix }: Props) {
  const pathPrefix = prefix || "/posts";

  const formatAuthor = (author?: string) => {
    if (!author) return "Yeedu Team";
    return author
      .split(" ")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
  };

  const getThumbnail = (post: PostContent) => {
    return post.thumbnail || "https://cdn.prod.website-files.com/67724ebcc1aad14c5b2a2be4/69087da8180c4364fce29928_elephant-in-the-room.jpg";
  };

  return (
    <div className="blogs-page-wrapper">
      {/* Hero Section */}
      <section className="section-20">
        <div className="w-layout-blockcontainer w-container">
          <div className="div-block-4">
            <h1 className="hero-section-head">Blogs</h1>
            <p className="sub-paragraphblog">
              Deep dives into cloud efficiency, data engineering, and platform scalability. Learn from real-world experiences and expert perspectives shaping the future of data operations.
            </p>
          </div>
        </div>
      </section>

      {/* Grid of Posts */}
      <section className="section-5">
        <div className="w-container">
          <div className="collection-list-wrapper w-dyn-list">
            <div role="list" className="collection-grid">
              {posts.map((post, idx) => {
                const formattedDate = post.date ? format(parseISO(post.date), "MMMM d, yyyy") : "";
                return (
                  <div key={idx} role="listitem" className="collection-item w-dyn-item">
                    <Link href={`${pathPrefix}/${post.slug}`}>
                      <a className="link-block-2 w-inline-block">
                        <div className="thumbnail-wrapper">
                          <img
                            src={getThumbnail(post)}
                            loading="lazy"
                            alt={post.thumbnail_alt || post.title}
                            className="image-33"
                          />
                        </div>
                        <div className="w-layout-hflex flex-block-3">
                          <div className="author-text-block">{formatAuthor(post.author)}</div>
                          <div className="published-text">{formattedDate}</div>
                        </div>
                        <h2 className="heading-8">{post.title}</h2>
                      </a>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Pagination */}
          {pagination.pages > 1 && (
            <div role="navigation" aria-label="List" className="w-pagination-wrapper pagination-2">
              {pagination.current > 1 && (
                <Link
                  href={pagination.current - 1 === 1 ? pathPrefix : `${pathPrefix}/page/[page]`}
                  as={pagination.current - 1 === 1 ? null : `${pathPrefix}/page/${pagination.current - 1}`}
                >
                  <a className="w-pagination-previous previous-2">
                    <div className="text-block-7">Previous</div>
                  </a>
                </Link>
              )}
              
              <div className="w-page-count page-count">
                {pagination.current} / {pagination.pages}
              </div>

              {pagination.current < pagination.pages && (
                <Link
                  href={`${pathPrefix}/page/[page]`}
                  as={`${pathPrefix}/page/${pagination.current + 1}`}
                >
                  <a className="w-pagination-next next-2">
                    <div className="text-block-7">Next</div>
                  </a>
                </Link>
              )}
            </div>
          )}
        </div>
      </section>

      <style jsx>{`
        .blogs-page-wrapper {
          background-color: #0b0c10;
          color: #ffffff;
          font-family: "Inter", sans-serif;
          min-height: 100vh;
        }

        .section-20 {
          padding: 80px 20px 40px 20px;
          text-align: center;
          border-bottom: 1px solid #1f2229;
        }

        .hero-section-head {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 20px;
          color: #ffffff;
        }

        .sub-paragraphblog {
          color: #aaa;
          font-size: 1.1rem;
          line-height: 1.6;
          max-width: 800px;
          margin: 0 auto;
        }

        .section-5 {
          padding: 60px 20px;
        }

        .w-container {
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
        }

        .collection-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 40px;
        }

        .collection-item {
          background: #111217;
          border: 1px solid #1f2229;
          border-radius: 16px;
          overflow: hidden;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
        }

        .collection-item:hover {
          transform: translateY(-5px);
          border-color: #ff5b1a;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
        }

        .link-block-2 {
          text-decoration: none;
          color: inherit;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .thumbnail-wrapper {
          width: 100%;
          height: 220px;
          overflow: hidden;
          border-bottom: 1px solid #1f2229;
        }

        .image-33 {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .collection-item:hover .image-33 {
          transform: scale(1.05);
        }

        .flex-block-3 {
          display: flex;
          justify-content: space-between;
          padding: 20px 24px 10px 24px;
          font-size: 0.85rem;
          color: #ff5b1a;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .author-text-block {
          color: #ff5b1a;
        }

        .published-text {
          color: #888;
        }

        .heading-8 {
          font-size: 1.25rem;
          font-weight: 700;
          line-height: 1.4;
          margin: 0;
          padding: 0 24px 24px 24px;
          color: #ffffff;
          transition: color 0.2s ease;
        }

        .collection-item:hover .heading-8 {
          color: #ff5b1a;
        }

        .pagination-2 {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 20px;
          margin-top: 50px;
        }

        .previous-2, .next-2 {
          background-color: #111217;
          border: 1px solid #1f2229;
          color: #ffffff;
          padding: 10px 20px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.2s ease;
        }

        .previous-2:hover, .next-2:hover {
          background-color: #ff5b1a;
          border-color: #ff5b1a;
        }

        .page-count {
          color: #888;
          font-size: 0.95rem;
        }

        @media (max-width: 767px) {
          .collection-grid {
            grid-template-columns: 1fr;
            gap: 25px;
          }

          .hero-section-head {
            font-size: 2.25rem;
          }
        }
      `}</style>
    </div>
  );
}
