import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCityCollections } from "../actions";

const CityIndex = () => {
  const  {id}  = useParams();
  //const cityId=parseInt(id);

  console.log(typeof id)
  const cities = useSelector((state) => state.cities);
  const collections = useSelector((state) => state.collections);

  const city = cities.filter((city) => city.id === +id);

  console.log("asdad", collections);

  const dispatch = useDispatch();



  useEffect(() => {
    dispatch(getCityCollections(+id));
  }, []);

  return (
    <div className="container">
      <div className="p-5">
        <h2 className="text-center">{city[0].display}</h2>
      </div>
      <h5>{city[0].display} Hatırası</h5>

      <div className="row">
      {
        collections.map(({collection})=>{
          return (
             <div className="col-md-4 col-xs-6">
          <a href={collection.share_url} className="m-1 cardLink">
            <div className="card border-0 shadow-sm">
              <div
                className="cardImage"
                style={{
                  backgroundImage: `url(${collection.image_url})`,
                }}
              ></div>
              <div className="card-body">
                <h4 className="restaurantName">{collection.title}</h4>
                <small className="text-muted">4.9</small>
              </div>
            </div>
          </a>
        </div>
          )
        })
      }
       
      </div>
    </div>

    // <div className="cityRestaurants">
    //   <h2 className="title">İstanbul</h2>
    //   <div className="restaurantCard">
    //       <div className="restaurantImage"></div>
    //       <div className="restaurantName"></div>
    //       <div className="restaurantPoint"></div>
    //   </div>
    // </div>
  );
};
export default CityIndex;
