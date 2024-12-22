import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className="bg-stone-800 text-stone-200 uppercase md:text-base p-4 text-sm sm:p-6 flex items-center justify-between" >
      <p className="text-stone-300 space-x-4 font-semibold sm:space-x-6">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="cart">Open Cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
 