// import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Product } from '@/types';

type Props = {
  product: Product;
};

export function ProductItem({ product }: Props) {
  const navigate = useNavigate();
  const back = () => navigate('/');

  return (
    <div>
      <section className="overflow-hidden bg-white py-11 font-poppins dark:bg-gray-800">
        <div className="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
            <div className="flex flex-wrap -mx-4">
                <div className="w-full px-4 md:w-1/2 ">
                    <div className="sticky top-0 z-50 overflow-hidden ">
                        <div className="relative mb-6 lg:mb-10 lg:h-2/4 ">
                            {product.images[0] ? <img src={product.images[0]} className="object-cover w-full lg:h-full " /> : null}
                        </div>
                        <div className="flex-wrap hidden md:flex ">
                            {product.images[1] ? <div className="w-1/2 p-2 sm:w-1/4">
                                <a href="#"
                                    className="block border border-blue-300 dark:border-transparent dark:hover:border-blue-300 hover:border-blue-300">
                                    <img src={product.images[1]} className="object-cover w-full lg:h-20" />
                                </a>
                            </div> : null}
                            {product.images[2] ? <div className="w-1/2 p-2 sm:w-1/4">
                                <a href="#"
                                    className="block border border-blue-300 dark:border-transparent dark:hover:border-blue-300 hover:border-blue-300">
                                    <img src={product.images[2]} className="object-cover w-full lg:h-20" />
                                </a>
                            </div> : null}
                            {product.images[3] ? <div className="w-1/2 p-2 sm:w-1/4">
                                <a href="#"
                                    className="block border border-blue-300 dark:border-transparent dark:hover:border-blue-300 hover:border-blue-300">
                                    <img src={product.images[3]} className="object-cover w-full lg:h-20" />
                                </a>
                            </div> : null}
                            {product.images[4] ? <div className="w-1/2 p-2 sm:w-1/4">
                                <a href="#"
                                    className="block border border-blue-300 dark:border-transparent dark:hover:border-blue-300 hover:border-blue-300">
                                    <img src={product.images[4]} className="object-cover w-full lg:h-20" />
                                </a>
                            </div> : null}
                        </div>
                    </div>
                </div>
                <div className="w-full px-4 md:w-1/2 ">
                    <div className="lg:pl-20">
                        <div className="mb-8 ">
                          <span className="text-lg font-medium text-rose-500 dark:text-rose-200">
                            New
                          </span>
                          <h2 className="max-w-xl mt-2 mb-6 text-2xl font-bold dark:text-gray-400 md:text-4xl">
                            {product.title}
                          </h2>
                          
                          <p className="max-w-md mb-8 text-gray-700 dark:text-gray-400">
                              {product.description}
                          </p>
                          <p className="inline-block mb-8 text-4xl font-bold text-gray-700 dark:text-gray-400 ">
                              <span>
                                ${product.price?.toFixed(2)}
                              </span>
                              <span className="text-base ml-3 font-normal text-gray-500 line-through dark:text-gray-400">
                                {(product.price ? product.price + 50 : 0)}$
                              </span>
                          </p>
                          <p className="text-green-600 dark:text-green-300 ">
                            {product.stock} in stock
                          </p>
                        </div>
                        <div className="w-32 mb-8 ">
                            <label className="w-full text-xl font-semibold text-gray-700 dark:text-gray-400">
                              Quantity
                            </label>
                            <div className="relative flex flex-row w-full h-10 mt-4 bg-transparent rounded-lg">
                                <button
                                    className="w-20 h-full text-gray-600 bg-gray-300 rounded-l outline-none cursor-pointer dark:hover:bg-gray-700 dark:text-gray-400 hover:text-gray-700 dark:bg-gray-900 hover:bg-gray-400">
                                    <span className="m-auto text-3xl leading-6 font-thin">-</span>
                                </button>
                                <input
                                    name='quantity'
                                    className="flex items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-300 outline-none dark:text-gray-400 dark:placeholder-gray-400 dark:bg-gray-900 focus:outline-none text-md hover:text-black"
                                    placeholder="1" />
                                <button
                                    className="w-20 h-full text-gray-600 bg-gray-300 rounded-r outline-none cursor-pointer dark:hover:bg-gray-700 dark:text-gray-400 dark:bg-gray-900 hover:text-gray-700 hover:bg-gray-400">
                                    <span className="m-auto text-3xl leading-6 font-thin">+</span>
                                </button>
                            </div>
                        </div>
                        <div className="flex px-4 flex-wrap items-center -mx-4">
                          <button className="flex items-center justify-center p-4 mr-3 text-blue-500 border border-blue-500 rounded-md dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 hover:text-gray-100 dark:bg-blue-600 dark:hover:bg-blue-700 dark:hover:border-blue-700 dark:hover:text-gray-300">
                            Add to Cart
                          </button>
                          <button
                            className="flex items-center justify-center p-4 text-blue-500 border border-blue-500 rounded-md dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 hover:text-gray-100 dark:bg-blue-600 dark:hover:bg-blue-700 dark:hover:border-blue-700 dark:hover:text-gray-300"
                            onClick={back}>
                            Go Back
                          </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  );
}
