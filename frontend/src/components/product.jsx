/* eslint-disable @next/next/no-img-element */
import { CartContext } from "@/context/cartContext";
import { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import Ratings from "./ratings";

export default function Product({ name, price, rating, image }) {
  const { cart, setCart } = useContext(CartContext);
  const addToCart = async () => {
    try {
      const resolveAfter3Sec = new Promise((resolve) => setTimeout(resolve, 5000));
      await toast.promise(resolveAfter3Sec, {
        pending: "Adding to the Cart",
        success: "Added to cart",
        error: "Cart Add Failed",
      });
      setCart([...cart, 1]);
    } catch (error) {
      // Handle any errors here
      console.error(error);
    }
  };
  return (
    <div className="h-full max-w-xs space-y-1 overflow-hidden bg-gray-100 rounded-lg">
      <img className="object-cover w-full h-72" src="images/productImages/running-shoes-2048px-9718.jpg" alt="" />
      <div className="flex flex-col justify-between h-[12.5rem] p-4">
        <h3 className="text-lg font-semibold line-clamp-2">{name}</h3>
        <div>
          <h5 className="text-lg font-bold text-emerald-500">
            <i class="fa-solid fa-bangladeshi-taka-sign"></i> {price}
          </h5>
          <Ratings className="text-orange-600" rating={rating} />
          <button className="px-6 py-2 mt-4 text-white rounded-lg bg-emerald-600 hover:bg-emerald-700" onClick={addToCart}>
            Add to Cart <i class="ml-2 fa-solid fa-cart-plus"></i>
          </button>
        </div>
      </div>
      <ToastContainer position="top-center" />
    </div>
  );
}
