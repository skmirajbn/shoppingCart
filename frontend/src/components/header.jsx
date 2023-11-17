"use client";
import { CartContext } from "@/context/cartContext";
import { useAuth } from "@/hooks/auth";
import { useIsLoggedIn } from "@/hooks/useIsLoggedIn";
import Image from "next/image";
import Link from "next/link";
import { useContext, useRef } from "react";
import avatar from "./../../public/avatar.jpg";
export default function Header() {
  const { logout } = useAuth({ middleware: "guest" });
  const isLoggedIn = useIsLoggedIn();
  const { user } = useAuth({ middleware: "guest" });
  const { cartCount } = useContext(CartContext);
  const dropdown = useRef();
  const toggleDropdown = () => {
    dropdown.current.classList.toggle("hidden");
  };
  console.log(isLoggedIn);
  return (
    <div className="py-4 text-white bg-gradient-to-r from-blue-500 to-emerald-500">
      <div className="flex items-center justify-between mx-auto max-w-7xl">
        <Link href="/">
          <h3 className="text-xl font-semibold ">
            Shopping Cart <i class="fa-solid fa-cart-shopping"></i>
          </h3>
        </Link>

        <div className="flex items-center gap-4">
          {isLoggedIn && (
            <div className="flex items-center gap-4" onClick={toggleDropdown}>
              <h3 className="font-medium ">Sk Miraj</h3>
              <h5 className="px-2 py-1 bg-green-600 rounded-lg">{user?.role}</h5>
              <div className="relative flex items-center gap-2">
                <Image className="object-cover rounded-full w-11 h-11" alt="avatar" src={avatar} />
                <i class="fa-solid fa-chevron-down"></i>
                <div ref={dropdown} className="hidden user-dropdown">
                  <Link className="btn-primary" href="">
                    <i class="fa-solid fa-bag-shopping mr-2"></i> My Orders
                  </Link>
                  {user?.role === "admin" && (
                    <Link href={"/admin/add-product"}>
                      <div className="btn-primary">
                        <i class="fa-solid fa-bag-shopping mr-2"></i>Product +
                      </div>
                    </Link>
                  )}
                  <div className="btn-logout" onClick={logout}>
                    <i class="fa-solid fa-right-from-bracket mr-2"></i> Logout
                  </div>
                </div>
              </div>
            </div>
          )}
          {!isLoggedIn && (
            <div className="flex items-center gap-3 ">
              <Link href="/login">
                <button className="px-4 py-1 font-bold bg-blue-600 rounded-lg">
                  Login <i class="fa-solid fa-right-to-bracket"></i>
                </button>
              </Link>
              <Link href="/create-account">
                <button className="px-4 py-1 font-bold bg-orange-600 rounded-lg">
                  Sign Up <i class="fa-solid fa-user-plus"></i>
                </button>
              </Link>
            </div>
          )}
          <Link href={"/cart"}>
            <div className="flex items-center gap-3 ">
              <span className="font-bold">Cart</span>
              <div className="relative">
                <i class="fa-solid fa-bag-shopping text-3xl"></i>
                <div className="absolute flex items-center justify-center w-6 h-6 text-sm bg-red-600 rounded-full -top-1 -right-4">{cartCount}</div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
