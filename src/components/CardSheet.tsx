import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Badge } from "./ui/badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Separator } from "./ui/separator";
import { cartItems } from "@/type/cart";

import CartItem from "./Cart/CartItem";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";

export function CardSheet() {
  const itemCount = cartItems.length;
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          {itemCount <= 0 ? null : (
            <Badge
              className="h-5 min-w-5 justify-center items-center px-1 font-mono absolute -right-2 -top-2 size-6 rounded-full p-3"
              variant="destructive"
            >
              {itemCount}
            </Badge>
          )}
          <FontAwesomeIcon icon={faCartShopping} className="" />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full max-w-lg">
        <SheetHeader>
          <SheetTitle className="text-center text-2xl">Cart</SheetTitle>
          <p className="text-center text-2xl">Item Count - {itemCount}</p>
        </SheetHeader>
        <Separator />
        {itemCount <= 0 ? (
          <div className="flex flex-1 justify-center items-center flex-col gap-8">
            <p>
              <FontAwesomeIcon icon={faCartShopping} className="text-5xl" />
            </p>
            <p className="font-medium text-xl">Your Cart is Empty. Buy Now!</p>
          </div>
        ) : (
          <>
            <ScrollArea className="my-4 h-[40vh] w-full">
              <div className="p-2 space-y-2">
                {cartItems.map((item) => (
                  <div key={item.id} className="border-b pb-2">
                    <CartItem cart={item} />
                  </div>
                ))}
              </div>
              <ScrollBar orientation="vertical" />
            </ScrollArea>
            <Separator />

            <SheetFooter>
              <div className="w-full space-y-2">
                <div className="flex justify-between mx-2.5 font-semibold">
                  <p>Net Amount</p>
                  <p>$120.00</p>
                </div>

                <div className="flex justify-between mx-2.5">
                  <p>Tax</p>
                  <p>$0.00</p>
                </div>
                <div className="flex justify-between mx-2.5">
                  <p>Shipping</p>
                  <p>Free</p>
                </div>
                <div className="flex justify-between mx-2.5 font-semibold">
                  <p>Total</p>
                  <p>$120.00</p>
                </div>
              </div>

              <SheetClose asChild className="mt-4">
                <Button variant="outline">Checkout</Button>
              </SheetClose>
            </SheetFooter>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
