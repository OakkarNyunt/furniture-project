import Chair from "@/assets/data/images/chair.png";
import { CarouselCard } from "@/components/CarouselCard";
import { Button } from "@/components/ui/button";

import { products } from "@/type/products";

function Home() {
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
              <Button className="px-12 py-5 bg-amber-700 hover:bg-black">
                Shop Now
              </Button>
              <Button className="px-12 py-5 hover:bg-amber-700">Explore</Button>
            </div>
          </div>
          <div className="flex justify-center mt-8 md:mt-0">
            <img
              src={Chair}
              alt=""
              className="size-60 md:size-80 lg:size-150"
            />
          </div>
        </div>
        <CarouselCard items={products} />
      </main>
    </>
  );
}

export default Home;
