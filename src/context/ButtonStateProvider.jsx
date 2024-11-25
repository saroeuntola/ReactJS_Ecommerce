/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import  { createContext, useState} from "react";

export const ButtonStateContext = createContext();
export const ButtonStateProvider = ({ children }) => {
  const [buttonState, setButtonState] = useState({});
  const handleAddCart = (productId) => {
    setButtonState((prevStates) => ({
      ...prevStates,
      [productId]: "ADDED TO CART",
    }));
    setTimeout(() => {
      setButtonState((prevStates) => ({
        ...prevStates,
        [productId]: "ADD TO CART",
      }));
    }, 1000);
  };

  return (
    <ButtonStateContext.Provider 
         value={{ buttonState, handleAddCart }}>
        {children}
    </ButtonStateContext.Provider>
  );
};
