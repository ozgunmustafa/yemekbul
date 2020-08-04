import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../actions";

 const Categories=()=> {


  const dispatch=useDispatch();
  const categories = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getCategories());
  }, []);

    return (
        <div>
          <section className="cities shadow-m">
            <h2>Ne yapmak istiyorsun?</h2>
            <div className="wrap container">
    
            {categories.map((category) => {
              return (
              <a href="/" className="linkCard" key={category.categories.id}>{category.categories.name}</a>
              );
            })}
            </div>
          </section>
        </div>
      );
}
export default Categories
