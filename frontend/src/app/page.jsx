"use client";
/* eslint-disable @next/next/no-img-element */
import Header from "@/components/header";
import { CartContext } from "@/context/cartContext";
import { useEffect, useState } from "react";
import ProductSection from "./productSection";

export default function Home() {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let cartItems = JSON.parse(localStorage?.getItem("cart")) || [];
    let carItemsCount = cartItems?.length;
    setCartCount(carItemsCount);
  }, []);

  return (
    <main>
      <CartContext.Provider value={{ cartCount, setCartCount }}>
        <Header />
        <ProductSection />
      </CartContext.Provider>
    </main>
  );
}
