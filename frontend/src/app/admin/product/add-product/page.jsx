/* eslint-disable @next/next/no-img-element */
"use client";
import { useAuth } from "@/hooks/auth";
import { useEffect } from "react";

export default function AdminProduct() {
  const { user } = useAuth({ middleware: "auth" });
  useEffect(() => {
    if (user?.role !== "admin" && user) {
      window.location.href = "/";
    }
  }, [user]);

  const handleSubmit = (event) => {};
  return (
    <form className="flex flex-col justify-center space-y-3" onSubmit={handleSubmit}>
      <div className="space-y-3">
        <div>
          <label htmlFor="">Product Name:</label>
          <input className="w-full px-3 py-2 border-2 border-blue-400 rounded-md" name="name" type="text" placeholder="Enter Product Name" />
          {/* <p className="text-sm italic text-red-500">{errors.name}</p> */}
        </div>
        <div>
          <label htmlFor="">Product Description(Optional):</label>
          <input className="w-full px-3 py-2 border-2 border-blue-400 rounded-md" name="price" type="text" placeholder="Enter Product Description" />
          {/* <p className="text-sm italic text-red-500">{errors.email}</p> */}
        </div>
        <div>
          <label htmlFor="">Product Price:</label>
          <input className="w-full px-3 py-2 border-2 border-blue-400 rounded-md" name="price" type="number" placeholder="Enter Product Price" />
          {/* <p className="text-sm italic text-red-500">{errors.password}</p> */}
        </div>
        <div>
          <label htmlFor="">Rating (1-5) :</label>
          <input className="w-full px-3 py-2 border-2 border-blue-400 rounded-md" name="rating" type="number" placeholder="Enter Rating" />
        </div>
        <div className="flex items-center gap-6">
          <div>
            <label htmlFor="">Product Image :</label>
            <input className="w-full px-3 py-2 border-2 border-blue-400 rounded-md" name="rating" type="file" placeholder="Enter Rating" />
          </div>
          <div>
            <img className="object-cover rounded-lg w-36 h-36" src="/product.png" alt="" />
          </div>
        </div>
      </div>
      <button className="py-2 text-white bg-orange-600 rounded-md hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-700" type="submit">
        Add Product
      </button>
    </form>
  );
}
