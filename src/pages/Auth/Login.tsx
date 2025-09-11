import { Icons } from "@/components/Icons";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";

import livingRoomImg from "@/assets/data/images/living-room.jpg";

function Login() {
  return (
    <div className="">
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        <section className="flex ">
          <div className="relative">
            <Link
              to="/"
              className="flex items-center gap-4 fixed top-6 left-8 "
            >
              <Icons.logo className="size-6 " />
              <span className="tracking-widest hover:text-pink-400 transition-colors font-senmibold">
                Furniture Shop
              </span>
            </Link>
          </div>
          <div className="justify-center items-center flex  flex-1 w-full">
            <LoginForm />
          </div>
        </section>
        <section className="hidden lg:block">
          <img
            src={livingRoomImg}
            alt="Living Room"
            className="min-h-screen p-4 rounded-3xl object-cover"
          />
        </section>
      </section>
    </div>
  );
}

export default Login;
