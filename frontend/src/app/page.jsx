"use client";
/* eslint-disable @next/next/no-img-element */
import Header from "@/components/header";
import { CartContext } from "@/context/cartContext";
import { useState } from "react";
import ProductSection from "./productSection";

export default function Home() {
  const [cart, setCart] = useState([]);
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <main>
        <Header />
        <ProductSection />
      </main>
    </CartContext.Provider>
  );
}
