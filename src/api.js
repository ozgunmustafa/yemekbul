import axios from "axios";

export function api(){
    return axios.create({
        baseURL:"https://developers.zomato.com/api/v2.1",
        headers:{
            'user-key':'b42d7f7433be781e551c22b911febd90'
        }
    })
}