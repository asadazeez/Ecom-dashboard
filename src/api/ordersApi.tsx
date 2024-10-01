import axiosClient  from "./config/axiosConfig";

export const ordersApi = {
    getAllOrders : async function (){
        return await axiosClient.get('/orders')
    }
}