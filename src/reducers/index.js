import {
  GET_CATEGORIES,
  GET_CATEGORIES_ERR,
  GET_COLLECTIONS,
  GET_COLLECTIONS_ERR,
} from "../actions";

const INITIAL_STATE = {
  cities: [
    { id: 59, name: "istanbul", display: "İstanbul" },
    { id: 60, name: "ankara", display: "Ankara" },
    { id: 376, name: "izmir", display: "İzmir" },
    { id: 379, name: "cesme", display: "Çeşme" },
    { id: 382, name: "bursa", display: "Bursa" },
    { id: 385, name: "adana", display: "Adana" },
    { id: 388, name: "antalya", display: "Antalya" },
    { id: 391, name: "izmit", display: "İzmit" },
    { id: 394, name: "konya", display: "Konya" },
    { id: 397, name: "gaziantep", display: "Gaziantep" },
    { id: 400, name: "bodrum", display: "Bodrum" },
    { id: 403, name: "eskisehir", display: "Eskişehir" },
    { id: 406, name: "bozcaada", display: "Bozcaada" },
  ],
  categories: [],
  collections: [],
  error: "",
};
export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case GET_CATEGORIES_ERR:
      return { ...state, error: action.payload };
    case GET_COLLECTIONS:
      return { ...state, collections: action.payload };
    case GET_COLLECTIONS_ERR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
