"use client";
/* eslint-disable @next/next/no-img-element */
import Header from "@/components/header";
import { CartContext } from "@/context/cartContext";
import { useState } from "react";
import ProductSection from "./productSection";

export default function Home() {
  const [cartCount, setCartCount] = useState(JSON.parse(localStorage.getItem("cart"))?.length || 0);
  return (
    <main>
      <CartContext.Provider value={{ cartCount, setCartCount }}>
        <Header />
        <ProductSection />
      </CartContext.Provider>
    </main>
  );
}
