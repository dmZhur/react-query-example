import { Product } from '@/types';
// import { useState } from 'react';

type Props = {
  products: Product[];
};

export function ProductList({ products }: Props) {
  
  return (
    <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2
      justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
      {products && products.map((product: Product) => (
        <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl" key={product.id}>
          <a href={`/product/${product.id}`}>
            <img src={product.thumbnail} alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
            <div className="px-4 py-3 w-72">
                <span className="text-gray-400 mr-3 uppercase truncate text-xs">
                  {product.title}
                </span>
                <p className="text-lg font-bold text-black truncate block capitalize">
                  {product.description}
                </p>
                <div className="flex items-center">
                    <p className="text-lg font-semibold text-black cursor-auto my-3">
                      ${product.price?.toFixed(2)}
                    </p>
                    <del>
                        <p className="text-sm text-gray-600 cursor-auto ml-2">
                          {(product.price ? product.price + 50 : 0)}$
                        </p>
                    </del>
                    <div className="ml-auto bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded">
                      Add to Cart
                    </div>
                </div>
            </div>
          </a>
        </div>
      ))}
    </section>
  );
}
