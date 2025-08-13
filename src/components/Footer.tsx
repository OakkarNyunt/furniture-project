import { siteConfig } from "@/config/site";
import { Icons } from "@/components/Icons";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="">
        <footer className="border-t-2">
          <section className="container ml-4 flex items-center mx-auto py-6 space-x-4">
            <Link to="/" className="hidden md:flex">
              <Icons.logo className="size-8" />
            </Link>
            <div className="hidden md:flex">
              <p className="text-sm md:text-xl font-bold">{siteConfig.name}</p>
            </div>

            <section className="grid grid-cols-2 gap-20 mx-auto lg:grid-cols-4">
              {siteConfig.footerNav.map((footer) => (
                <div key={footer.title} className="">
                  <h4>{footer.title}</h4>
                  {footer.items.map((item) => (
                    <ul key={item.title} className="">
                      <li className="li">
                        <Link to={item.href} className="text-sm">
                          {item.title}
                        </Link>
                      </li>
                    </ul>
                  ))}
                </div>
              ))}
            </section>
          </section>
        </footer>
      </div>
    </>
  );
}

export default Footer;
