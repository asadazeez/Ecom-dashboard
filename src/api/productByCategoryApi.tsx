import axiosClient from "./config/axiosConfig";


export const productByCategoryApi = {
    getProductByCategory : async function(categoryId:any){

        return await axiosClient.get(`/product-by-category/${categoryId}`)
    },
}