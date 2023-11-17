import Link from "next/link";

export default function ProductLayout({ children }) {
  return (
    <section className="px-6 py-4 mx-auto bg-gray-100 max-w-7xl">
      <div className="flex gap-8 p-6 text-orange-600">
        <Link href={"/admin/product/add-product"} className="py-6 text-xl font-bold text-center">
          <i class="fa-solid fa-plus"></i> Add Product
        </Link>
        <Link href={"/admin/product/all-products"} className="py-6 text-xl font-bold text-center">
          <i class="fa-solid fa-boxes-packing"></i> All Products
        </Link>
      </div>
      <div className="p-10 bg-white rounded-lg">
        <div className="">{children}</div>
      </div>
    </section>
  );
}
