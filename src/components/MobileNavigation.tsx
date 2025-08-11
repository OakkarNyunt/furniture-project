import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Button } from "@/components/ui/button";

import { Icons } from "./Icons";
import { siteConfig } from "@/config/site";
import type { MainNavItem } from "@/type";
import { Link } from "react-router-dom";
import { ScrollArea } from "@radix-ui/react-scroll-area";

interface MainNavigationProps {
  items?: MainNavItem[];
}

function MobileNavigation({ items }: MainNavigationProps) {
  return (
    <>
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger className="ml-3">
            <Button variant="ghost" size={"icon"} className="size-10">
              <Icons.menu className="" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetClose className="mt-6">
              <SheetHeader>
                <div className="">
                  <Link to="/" className="flex items-center text-black ">
                    <Icons.logo className="size-7 mx-4" />
                    <p className="inline-block font-bold">{siteConfig.name}</p>
                  </Link>
                </div>
              </SheetHeader>
            </SheetClose>
            <ScrollArea className="h-[calc(100vh-6rem)] mx-4">
              <Accordion type="multiple">
                <AccordionItem value="item-1">
                  <AccordionTrigger className=" hover:no-underline ">
                    {items?.[0].title}
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col pl-2 text-gray-500 space-y-2">
                    {items?.[0].card?.map((item) => (
                      <Link
                        to={String(item.href)}
                        key={item.title}
                        className=""
                      >
                        {item.title}
                      </Link>
                    ))}
                  </AccordionContent>
                </AccordionItem>
                <div className="">
                  {items?.[0].menu?.map((item) => (
                    <div className="space-y-2 border-b-1 py-3 ">
                      {item.title}
                    </div>
                  ))}
                </div>
              </Accordion>
            </ScrollArea>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}

export default MobileNavigation;
