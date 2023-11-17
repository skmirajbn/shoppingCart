"use client";
import axios from "@/lib/axios";
import Link from "next/link";
import useSWR from "swr";

export default function Orders() {
  const { data: { data: orders } = {} } = useSWR("orders", () => axios.get("api/orders"));
  return (
    <section className="px-6 py-4 mx-auto bg-gray-100 max-w-7xl">
      <h2 className="py-6 text-4xl font-bold text-center">My Orders</h2>
      <div className="p-10 space-y-4 bg-white rounded-lg">
        {orders?.map((order) => (
          <div className="flex items-center gap-4 p-4 rounded-lg bg-slate-300" key={order.id}>
            <h3 className="">Order Id: {order.id}</h3>
            <h3>Order Date: {new Date(order.created_at).toLocaleDateString()}</h3>
            <h3>Total Products: {order.order_products.length}</h3>
            <Link href={`/orders/${order.id}`} className="px-3 py-2 ml-auto text-white bg-green-600 rounded-lg">
              <button>View Order</button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
