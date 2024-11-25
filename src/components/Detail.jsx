import { useState, useEffect, useContext } from "react";
import { specificProduct } from "./config/Product";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartProvider";
import { FaStar } from "react-icons/fa";
import { ButtonStateContext } from "../context/ButtonStateProvider";

const Detail = () => {
  const [detail, setDetail] = useState("");
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const [loading,setLoading]= useState(true)
  const{buttonState,handleAddCart} =useContext(ButtonStateContext);


  const detailProduct = async () => {
    try {
      const response = await specificProduct(id);
      setDetail(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
    finally{
      setLoading(false)
    }
  };

  useEffect(() => {
    detailProduct();
  }, [id]);

  return (
    <main className="px-10 py-44">
      {loading ? (
        <div className="flex justify-center h-screen">
          <div className="animate-spin border-t-4 border-blue-500 border-solid rounded-full w-16 h-16 mt-10"></div>
        </div>
      ) : detail === 0 ? (
        <p className="text-center text-gray-600 text-lg">No products found</p>
      ) : (
        <div
          className="flex flex-col md:flex-row gap-20 justify-center items-center"
          key={detail.id}
        >
          <img
            src={detail.image}
            alt={detail.name}
            className="object-cover rounded-lg h-96"
          />

          <div className="lg:w-2/4 md:w-full">
            <h1 className="text-3xl font-bold">{detail.title}</h1>
            <p className="text-xl text-teal-900 font-bold">${detail.price}</p>
            <p className="text-gray-900">{detail.description}</p>
            <div className="">
              <div className="flex items-center">
                {Array.from({
                  length: Math.round(detail.rating.rate),
                }).map((_, index) => (
                  <FaStar key={index} className="text-teal-900" />
                ))}
                <span className="ms-1">{detail.rating.rate}</span>
              </div>
            </div>
            <button
              onClick={() => {
                addToCart(detail);
                handleAddCart(detail.id);
              }}
              className="mt-4 px-4 py-2 text-xs hover:bg-black duration-700 bg-teal-900 font-bold text-white rounded-lg"
            >
              {buttonState[detail.id] || "ADD TO CART"}
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default Detail;
