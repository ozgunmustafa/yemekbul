import React from "react";
import Cities from "../components/cities";
import Categories from "../components/categories";
import CityIndex from "./CityIndex";
import SearchBar from "../components/searchBar";

 const HomePage=()=> {
  return (
    <div>
      <SearchBar></SearchBar>

      <Cities></Cities>
      <Categories></Categories>
    </div>
  );
}

export default HomePage