/* eslint-disable @next/next/no-img-element */

import Product from "@/components/product";
import "react-toastify/dist/ReactToastify.css";

export default function ProductSection() {
  return (
    <section className="px-6 py-4 mx-auto bg-gray-100 max-w-7xl">
      <h2 className="py-6 text-4xl font-bold text-center">Product List</h2>
      <div className="p-10 bg-white rounded-lg">
        <div className="grid grid-cols-4 gap-4">
          <Product image="images/productImages/running-shoes-2048px-9718.jpg" name="New Premium Men's Neaker For Party or Offices" price="5000" rating={4} />
          <Product image="images/productImages/running-shoes-2048px-9718.jpg" name="Trendy Shoes for men and women. Luxary low price shoes only" price="5000" rating={2} />
          <Product image="images/productImages/running-shoes-2048px-9718.jpg" name="Trendy Shoes for men and women. Luxary low price shoes only" price="5000" rating={2} />
          <Product image="images/productImages/running-shoes-2048px-9718.jpg" name="Trendy Shoes for men and women. Luxary low price shoes only" price="5000" rating={2} />
          <Product image="images/productImages/running-shoes-2048px-9718.jpg" name="Trendy Shoes for men and women. Luxary low price shoes only" price="5000" rating={2} />
          <Product image="images/productImages/running-shoes-2048px-9718.jpg" name="Trendy Shoes for men and women. Luxary low price shoes only" price="5000" rating={2} />
          <Product image="images/productImages/running-shoes-2048px-9718.jpg" name="Trendy Shoes for men and women. Luxary low price shoes only" price="5000" rating={2} />
          <Product image="images/productImages/running-shoes-2048px-9718.jpg" name="Trendy Shoes for men and women. Luxary low price shoes only" price="5000" rating={2} />
        </div>
      </div>
    </section>
  );
}
