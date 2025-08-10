// import Link from "next/link"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import { Icons } from "./Icons";
import { siteConfig } from "@/config/site";
import type { MainNavItem } from "@/type";

interface MainNavigationProps {
  items?: MainNavItem[];
}

export function NavigationMenuDemo({ items }: MainNavigationProps) {
  return (
    <>
      <div className="hidden gap-6 lg:flex items-center">
        <div className="flex">
          <div className="">
            <Link to="/" className="text-2xl font-bold flex space-x-4">
              <Icons.logo className="size-7" />
              <p className="inline-block">{siteConfig.name}</p>
            </Link>
          </div>
        </div>
        <NavigationMenu viewport={false}>
          <NavigationMenuList>
            {items?.[0].title && (
              <NavigationMenuItem>
                <NavigationMenuTrigger>{items[0].title}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                          to="/"
                        >
                          <div className="mt-4 mb-2 text-lg font-medium">
                            <Icons.logo className="size-7" />
                            {siteConfig.name}
                          </div>
                          <p className="text-muted-foreground text-sm leading-tight">
                            {siteConfig.description}
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    {items[0].card?.map((item) => (
                      <ListItem
                        key={item.title}
                        href={String(item.href)}
                        title={item.title}
                      >
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            )}

            <NavigationMenuItem>
              {items?.[0].menu?.map((item) => (
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                  key={item.title}
                >
                  <Link to={String(item.href)}>{item.title}</Link>
                </NavigationMenuLink>
              ))}
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link to={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
export default NavigationMenuDemo;
