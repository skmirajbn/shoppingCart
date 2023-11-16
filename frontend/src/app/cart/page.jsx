/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { CartContext } from "@/context/cartContext";
import { useContext, useEffect, useState } from "react";

export default function Cart() {
  const { cartProducts, productMutate } = useContext(CartContext);
  const [quantities, setQuantities] = useState({});
  const [subTotal, setSubTotal] = useState(0);

  useEffect(() => {
    productMutate();
  }, []);

  const handleQuantityChange = (index, quantity) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [index]: quantity,
    }));
  };

  useEffect(() => {
    const calculateSubTotal = () => {
      let total = 0;
      cartProducts?.forEach((product, index) => {
        const quantity = quantities[index] || 1;
        total += parseFloat(product.price) * parseInt(quantity);
      });
      setSubTotal(total);
    };

    calculateSubTotal();
  }, [quantities, cartProducts]);

  return (
    <section className="px-6 py-4 mx-auto bg-gray-100 max-w-7xl">
      <h2 className="py-6 text-4xl font-bold text-center">Cart</h2>
      <div className="p-10 bg-white rounded-lg">
        <div className="space-y-3">
          {cartProducts?.map((product, index) => (
            <div className="flex items-center gap-4" key={index}>
              <img className="object-cover w-20 h-20 rounded-md" src={product.image} alt="" />
              <input className="w-12 px-2 py-2 border-2 border-gray-500 rounded-lg" value={quantities[index] || 1} type="number" onChange={(e) => handleQuantityChange(index, e.target.value)} />
              <div>
                <h3 className="text-lg font-semibold text-green-800">{product.name}</h3>
                <h4 className="text-orange-500">
                  <i class="fa-solid fa-bangladeshi-taka-sign"></i> {product.price}
                </h4>
                <h3>Total: {parseFloat(product.price) * parseInt(quantities[index]) || parseFloat(product.price)}</h3>
              </div>
            </div>
          ))}
        </div>
        <h2 className="text-xl font-bold text-center">Sub Total: {subTotal}</h2>
        <button className="p-3 text-white bg-green-600 rounded-md">Confirm Order</button>
      </div>
    </section>
  );
}
