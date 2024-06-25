import React, { useState, useContext, useEffect } from "react";
import "./tour.scss";
import { UserContext } from '../../usercontext';

import { Link } from "react-router-dom";
export default function Index({ tour }) {
  const [Image, setImage] = useState(tour.img);
  const { user } = useContext(UserContext);
  useEffect(() => {
    if ((tour.img).startsWith("./")) {
      // Your code here
      import(`${tour.img}`)
        .then(image => {
          setImage(image.default || image);
        })
        .catch(err => {
          console.error("Error loading image:", err);
        });
    } else {
      setImage(tour.img);
    }
  }, [tour.img]);
const [hiden,sethiden]=useState(false)

  return (
    <article  className="tour" hidden={hiden}>
      <div className="img-container">
        <img src={Image} alt={tour.city} />
        <span className="close-button">
          {user && <i className="fas fa-window-close" onClick={()=>{      
                 sethiden(true)
          }}></i>}
        </span>
      </div>
      <div className="tour-info">
        <h3>{tour.city}</h3>
        <h4>{tour.name}</h4>
<Link to={`more/${tour.id}`} >
        <button>Show More<i className="fas fa-caret-square-down" ></i></button>
        </Link>
      </div>
    </article>
  );
}
