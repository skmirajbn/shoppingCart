/* eslint-disable @next/next/no-img-element */
"use client";
import Ratings from "@/components/ratings";
import axios from "@/lib/axios";
import useSWR from "swr";

export default function AllProducts() {
  const { data: { data: products } = {}, error, mutate } = useSWR("/api/products", () => axios.get("/api/products"));

  const handleDelete = async (id) => {
    await axios.delete(`api/product/${id}`);
    alert("Product Deleted Successfully");
    mutate();
  };
  return (
    <div className="space-y-4">
      {products?.map((product) => (
        <div key={product.id} className="flex items-center gap-6">
          <img className="w-16 h-16 rounded-lg" src={process.env.NEXT_PUBLIC_BACKEND_URL + "images/" + product.image} alt="" />
          <div>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <div className="text-orange-600">
              <Ratings rating={product.rating} />
            </div>
          </div>
          <div>
            <button
              className="px-6 py-2 text-white bg-red-600 rounded-lg"
              onClick={() => {
                handleDelete(product.id);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
