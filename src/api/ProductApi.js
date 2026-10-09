import { api } from "./api"

export async function getProduct() {
    try{
        const response = await api.get("/products")
        return response.data
    } catch(error){
        console.error("GET /products xatosi", error);
        throw error;
    }
}