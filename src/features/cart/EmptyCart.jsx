import LinkBtn from "../../ui/LinkBtn";

function EmptyCart() {
  return (
    <div className="py-3 px-3">
      <LinkBtn to="/menu">&larr; Back to menu</LinkBtn>

      <p className="font-semibold mt-7">Your cart is still empty. Start adding some pizzas :)</p>
    </div>
  );
}

export default EmptyCart;
