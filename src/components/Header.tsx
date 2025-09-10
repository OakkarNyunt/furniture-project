import MainNavigation from "@/components/MainNavigation";
import { siteConfig } from "@/config/site";
import MobileNavigation from "@/components/MobileNavigation";
import { ModeToggle } from "./mode-toggle";

import { User } from "@/assets/data/User";
import UserProfile from "./UserProfile";

function Header() {
  return (
    <header className="container mx-auto bg-background ">
      <nav className="border-b-2 border-gray-200 py-4 items-center flex justify-between">
        <div className="flex items-center gap-4">
          <MainNavigation items={siteConfig.mainNav} />
          <MobileNavigation items={siteConfig.mainNav} />
        </div>
        <div className="mr-8 lg:mr-0">
          <ModeToggle />
        </div>
        <UserProfile data={User} />
      </nav>
    </header>
  );
}

export default Header;
