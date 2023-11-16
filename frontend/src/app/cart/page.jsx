/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { CartContext } from "@/context/cartContext";
import { useContext, useEffect } from "react";

export default function Cart() {
  const { cartProducts, productMutate } = useContext(CartContext);
  useEffect(() => {
    productMutate();
  }, []);
  return (
    <section className="px-6 py-4 mx-auto bg-gray-100 max-w-7xl">
      <h2 className="py-6 text-4xl font-bold text-center">Cart</h2>
      <div className="p-10 bg-white rounded-lg">
        <div className="grid grid-cols-4 gap-4">
          <div>
            {cartProducts?.map((product, index) => (
              <div key={index}>
                <h3>{product.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
