/* eslint-disable @next/next/no-img-element */
"use client";
import { useAuth } from "@/hooks/auth";
import { useState } from "react";

export default function CreateAccount() {
  const [errors, setErrors] = useState([]);
  const { register } = useAuth({ middleware: "guest", redirectIfAuthenticated: "/cart" });

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let registerData = { ...formData, setErrors };
    console.log(registerData);
    await register(registerData);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-blue-950">
      <div className="flex flex-col w-full max-w-md gap-6 p-6 bg-white rounded-lg">
        <h3 className="mx-auto text-2xl font-bold text-center text-transparent bg-gradient-to-r from-emerald-500 to to-blue-500 bg-clip-text w-fit">
          Create Account <i class="fa-solid fa-user-plus"></i>
        </h3>
        <form className="flex flex-col justify-center space-y-3" onSubmit={handleSubmit}>
          <div className="space-y-3">
            <div>
              <input className="w-full px-3 py-2 border-2 border-blue-400 rounded-md" name="name" type="text" placeholder="Enter Your Name" value={formData.name} onChange={handleInputChange} />
              <p className="text-sm italic text-red-500">{errors.name}</p>
            </div>
            <div>
              <input className="w-full px-3 py-2 border-2 border-blue-400 rounded-md" name="username" type="text" placeholder="Enter Your username" value={formData.username} onChange={handleInputChange} />
              <p className="text-sm italic text-red-500">{errors.username}</p>
            </div>
            <div>
              <input className="w-full px-3 py-2 border-2 border-blue-400 rounded-md" name="email" type="text" placeholder="Enter Your Email" value={formData.email} onChange={handleInputChange} />
              <p className="text-sm italic text-red-500">{errors.email}</p>
            </div>
            <div>
              <input className="w-full px-3 py-2 border-2 border-blue-400 rounded-md" name="password" type="password" placeholder="Create Password" value={formData.password} onChange={handleInputChange} />
              <p className="text-sm italic text-red-500">{errors.password}</p>
            </div>
            <input className="w-full px-3 py-2 border-2 border-blue-400 rounded-md" name="password_confirmation" type="password" placeholder="Confirm Password" value={formData.password_confirmation} onChange={handleInputChange} />
          </div>
          <button className="py-2 text-white bg-orange-600 rounded-md hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-700" type="submit">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}
