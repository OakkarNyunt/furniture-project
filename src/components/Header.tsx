import MainNavigation from "@/components/MainNavigation";
import { siteConfig } from "@/config/site";
import MobileNavigation from "@/components/MobileNavigation";

function Header() {
  return (
    <>
      <header className="">
        <nav className="container border-b-2 border-gray-200 py-4 item-center mx-auto">
          <MainNavigation items={siteConfig.mainNav} />
          <MobileNavigation items={siteConfig.mainNav} />
        </nav>
        <div className="">ok</div>
      </header>
    </>
  );
}

export default Header;
