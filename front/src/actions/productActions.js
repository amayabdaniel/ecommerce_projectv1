import axios from "axios";
import { ALL_PRODUCTS_REQUEST, All_PRODUCTS_SUCESS, ALL_PRODUCTS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCESS, PRODUCT_DETAILS_FAIL, CLEAR_ERRORS } from "../constants/productConstants";

export const getProducts = () => async (dispatch) => {
    try {
        dispatch({ type: ALL_PRODUCTS_REQUEST });

        const { data } = await axios.get("api/products");

        dispatch({
            type: All_PRODUCTS_SUCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: All_PRODUCTS_FAIL,
            payload: error.response.data.message,
        });
    }
};
//clear error
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS,
    });
};

//get product details

export const getProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_DETAILS_REQUEST });

        const { data } = await axios.get(`/api/products/${id}`);

        dispatch({
            type: PRODUCT_DETAILS_SUCESS,
            payload: data.product,
        });
    } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload: error.response.data.message,
        });
    }
};
