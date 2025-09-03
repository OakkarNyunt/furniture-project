import type { Post } from "@/type";
import { Link } from "react-router-dom";
interface PostsProps {
  posts: Post[];
}
function BlogPostLists({ posts }: PostsProps) {
  return (
    <div className="container mx-auto my-8 p-8">
      <div className="grid grid-cols-1 gap-8 px-4 md:grid-cols-2 md:px-0 lg:grid-cols-3">
        {posts.map((item) => (
          //note: currently inside blogs route, so just use relative path
          // <Link to={`blogs/${item.id}`} className="" key={item.id}>
          <Link to={`${item.id}`} className="" key={item.id}>
            <img src={item.image} alt="" className=" size-80 rounded mb-4" />
            <p className="text-xl font-bold line-clamp-1 mb-2">{item.title}</p>
            <p className=" text-base mb-2 line-clamp-3">{item.content}</p>
            <span>
              by
              <span className="font-semibold"> {item.author}</span>
              <span className="font-semibold"> on {item.updated_at}</span>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default BlogPostLists;
