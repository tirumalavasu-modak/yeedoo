import { PostContent } from "../lib/posts";
import Date from "./Date";
import Link from "next/link";
import { parseISO } from "date-fns";

type Props = {
  post: PostContent;
  prefix?: string;
};
export default function PostItem({ post, prefix }: Props) {
  return (
    <Link href={(prefix || "/posts") + "/" + post.slug}>
      <a>
        <Date date={parseISO(post.date)} />
        <h2>{post.title}</h2>
        <style jsx>
          {`
            a {
              color: #222;
              display: inline-block;
            }
            h2 {
              margin: 0;
              font-weight: 500;
            }
          `}
        </style>
      </a>
    </Link>
  );
}
