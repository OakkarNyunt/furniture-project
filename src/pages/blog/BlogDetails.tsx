import { Link, useParams } from "react-router-dom";
import { posts } from "@/type/posts";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/Icons";
import DompurifySanitized from "./Dompurify-sanitized";

function BlogDetails() {
  const { postId } = useParams();
  const post = posts.find((post) => post.id === postId);
  return (
    <div className="container mx-auto">
      <section className="flex flex-col lg:flex-row my-4 p-4">
        <section className="w-full lg:w-3/4 lg:pr-8">
          <Link to="/blogs">
            <Button variant="outline">
              <Icons.arrowLeft className="mr-2" />
              All posts
            </Button>
          </Link>
          {post ? (
            <div className="my-8">
              <p className="text-xl font-bold line-clamp-1 mb-4">
                {post.title}
              </p>

              <span>
                by
                <span className="font-semibold"> {post.author}</span>
                <span className="font-semibold"> on {post.updated_at}</span>
              </span>
              <p className=" text-base mt-4 line-clamp-3">{post.content}</p>
              <div className="my-8">
                <img src={post.image} alt="" className="w-full rounded " />
              </div>
              <DompurifySanitized content={post.body} />
              <div className="space-x-4 my-8">
                {post.tags.map((tag) => (
                  <Button key={tag} variant="default" className="mr-2">
                    {tag}
                  </Button>
                ))}
              </div>
            </div>
          ) : (
            <div className="">Not Found.</div>
          )}
        </section>
        <section className="w-full lg:w-1/4 lg:pr-4 mt-8 ">
          <div className="mb-8 flex gap-4 items-center">
            <Icons.layer className="text-xl font-bold" />
            <p className="font-bold text-xl">Other Blogs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
            {posts.map((post) => (
              <Link
                to={`/blogs/${post.id}`}
                key={post.id}
                className="flex items-start mb-6 gap-2"
              >
                <img
                  src={post.image}
                  alt="Blog Image"
                  className="w-1/4 rounded-2xl border border-amber-300 p-2"
                />
                <div className="w-3/4  text-sm text-muted-foreground">
                  <p className="line-clamp-2">{post.content}</p>
                  <i>...See more</i>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
}

export default BlogDetails;
