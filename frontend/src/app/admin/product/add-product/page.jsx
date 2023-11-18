/* eslint-disable @next/next/no-img-element */
"use client";
import { useAuth } from "@/hooks/auth";
import axios from "@/lib/axios";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function AdminProduct() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const [errors, setErrors] = useState([]);
  const productImageRef = useRef();
  const productInputRef = useRef();
  const { user } = useAuth({ middleware: "auth" });
  useEffect(() => {
    if (user?.role !== "admin" && user) {
      window.location.href = "/";
    }
  }, [user]);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    rating: "",
  });
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });
    if (productInputRef.current.files[0]) {
      data.append("image", productInputRef.current.files[0]);
    }
    setIsLoading(true);
    await axios
      .post("api/add-product", data)
      .then(() => {
        alert("Product Added Successfully");
        //navigate to all product
        router.push("/admin/product/all-products");
      })
      .catch((error) => {
        if (error.response.status !== 422) throw error;
        setErrors(error.response.data.errors);
      });
    setIsLoading(false);
  };
  return (
    <form className="flex flex-col justify-center space-y-3" onSubmit={handleSubmit}>
      <div className="space-y-3">
        <div>
          <label htmlFor="">Product Name:</label>
          <input className="w-full px-3 py-2 border-2 border-blue-400 rounded-md" name="name" type="text" placeholder="Enter Product Name" onChange={handleChange} value={formData.name} />
          <p className="text-sm italic text-red-500">{errors.name}</p>
        </div>
        <div>
          <label htmlFor="">Product Description(Optional):</label>
          <input className="w-full px-3 py-2 border-2 border-blue-400 rounded-md" name="description" type="text" placeholder="Enter Product Description" onChange={handleChange} value={formData.description} />
        </div>
        <div>
          <label htmlFor="">Product Price:</label>
          <input className="w-full px-3 py-2 border-2 border-blue-400 rounded-md" name="price" type="number" placeholder="Enter Product Price" onChange={handleChange} value={formData.price} />
          <p className="text-sm italic text-red-500">{errors.price}</p>
        </div>
        <div>
          <label htmlFor="">Rating (1-5) :</label>
          <input className="w-full px-3 py-2 border-2 border-blue-400 rounded-md" name="rating" type="number" placeholder="Enter Rating" onChange={handleChange} value={formData.rating} />
          <p className="text-sm italic text-red-500">{errors.rating}</p>
        </div>
        <div className="flex items-center gap-6">
          <div>
            <label htmlFor="">Product Image :</label>
            <input
              ref={productInputRef}
              className="w-full px-3 py-2 border-2 border-blue-400 rounded-md"
              name="image"
              type="file"
              placeholder="Enter Rating"
              onChange={(e) => {
                productImageRef.current.src = URL.createObjectURL(e.target.files[0]);
              }}
            />
            <p className="text-sm italic text-red-500">{errors.image}</p>
          </div>
          <div>
            <img ref={productImageRef} className="object-cover rounded-lg w-36 h-36" src="/product.png" alt="" />
          </div>
        </div>
      </div>
      <button className="py-2 text-white bg-orange-600 rounded-md hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-700" type="submit">
        Add Product
      </button>
      {isLoading && <p>Loading...</p>}
    </form>
  );
}
