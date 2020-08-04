import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Cities = () => {
  const [cityList, setCityList] = useState([
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
  ]);

  return (
    <div>
      <section className="cities ">
        <h2>Şehir seç</h2>
        <div className="wrap container">
          {cityList.map((city) => {
            return (
              <Link to={`/${city.id}`} className="linkCard" key={city.id}>
                {city.display}
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Cities;
