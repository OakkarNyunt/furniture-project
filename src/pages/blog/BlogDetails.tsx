import { Link, useParams } from "react-router-dom";
import { posts } from "@/type/posts";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/Icons";

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
              <p className="my-8">{post.body}</p>
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
        <section className="w-full lg:w-1/4 lg:pr-4 mt-8">Others</section>
      </section>
    </div>
  );
}

export default BlogDetails;
