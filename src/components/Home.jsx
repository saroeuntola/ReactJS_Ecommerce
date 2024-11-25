
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartProvider";
import { getLimitProduct } from "./config/Product";
import { Link } from "react-router-dom";
import pic1 from"./image/pic1.png";
import { Carousel } from "@material-tailwind/react";
import { FaStar } from "react-icons/fa";
import { SearchContext } from "../context/SearchContext";
import { ButtonStateContext } from "../context/ButtonStateProvider";





const Home = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);
  const [loading, setLoading] = useState(true);
  const { searchQuery } = useContext(SearchContext);
const { buttonState, handleAddCart } = useContext(ButtonStateContext);

  useEffect(() => {
    const productList = async () => {
      try {
        const response = await getLimitProduct();
        setProducts(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    productList();
  }, []);
  const searchProduct = products.filter((item) => {
    const search = searchQuery.toLowerCase();
    return (
      String(item.id).toLowerCase().includes(search) ||
      item.title.toLowerCase().includes(search) ||
      String(item.description).toLowerCase().includes(search) ||
      String(item.category).toLowerCase().includes(search)
    );
  });



  return (
    <main className="flex flex-col justify-center py-20 lg:mb-0 md:mb-96">
      {loading ? (
        <div className="flex justify-center h-screen">
          <div className="animate-spin border-t-4 border-blue-500 border-solid rounded-full w-16 h-16 mt-52"></div>
        </div>
      ) : (
        <div>
          <Carousel transition={{ duration: 2 }} className="h-96 mb-5 z-0">
            <img
              src={pic1}
              alt="image 1"
              className="h-full w-full object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
              alt="image 2"
              className="h-full w-full"
            />
            <img
              src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
              alt="image 3"
              className="h-full w-full"
            />
          </Carousel>
          <h2 className="text-center mb-5">New Arrivals</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 px-10">
            {searchProduct && searchProduct.length === 0 ? (
              <p className=" text-gray-900 text-lg">No products found</p>
            ) : (
              searchProduct.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg p-10 shadow-lg text-gray-800"
                >
                  <Link
                    to={`/detail/${product.id}`}
                    className="no-underline text-black text-slate-900"
                  >
                    <img
                      src={product.image}
                      alt={product.title}
                      className="rounded-md h-48"
                    />
                    <div className="mt-4">
                      <h1 className="text-lg uppercase font-bold">
                        {product.title}
                      </h1>
                      <div className="">
                        <p className="mt-2 text-teal-900 font-bold">
                          ${product.price}
                        </p>
                        <div className="flex items-center">
                          {Array.from({
                            length: Math.round(product.rating.rate),
                          }).map((_, index) => (
                            <FaStar key={index} className="text-teal-900" />
                          ))}
                          <span className="ms-1">{product.rating.rate}</span>
                        </div>
                      </div>
                    </div>
                  </Link>

                  <div className="mt-6 flex justify-between items-center">
                    <button
                      className="px-4 py-2 bg-teal-900 text-white hover:bg-black duration-700  text-xs font-bold uppercase rounded"
                      onClick={() => {
                        addToCart(product);
                        handleAddCart(product.id);
                      }}
                    >
                      {buttonState[product.id] || "ADD TO CART"}
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </main>
  );
};

export default Home;

