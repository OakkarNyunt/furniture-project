import { siteConfig } from "@/config/site";
import { Icons } from "@/components/Icons";
import { Link } from "react-router-dom";

import NewsLetterForm from "@/components/ui/news-letter-form";

function Footer() {
  return (
    <>
      <div className="">
        <footer className="border-t-2">
          <section className="container ml-4 flex flex-col md:flex-row md:items-start mx-auto py-6 space-y-6 md:space-y-0 md:space-x-4">
            {/* Logo & Name */}
            <div className="flex items-center space-x-2 justify-center">
              <Link to="/" className=" md:flex">
                <Icons.logo className="size-8" />
              </Link>
              <div className=" md:flex">
                <p className="text-sm md:text-xl font-bold">
                  {siteConfig.name}
                </p>
              </div>
            </div>

            {/* Footer Nav */}
            <section className="grid grid-cols-2 gap-10 mx-auto lg:grid-cols-4">
              {siteConfig.footerNav.map((footer) => (
                <div key={footer.title} className="space-y-2">
                  <h4 className="font-bold mb-4">{footer.title}</h4>
                  {footer.items.map((item) => (
                    <ul
                      key={item.title}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      <li>
                        <Link
                          to={item.href}
                          target={item.external ? "_blank" : undefined}
                          className="text-sm"
                        >
                          {item.title}
                        </Link>
                      </li>
                    </ul>
                  ))}
                </div>
              ))}
            </section>

            {/* Newsletter */}
            <section className="flex flex-row md:flex-col flex-1 mx-auto">
              <NewsLetterForm />
            </section>
          </section>
        </footer>
      </div>
    </>
  );
}

export default Footer;
