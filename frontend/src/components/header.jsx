"use client";
import { CartContext } from "@/context/cartContext";
import Image from "next/image";
import { useContext, useRef } from "react";
import avatar from "./../../public/avatar.jpg";
export default function Header() {
  const { cart } = useContext(CartContext);
  const cartCount = cart.length;

  const dropdown = useRef();
  const toggleDropdown = () => {
    dropdown.current.classList.toggle("hidden");
  };
  return (
    <div className="py-4 text-white bg-gradient-to-r from-blue-500 to-emerald-500">
      <div className="flex items-center justify-between mx-auto max-w-7xl">
        <h3 className="text-xl font-semibold ">
          Shopping Cart <i class="fa-solid fa-cart-shopping"></i>
        </h3>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-4" onClick={toggleDropdown}>
            <h3 className="font-medium ">Sk Miraj</h3>
            <div className="relative flex items-center gap-2">
              <Image className="object-cover rounded-full w-11 h-11" alt="avatar" src={avatar} />
              <i class="fa-solid fa-chevron-down"></i>
              <div ref={dropdown} className="hidden user-dropdown">
                <a className="btn-primary" href="">
                  <i class="fa-solid fa-bag-shopping mr-2"></i> My Orders
                </a>
                <a className="btn-logout" href="">
                  <i class="fa-solid fa-right-from-bracket mr-2"></i> Logout
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 ">
            <span className="font-bold">Cart</span>
            <div className="relative">
              <i class="fa-solid fa-bag-shopping text-3xl"></i>
              <div className="absolute flex items-center justify-center w-5 h-5 bg-red-600 rounded-full -top-1 -right-3">{cartCount}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
