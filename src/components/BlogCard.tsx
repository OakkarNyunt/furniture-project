import type { Post } from "@/type";

interface postsProps {
  items: Post[];
}

function BlogCard({ items }: postsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 my-8 gap-10 px-8">
      {items.map((item) => (
        <div className="" key={item.id}>
          <img src={item.image} alt="" className=" size-80 rounded mb-4" />
          <p className="text-xl font-semibold mb-2">{item.title}</p>
          <span>
            by
            <span className="font-semibold"> {item.author}</span>
            <span className="font-semibold"> on {item.updated_at}</span>
          </span>
        </div>
      ))}
    </div>
  );
}

export default BlogCard;
