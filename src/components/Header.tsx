import MainNavigation from "@/components/MainNavigation";
import { siteConfig } from "@/config/site";
import MobileNavigation from "@/components/MobileNavigation";
import { ModeToggle } from "./mode-toggle";

function Header() {
  return (
    <>
      <header>
        <nav className="container border-b-2 border-gray-200 py-4 items-center mx-auto flex justify-between">
          <div className="flex items-center gap-4">
            <MainNavigation items={siteConfig.mainNav} />
            <MobileNavigation items={siteConfig.mainNav} />
          </div>
          <div className="mr-8 lg:mr-0">
            <ModeToggle />
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
