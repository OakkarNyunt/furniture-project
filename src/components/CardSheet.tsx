import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Badge } from "./ui/badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Separator } from "./ui/separator";

export function CardSheet() {
  const itemCount = 0;
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
          <div className="">ok</div>
        )}

        {/* <SheetFooter>
          <Button type="submit">Save changes</Button>
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter> */}
      </SheetContent>
    </Sheet>
  );
}
