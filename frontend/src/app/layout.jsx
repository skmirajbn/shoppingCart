"use client";
import Header from "@/components/header";
import { CartContext } from "@/context/cartContext";
import { useAuth } from "@/hooks/auth";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import "./../../public/fontawesome/css/all.min.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const { error } = useAuth({ middleware: "guest" });
  const [cartProducts, setCartProducts] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    if (!error) {
      localStorage.setItem("login", true);
    } else {
      localStorage.removeItem("login");
    }
  }, [error]);
  console.log(error);
  const productMutate = () => {
    let cartItems = JSON.parse(localStorage?.getItem("cart")) || [];
    let carItems = cartItems;
    setCartProducts(carItems);
    setCartCount(cartItems.length);
  };
  useEffect(() => {
    productMutate();
  }, []);
  return (
    <html lang="en">
      <head>
        <title>Shopping Cart</title>
      </head>
      <CartContext.Provider value={{ cartProducts, setCartProducts, cartCount, setCartCount, productMutate }}>
        <body className={inter.className}>
          <Header />
          {children}
        </body>
      </CartContext.Provider>
    </html>
  );
}
