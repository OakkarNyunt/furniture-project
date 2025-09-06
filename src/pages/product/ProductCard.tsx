import { Icons } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Product } from "@/type";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";

import { Link } from "react-router-dom";

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="mt-4">
      <CardHeader className="border-b-1 border-gray-400">
        <Link to={`/products/${product.id}`}>
          <AspectRatio ratio={1 / 1}>
            <img
              src={product.images[0]}
              alt=""
              className="size-full rounded-2xl object-cover bg-muted"
              loading="lazy"
            />
          </AspectRatio>
        </Link>
      </CardHeader>
      <CardContent className="ms-2 space-y-2">
        <CardTitle className="text-xl line-clamp-1">{product.name}</CardTitle>
        <CardDescription className="text-lg space-x-8">
          ${product.price}
          {product.discount > 0 ? (
            <span className="ml-2 line-through"> ${product.discount}</span>
          ) : (
            ""
          )}
        </CardDescription>
      </CardContent>
      <CardFooter>
        {product.status === "active" ? (
          <Button
            size={"sm"}
            className="w-full bg-green-700 hover:bg-green-500 text-white text-center font-bold py-5"
          >
            <Icons.plus className="mr-2.5" />
            Add to Cart
          </Button>
        ) : (
          <Button size={"sm"} disabled className="w-full py-5">
            Sold Out
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}

export default ProductCard;
