import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartProvider";
import { getAllProduct} from "./config/Product";
import { FaStar } from "react-icons/fa";
import { SearchContext } from "../context/SearchContext";
import { Link } from "react-router-dom";
import { ButtonStateContext } from "../context/ButtonStateProvider";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("");
  const {searchQuery} = useContext(SearchContext);
 const { buttonState, handleAddCart } = useContext(ButtonStateContext);
  useEffect(() => {
    const productList = async () => {
      try {
        const response = await getAllProduct();
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    productList();
  }, []);

  const filteredProducts = products.filter((item) => {
    const search = searchQuery.toLowerCase();
    const matchesSearch =
      String(item.id).toLowerCase().includes(search) ||
      item.title.toLowerCase().includes(search) ||
      item.description.toLowerCase().includes(search) ||
      item.category.toLowerCase().includes(search);

    const Category = selectedCategory
      ? item.category === selectedCategory
      : true;
    return matchesSearch && Category;
  });

  const getCategories = [
    ...new Set(products.map((product) => product.category)),
  ];


  return (
    <main className="flex flex-col justify-center py-32 lg:mb-0 md:mb-96 ">
      {loading ? (
        <div className="flex justify-center h-screen ">
          <div className="animate-spin border-t-4 border-blue-500 border-solid rounded-full w-16 h-16 mt-40"></div>
        </div>
      ) : (
        <div>
          <div className="flex justify-between items-center px-10 mb-4">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="py-2 px-3 border rounded bg-teal-900 text-white cursor-pointer"
            >
              <option value="">All Categories</option>
              {getCategories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 px-10">
            {filteredProducts && filteredProducts.length === 0 ? (
              <p className=" text-gray-900 text-lg mb-48 ">No products found</p>
            ) : (
              filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white shadow-lg rounded-lg px-10 py-10"
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
                      className="px-4 py-2 bg-teal-900 text-white text-xs font-bold hover:bg-black duration-700 uppercase rounded"
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


export default Shop;
