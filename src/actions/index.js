import { api } from "../api";
export const GET_CATEGORIES = "GET_CATEGORIES";
export const GET_CATEGORIES_ERR = "GET_CATEGORIES_ERR";
export const GET_COLLECTIONS="GET_COLLECTIONS";
export const GET_COLLECTIONS_ERR="GET_COLLECTIONS_ERR";


export const getCategories = () => (dispatch) => {
  api()
    .get("/categories")
    .then((response) => {
        console.log(response)
      dispatch({ type: GET_CATEGORIES, payload: response.data.categories });
    })
    .catch(() => {
      dispatch({
        type: GET_CATEGORIES_ERR,
        payload: "Kategoriler Yüklenirken Hata Oluştu",
      });
    });
};

export const getCityCollections=(cityId)=>(dispatch)=>{
    api()
    .get(`collections?city_id=${cityId}`)
    .then((response)=>{
        dispatch({
            type:GET_COLLECTIONS,
            payload: response.data.collections
        })
        console.log(response.data)
    })
    .catch(()=>{
        dispatch({
            type:GET_COLLECTIONS_ERR,
            payload:"Türler getirilirken hata oluştu"
        })
    })
}



