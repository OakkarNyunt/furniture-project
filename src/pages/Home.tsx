import Chair from "@/assets/data/images/chair.png";
import BlogCard from "@/components/BlogCard";
import { CarouselCard } from "@/components/CarouselCard";
import { Button } from "@/components/ui/button";

import { products } from "@/type/products";
import { posts } from "@/type/posts";

import { Link } from "react-router-dom";

interface subTitleProps {
  title: string;
  href: string;
  subTitle: string;
}

const slicePosts = posts.slice(0, 3);
function Home() {
  const SubTitle = ({ title, href, subTitle }: subTitleProps) => (
    <div className="flex justify-between my-8">
      <div className="lg:text-3xl font-bold">{title}</div>

      <div className="text-xl underline text-muted-foreground hover:font-bold">
        <Link to={href}>{subTitle}</Link>
      </div>
    </div>
  );
  return (
    <>
      <main className="container mx-auto p-4">
        <div className="flex flex-col justify-between md:flex-row ">
          <div className="text-center space-y-8 md:text-start ">
            <h1 className="text-xl md:text-3xl font-bold mt-30">
              Welcome to Funiture Gallery
            </h1>
            <p className="text-fold text-3xl">Open your smart life.</p>
            <div className="flex justify-evenly">
              <Button className="px-12 py-5 bg-amber-700 hover:bg-gray-500 hover:px-14 hover:py-6 cursor-pointer">
                Shop Now
              </Button>
              <Button className="px-12 py-5  hover:bg-gray-500 hover:px-14 hover:py-6 cursor-pointer">
                Explore
              </Button>
            </div>
          </div>
          <div className="flex justify-center mt-8 md:mt-0">
            <img
              src={Chair}
              alt=""
              className="size-60 md:size-80 lg:size-120"
            />
          </div>
        </div>
        <CarouselCard items={products} />
        <SubTitle title="Recent Blog" href="/blog" subTitle="See All" />
        <BlogCard items={slicePosts} />
      </main>
    </>
  );
}

export default Home;
