import PropTypes from "prop-types";
import { useContext } from "react";
import { CartContext } from "../context/CartProvider";

export default function Cart({ showModal, handlModel }) {
  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } =
    useContext(CartContext);

  return (
    showModal && (
      <div className=" overflow-y-auto overflow-hidden flex-col flex items-center justify-between fixed inset-0 left-1/4 bg-gray-900 gap-10  p-10 dark:text-white font-normal uppercase text-sm">
        <h1 className="text-2xl font-bold">Cart</h1>
        <div className="absolute right-16 top-10">
          <button
            className="px-4 py-2 bg-teal-900 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
            onClick={handlModel}
          >
            Close
          </button>
        </div>
        <div className="flex flex-col gap-4 ">
          {cartItems.map((item) => (
            <div className="flex justify-between items-center" key={item.id}>
              <div className="flex gap-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-md h-24"
                />
                <div className="flex flex-col">
                  <h1 className="text-lg font-bold">{item.title}</h1>
                  <p className="text-gray-100">${item.price}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <button
                  className="px-4 py-2 bg-teal-900 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none"
                  onClick={() => {
                    addToCart(item);
                  }}
                >
                  +
                </button>
                <p>{item.quantity}</p>
                <button
                  className="px-4 py-2 bg-teal-900 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none"
                  onClick={() => {
                    removeFromCart(item);
                  }}
                >
                  -
                </button>
              </div>
            </div>
          ))}
        </div>
        {cartItems.length > 0 ? (
          <div className="flex flex-col justify-between items-center">
            <h1 className="text-lg font-bold">Total: ${getCartTotal()}</h1>
            <button
              className="px-4 py-2 bg-teal-900 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
              onClick={() => {
                clearCart();
              }}
            >
              Clear cart
            </button>
          </div>
        ) : (
          <h1 className="text-lg font-bold m-auto">Your cart is empty</h1>
        )}
      </div>
    )
  );
}

Cart.propTypes = {
  showModal: PropTypes.bool,
  handlModel: PropTypes.func,
};
