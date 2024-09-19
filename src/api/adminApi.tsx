import axiosClient from "./config/axiosConfig";


export const adminApi = {
    loginUser : async function(body:any){
        return await axiosClient.post('admin/login',body)
    },
    updateUser : async function(body:any){
        return await axiosClient.post('admin/update',body)


    }
}