import MainNavigation from "@/components/MainNavigation";
import { siteConfig } from "@/config/site";

function Header() {
  return (
    <>
      <header className="">
        <nav className="container border-b-2 border-gray-200 py-4 item-center mx-auto">
          <MainNavigation items={siteConfig.mainNav} />
        </nav>
      </header>
    </>
  );
}

export default Header;
