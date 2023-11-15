/* eslint-disable @next/next/no-img-element */

import Ratings from "@/components/ratings";
import { CartContext } from "@/context/cartContext";
import { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ProductSection() {
  const { cart, setCart } = useContext(CartContext);
  const addToCart = async () => {
    try {
      const resolveAfter3Sec = new Promise((resolve) => setTimeout(resolve, 1000));
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
    <section className="px-6 py-4 mx-auto bg-gray-100 max-w-7xl">
      <ToastContainer position="top-center" />
      <h2 className="py-6 text-4xl font-bold text-center">Product List</h2>
      <div className="p-10 bg-white rounded-lg">
        <div className="grid grid-cols-4 gap-4">
          {/* Single Product */}
          <div className="max-w-xs space-y-1 overflow-hidden bg-gray-100 rounded-lg">
            <img className="object-cover w-full h-72" src="images/productImages/running-shoes-2048px-9718.jpg" alt="" />
            <div className="p-4">
              <h3 className="text-lg font-semibold line-clamp-2">New Premium Men&apos;s Neaker For Party or Offices</h3>
              <h5 className="text-lg font-bold text-emerald-500">
                <i class="fa-solid fa-bangladeshi-taka-sign"></i> 5000
              </h5>
              <Ratings className="text-orange-600" rating={4} />
              <button className="px-6 py-2 mt-4 text-white rounded-lg bg-emerald-600 hover:bg-emerald-700" onClick={addToCart}>
                Add to Cart <i class="ml-2 fa-solid fa-cart-plus"></i>
              </button>
            </div>
          </div>
          {/* Single Product */}
          <div className="max-w-xs space-y-1 overflow-hidden bg-gray-100 rounded-lg">
            <img className="object-cover w-full h-72" src="images/productImages/running-shoes-2048px-9718.jpg" alt="" />
            <div className="p-4">
              <h3 className="text-lg font-semibold line-clamp-2">New Premium Men&apos;s Neaker For Party or Offices</h3>
              <h5 className="text-lg font-bold text-emerald-500">
                <i class="fa-solid fa-bangladeshi-taka-sign"></i> 5000
              </h5>
              <Ratings className="text-orange-600" rating={4} />
              <button className="px-6 py-2 mt-4 text-white rounded-lg bg-emerald-600">
                Add to Cart <i class="ml-2 fa-solid fa-cart-plus"></i>
              </button>
            </div>
          </div>
          {/* Single Product */}
          <div className="max-w-xs space-y-1 overflow-hidden bg-gray-100 rounded-lg">
            <img className="object-cover w-full h-72" src="images/productImages/running-shoes-2048px-9718.jpg" alt="" />
            <div className="p-4">
              <h3 className="text-lg font-semibold line-clamp-2">New Premium Men&apos;s Neaker For Party or Offices</h3>
              <h5 className="text-lg font-bold text-emerald-500">
                <i class="fa-solid fa-bangladeshi-taka-sign"></i> 5000
              </h5>
              <Ratings className="text-orange-600" rating={4} />
              <button className="px-6 py-2 mt-4 text-white rounded-lg bg-emerald-600">
                Add to Cart <i class="ml-2 fa-solid fa-cart-plus"></i>
              </button>
            </div>
          </div>
          {/* Single Product */}
          <div className="max-w-xs space-y-1 overflow-hidden bg-gray-100 rounded-lg">
            <img className="object-cover w-full h-72" src="images/productImages/running-shoes-2048px-9718.jpg" alt="" />
            <div className="p-4">
              <h3 className="text-lg font-semibold line-clamp-2">New Premium Men&apos;s Neaker For Party or Offices</h3>
              <h5 className="text-lg font-bold text-emerald-500">
                <i class="fa-solid fa-bangladeshi-taka-sign"></i> 5000
              </h5>
              <Ratings className="text-orange-600" rating={4} />
              <button className="px-6 py-2 mt-4 text-white rounded-lg bg-emerald-600 hover:bg-emerald-600">
                Add to Cart <i class="ml-2 fa-solid fa-cart-plus"></i>
              </button>
            </div>
          </div>
          {/* Single Product */}
          <div className="max-w-xs space-y-1 overflow-hidden bg-gray-100 rounded-lg">
            <img className="object-cover w-full h-72" src="images/productImages/running-shoes-2048px-9718.jpg" alt="" />
            <div className="p-4">
              <h3 className="text-lg font-semibold line-clamp-2">New Premium Men&apos;s Neaker For Party or Offices</h3>
              <h5 className="text-lg font-bold text-emerald-500">
                <i class="fa-solid fa-bangladeshi-taka-sign"></i> 5000
              </h5>
              <Ratings className="text-orange-600" rating={4} />
              <button className="px-6 py-2 mt-4 text-white rounded-lg bg-emerald-600">
                Add to Cart <i class="ml-2 fa-solid fa-cart-plus"></i>
              </button>
            </div>
          </div>
          {/* Single Product */}
          <div className="max-w-xs space-y-1 overflow-hidden bg-gray-100 rounded-lg">
            <img className="object-cover w-full h-72" src="images/productImages/running-shoes-2048px-9718.jpg" alt="" />
            <div className="p-4">
              <h3 className="text-lg font-semibold line-clamp-2">New Premium Men&apos;s Neaker For Party or Offices</h3>
              <h5 className="text-lg font-bold text-emerald-500">
                <i class="fa-solid fa-bangladeshi-taka-sign"></i> 5000
              </h5>
              <Ratings className="text-orange-600" rating={4} />
              <button className="px-6 py-2 mt-4 text-white rounded-lg bg-emerald-600">
                Add to Cart <i class="ml-2 fa-solid fa-cart-plus"></i>
              </button>
            </div>
          </div>
          {/* Single Product */}
          <div className="max-w-xs space-y-1 overflow-hidden bg-gray-100 rounded-lg">
            <img className="object-cover w-full h-72" src="images/productImages/running-shoes-2048px-9718.jpg" alt="" />
            <div className="p-4">
              <h3 className="text-lg font-semibold line-clamp-2">New Premium Men&apos;s Neaker For Party or Offices</h3>
              <h5 className="text-lg font-bold text-emerald-500">
                <i class="fa-solid fa-bangladeshi-taka-sign"></i> 5000
              </h5>
              <Ratings className="text-orange-600" rating={4} />
              <button className="px-6 py-2 mt-4 text-white rounded-lg bg-emerald-600">
                Add to Cart <i class="ml-2 fa-solid fa-cart-plus"></i>
              </button>
            </div>
          </div>
          {/* Single Product */}
          <div className="max-w-xs space-y-1 overflow-hidden bg-gray-100 rounded-lg">
            <img className="object-cover w-full h-72" src="images/productImages/running-shoes-2048px-9718.jpg" alt="" />
            <div className="p-4">
              <h3 className="text-lg font-semibold line-clamp-2">New Premium Men&apos;s Neaker For Party or Offices</h3>
              <h5 className="text-lg font-bold text-emerald-500">
                <i class="fa-solid fa-bangladeshi-taka-sign"></i> 5000
              </h5>
              <Ratings className="text-orange-600" rating={4} />
              <button className="px-6 py-2 mt-4 text-white rounded-lg bg-emerald-600">
                Add to Cart <i class="ml-2 fa-solid fa-cart-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
