"use client";
import axios from "@/lib/axios";
import Link from "next/link";
import useSWR from "swr";

export default function Order({ params }) {
  const { data: { data: orderProducts } = {} } = useSWR(`/api/orders/${params.id}`, () => axios.get(`api/order/${params.id}`));
  return (
    <section className="px-6 py-4 mx-auto bg-gray-100 max-w-7xl">
      <h2 className="py-6 text-4xl font-bold text-center">Order ID: #{params.id}</h2>
      <div className="p-10 space-y-4 bg-white rounded-lg">
        <div>
          <h3 className="py-6 text-2xl font-bold text-center">Order Details</h3>
          <table className="w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <th className="px-2 py-3 text-md">Id</th>
              <th className="px-2 py-3 text-md">Product Name</th>
              <th className="px-2 py-3 text-md">Product Price</th>
              <th className="px-2 py-3 text-md">Quantity</th>
              <th className="px-2 py-3 text-md">Total</th>
            </thead>
            {orderProducts?.map((orderProduct) => (
              <tr className="border-b odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 dark:border-gray-700" key={orderProduct.id}>
                <td className="px-2 py-4">{orderProduct.product.id}</td>
                <td className="px-2 py-4">{orderProduct.product.name}</td>
                <td className="px-2 py-4">{orderProduct.product.price}</td>
                <td className="px-2 py-4">{orderProduct.quantity}</td>
                <td className="px-2 py-4">{orderProduct.product.price * orderProduct.quantity}</td>
              </tr>
            ))}
            <tfoot>
              <tr>
                <td colSpan={4} className="px-2 py-4 font-bold">
                  Total
                </td>
                <td className="px-2 py-4 font-bold">{orderProducts?.reduce((acc, orderProduct) => acc + orderProduct.product.price * orderProduct.quantity, 0)}</td>
              </tr>
            </tfoot>
          </table>
          <Link href="/orders">
            <button className="px-4 py-2 mt-3 text-white bg-red-600 rounded-md">Back</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
