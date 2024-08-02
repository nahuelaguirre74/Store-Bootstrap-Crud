import axios from "axios";
 
const API_URL = 'http://fakestoreapi.com';

export const fetchProducts = ()=> axios.get(`${API_URL}/products`);
export const fetchProductsDetails = (id)=>{`${API_URL}/products/${id}`}; 