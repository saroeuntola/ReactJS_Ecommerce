
import BaseURL from "./BaseURL";

const getLimitProduct = async()=>{
    try{
        const response = await BaseURL.get(
          "/products?limit=8"
        );
        return response;
    }
    catch(error){
        return error.response;
    }
}

const getAllProduct = async () => {
  try {
    const response = await BaseURL.get("/products");
    return response;
  } catch (error) {
    return error.response;
  }
};

const specificProduct = async (id) => {
    try {
        const response = await BaseURL.get(`/products/${id}`);
        return response;
    } catch (error) {
        console.log(error);
    }
}

export {getAllProduct,specificProduct,getLimitProduct};