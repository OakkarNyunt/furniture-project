import type { Cart } from "@/type";
import ReuseAddToCart from "./ReuseAddToCart";

interface CartProps {
  cart: Cart;
}
function CartItem({ cart }: CartProps) {
  return (
    <section className="">
      <section className="flex gap-4 p-2">
        <div className="w-2/6 ">
          <img src={cart.image.url} alt="" className="w-full rounded-2xl" />
        </div>
        <div className=" w-4/6 space-x-2 font-semibold">
          <p>{cart.name}</p>
          <p>
            {cart.price} x {cart.quantity}
          </p>
          <p>{` ${cart.category} / ${cart.subcategory}`}</p>
        </div>
      </section>
      <section>
        <ReuseAddToCart />
      </section>
    </section>
  );
}

export default CartItem;
