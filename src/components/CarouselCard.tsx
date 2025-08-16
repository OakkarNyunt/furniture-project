import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { Product } from "@/type";

interface ProductProps {
  items: Product[];
}

export function CarouselCard({ items }: ProductProps) {
  return (
    <Carousel
      className="container w-full "
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      <CarouselContent className="-ml-1">
        {items.map((product) => (
          <CarouselItem
            key={product.id}
            className="pl-1 md:basis-1/2 lg:basis-1/3"
          >
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col items-center">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="  object-cover mb-4 size-30"
                  />
                  <h2 className="text-lg font-semibold">{product.name}</h2>
                  <p className="text-sm text-gray-600">{product.description}</p>
                  <p className="text-xl font-bold mt-2">
                    ${product.price.toFixed(2)}
                  </p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
