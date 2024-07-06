import React, { useContext } from "react";
import { myContext } from "../App";
import './Styles/HomeStyle.css';

const UseContext = () => {
  const [productData, setProductData] = useContext(myContext);
  return (
    <div>
      <div className="container" id="home-container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {productData.map((item, index) => {
            return (
              <>
                <div key={index}>
                  <div className="col">
                    <div className="card">
                      <div
                        id={`carousel-${index}`}
                        className="carousel slide"
                        data-bs-ride="carousel"
                      >
                        <div className="carousel-indicators">
                          {item.images.map((_, imgIndex) => {
                            return (
                             
                                <button
                                  key={imgIndex}
                                  type="button"
                                  data-bs-target={`#carousel-${index}`}
                                  data-bs-slide-to={imgIndex}
                                  className={imgIndex === 0 ? "active" : ""}
                                  aria-current={imgIndex === 0 ? "true" : ""}
                                  aria-label={`Slide ${imgIndex + 1}`}
                                ></button>
                             
                            );
                          })}
                        </div>
                        <div className="carousel-inner">
                          {item.images.map((imgData, imgIndex) => (
                            <div
                              key={imgIndex}
                              className={`carousel-item ${
                                imgIndex === 0 ? "active" : ""
                              }`}
                            >
                              <img
                                src={imgData}
                                className="d-block w-100"
                                alt={`Slide ${imgIndex + 1}`}
                              />
                            </div>
                          ))}
                          </div>
                          <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target={`#carousel-${index}`}
                            data-bs-slide="prev"
                          >
                            <span
                              className="carousel-control-prev-icon"
                              aria-hidden="true"
                            ></span>
                            <span className="visually-hidden">Previous</span>
                          </button>
                          <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target={`#carousel-${index}`}
                            data-bs-slide="next"
                          >
                            <span
                              className="carousel-control-next-icon"
                              aria-hidden="true"
                            ></span>
                            <span className="visually-hidden">Next</span>
                          </button>
                        </div>
                        <div className="card-body">
                          <h5 className="card-title">{item.title}</h5>
                          <h5 className="card-title">Price: {item.price}</h5>
                          <h5 className="card-title">{item.brand}</h5>
                          <h5 className="card-title">Rating:{item.rating}</h5>
                          <p className="card-text">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UseContext;
