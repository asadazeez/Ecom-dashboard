import axiosClient  from "./config/axiosConfig";

export const ordersApi = {
    getAllOrders : async function (){
        return await axiosClient.get('/orders')
    },
    OrderStatus : async function (orderId:any,value:any){
        return await axiosClient.get(`/orders/status?orderId=${orderId}&orderValue=${value}`)
    },
    OrderView : async function (orderId:any){
        return await axiosClient.get(`/orders/order-view/${orderId}`)
    }

}
  