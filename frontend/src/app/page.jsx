"use client";

import Product from "@/components/product";
import axios from "@/lib/axios";
import useSWR from "swr";

/* eslint-disable @next/next/no-img-element */

export default function Home() {
  const { data: { data: products } = {}, error } = useSWR("/api/products", () => axios.get("/api/products"));
  return (
    <section className="px-6 py-4 mx-auto bg-gray-100 max-w-7xl">
      <h2 className="py-6 text-4xl font-bold text-center">Product List</h2>
      <div className="p-10 bg-white rounded-lg">
        <div className="grid grid-cols-4 gap-4">
          {products?.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
