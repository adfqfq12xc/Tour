import React, { useEffect, useState, useContext } from 'react';
import { UserContext } from '../../usercontext';
import { useNavigate, useParams } from "react-router-dom";

export default function AboutCities() {
  const { id } = useParams();
  const { data, user } = useContext(UserContext);
  const [Image, setImage] = useState('');
  const [tour, setTour] = useState(null); // State for the specific tour
const navigate=useNavigate()
  // Fetch the tour by id when data is available
  useEffect(() => {
    if (data) {
      const tourId = parseInt(id); // Parse id as an integer
      const tourData = data.find((e) => e.id === tourId);
      setTour(tourData);
    }
  }, [data, id]);

  // Load image when tour is available
  useEffect(() => {
    if (tour) {
      if (tour.img.startsWith("./")) {
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
    }
  }, [tour]);

  if (!tour) {
    navigate('/')
    // Handle loading state
  }

  return (
    <div>
      <article className="tour">
        <div className="img-container">
          {Image ? (
            <img src={Image} alt={tour.city} />
          ) : (
            <div>Loading image...</div>
          )}
          <span className="close-button">
            {user && <i className="fas fa-window-close"></i>}
          </span>
        </div>
        <div className="tour-info">
          <h3>{tour?.city}</h3>
          <h4>{tour?.name}</h4>
          <p>{tour?.info}</p> {/* Assuming you want to display the tour info as well */}
        </div>
      <form>
        <input type='email' placeholder='Put Your Email And We well contact You'/>
        <button onClick={()=>navigate('/')}>Submit</button>
        </form>
      </article>
    </div>
  );
}
