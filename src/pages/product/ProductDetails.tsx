import { Link, useParams } from "react-router-dom";
import { products } from "@/type/products";
import { Icons } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import ProductCard from "./ProductCard";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

import { Carousel, CarouselContent } from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";
import { Separator } from "@/components/ui/separator";
import Rating from "./Rating";
import AddToFavourite from "./AddToFavourite";

function ProductDetails() {
  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);
  return (
    <div className="">
      <section className="container mx-auto mt-8">
        <div className="">
          <Link to="/products">
            <Button variant="outline">
              <Icons.arrowLeft className="mr-2" />
              All posts
            </Button>
          </Link>
        </div>
        <section className="flex flex-col md:flex-row my-8 gap-8">
          <div className="w-full md:w-2/3">
            <Carousel
              plugins={[
                Autoplay({
                  delay: 3000,
                }),
              ]}
            >
              <CarouselContent className="">
                {product?.images.map((img) => (
                  <img
                    src={img}
                    alt=""
                    key={img}
                    className="w-full object-contain"
                  />
                ))}
              </CarouselContent>
            </Carousel>
          </div>
          <div className="w-full">
            <div>
              <div className="space-y-4 pl-4 md:pl-0">
                <h1 className="text-2xl font-medium">{product?.name}</h1>
                <p className="text-muted-foreground text-base">
                  $ {product?.price}
                </p>
              </div>
              <Separator className="my-4" />
              <div className="">
                <h1 className="text-base text-muted-foreground pl-4 md:pl-0">
                  {product?.inventory} in Stock
                </h1>
              </div>
              <div className="flex items-center justify-between pe-4 md:pe-0">
                <Rating rating={product?.rating ?? 0} />
                <AddToFavourite />
              </div>
            </div>
          </div>
        </section>
        <section>
          <h1 className="text-2xl font-bold my-8 pl-4 md:pl-0">
            More Products from Furniture Shop
          </h1>
          <div className="">
            <ScrollArea className="w-full rounded-md border ">
              <div className="flex space-x-4 p-4 mb-8 max-w">
                {products.slice(0, 8).map((item) => (
                  <ProductCard key={item.id} product={item} />
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>
        </section>
      </section>
    </div>
  );
}

export default ProductDetails;
