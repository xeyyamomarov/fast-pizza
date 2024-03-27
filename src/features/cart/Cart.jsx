// import { useEffect } from "react";
import EmptyCart from "./EmptyCart";
import Button from "../../ui/Button";
import LinkButton from "../../ui/LinkButton";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart } from "./cartSlice";

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector(getCart);
  // const cart = fakeCart;
  const { username } = useSelector((state) => state.user);

  if (!cart.length) return <EmptyCart />;
  return (
    <div className="py-3 px-4">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>
      <h2 className="font-semibold mt-7 text-xl ">Your cart, {username}</h2>
      <ul className="divide-y divide-stone-200 border-b mt-3">
        {cart?.map((item, i) => (
          <CartItem item={item} key={i} />
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        <Button type="primary" to="/order/new">
          Order pizzas
        </Button>
        <Button type="secondary" onClick={() => dispatch(clearCart())}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
