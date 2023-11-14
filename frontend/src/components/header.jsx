"use client";
import Image from "next/image";
import { useRef } from "react";
import avatar from "./../../public/avatar.jpg";
export default function Header() {
  const dropdown = useRef();
  const toggleDropdown = () => {
    dropdown.current.classList.toggle("hidden");
  };
  return (
    <div className="bg-gradient-to-r from-blue-500 to-emerald-500 py-4 text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h3 className="text-xl  font-semibold">
          Shopping Cart <i class="fa-solid fa-cart-shopping"></i>
        </h3>
        <div className="flex items-center gap-4" onClick={toggleDropdown}>
          <h3 className="font-medium ">Sk Miraj</h3>
          <div className="flex items-center gap-2 relative">
            <Image className="w-11 h-11 rounded-full object-cover" alt="avatar" src={avatar} />
            <i class="fa-solid fa-chevron-down"></i>
            <div ref={dropdown} className="user-dropdown hidden">
              <a className="btn-primary" href="">
                <i class="fa-solid fa-bag-shopping mr-2"></i> My Orders
              </a>
              <a className="btn-logout" href="">
                <i class="fa-solid fa-right-from-bracket mr-2"></i> Logout
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
