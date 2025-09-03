import { posts } from "@/type/posts";

import BlogPostLists from "./BlogPostLists";

function Blog() {
  return (
    <div>
      <div className="container mx-auto">
        <h1 className="text-3xl mt-8 text-center md:text-left ">
          Latest Blogs
        </h1>
        <BlogPostLists posts={posts} />
      </div>
    </div>
  );
}

export default Blog;
