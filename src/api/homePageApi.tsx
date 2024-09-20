import axiosClient from "./config/axiosConfig";


export const homePageApi = {
    getHomepage : async function(){
        return await axiosClient.get('/dash-home-page' )
    },
}