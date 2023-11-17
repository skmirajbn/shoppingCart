"use client";
import { useAuth } from "@/hooks/auth";
import { useState } from "react";

export default function Login() {
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { login } = useAuth({ middleware: "guest", redirectIfAuthenticated: "/cart" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { ...formData, setErrors, setStatus };
    await login(data);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center justify-center h-screen bg-blue-950">
        <div className="flex flex-col w-full max-w-sm gap-6 p-6 bg-white rounded-lg">
          <h3 className="mx-auto text-2xl font-bold text-center text-transparent bg-gradient-to-r from-emerald-500 to to-blue-500 bg-clip-text w-fit">
            Login <i class="fa-solid fa-right-to-bracket"></i>
          </h3>
          <div className="space-y-3">
            <div>
              <input className="w-full px-3 py-2 border-2 border-blue-400 rounded-md" type="text" placeholder="Enter Your Email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} value={formData.email} />
              <p className="text-sm italic text-red-500">{errors.email}</p>
            </div>
            <div>
              <input className="w-full px-3 py-2 border-2 border-blue-400 rounded-md" type="password" placeholder="Enter Your Password" onChange={(e) => setFormData({ ...formData, password: e.target.value })} value={formData.password} />
              <p className="text-sm italic text-red-500">{errors.password}</p>
            </div>
          </div>
          <button type="submit" className="py-2 text-white rounded-md bg-emerald-600 hover:bg-gradient-to-r hover:from-emerald-500 hover:to-blue-500">
            Login
          </button>
        </div>
      </div>
    </form>
  );
}
