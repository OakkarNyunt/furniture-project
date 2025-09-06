import ProductCard from "./ProductCard";
import { ProductFilter } from "./ProductFilter";
import { filterList, products } from "@/type/products";
import type { Product } from "@/type";
import PaginationSample from "@/components/Pagination";

// interface ProductCardProps {
//   product: Product;
// }

function Product() {
  return (
    <div className="container mx-auto">
      <section className="flex flex-col md:flex-row">
        <section className="w-full md:w-1/5 pl-6 my-8">
          <ProductFilter filterList={filterList} />
        </section>
        <section className=" w-full md:w-4/5 my-8">
          <div className="">
            <h1 className="text-2xl font-bold mb-4 mx-4 md:mb-0 md:mx-0 ">
              All Products
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-4 md:mx-0">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <div className="my-8">
              <PaginationSample />
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default Product;
