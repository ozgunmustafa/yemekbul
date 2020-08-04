import React, { useState, useEffect } from "react";

const SearchBar = () => {
  const [cityList, setCityList] = useState([
    { id: 59, cityName: "istanbul" },
    { id: 60, cityName: "ankara" },
    { id: 376, cityName: "izmir" },
    { id: 379, cityName: "çeşme" },
    { id: 382, cityName: "bursa" },
    { id: 385, cityName: "adana" },
    { id: 388, cityName: "antalya" },
    { id: 391, cityName: "izmit" },
    { id: 394, cityName: "konya" },
    { id: 397, cityName: "gaziantep" },
    { id: 400, cityName: "bodrum" },
    { id: 403, cityName: "eskişehir" },
    { id: 406, cityName: "bozcaada" },
  ]);
  return (
    <div className="bg-image ">
    <div className="overlay">
       <section className="cities  min400">
        <h2 className="searchBarTitle">Arama Yap</h2>
        <div className="wrap container">
          <div className="searchBar">
            <span className="form-control form-control-lg locationIcon ">
              <i class="fas fa-map-marker-alt"></i>
            </span>

            <select
              name="cars"
              id="cars"
              className="form-control form-control-lg cityList text-left"
            >
            <option value="findInLocation">Konumumdakiler</option>
           
              {cityList.map((city) => {
                return <option value={city.cityName}>{city.cityName}</option>;
              })}
            </select>
            <input className="form-control form-control-lg searchInput"  placeholder=""/>
            <button class="btn btn-danger btn-lg  searchButton">Ara</button>
          </div>
        </div>
      </section>
    </div>
     
      {/* 
      <section className="cities shadow-sm">
        <h2>Arama Yap</h2>
        <div className="wrap container">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <button
                class="btn btn-danger dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="fas fa-search-location"></i> Dropdown
              </button>
              <div class="dropdown-menu">
                <a class="dropdown-item" href="/">
                  Action
                </a>
                <a class="dropdown-item" href="/">
                  Another action
                </a>
                <a class="dropdown-item" href="/">
                  Something else here
                </a>
              </div>
            </div>
            <input
              type="text"
              class="form-control form-control-lg border-0 shadow-sm"
              placeholder="Ara"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <div class="input-group-append">
              <button
                class="btn btn-danger border-0"
                type="button"
                id="button-addon2"
              >
                <i class="fas fa-search"></i>
              </button>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default SearchBar;
