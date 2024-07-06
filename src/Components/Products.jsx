import React, { useContext } from "react";
import { myContext } from "../App";
import Cardt from "./Cardt";

const UseContext = () => {
  const [productData, setProductData] = useContext(myContext);

  const totalPrice = productData.reduce(
    (acc, data) => acc + data.price * (data.quantity || 1),
    0
  );
  const totalQuantity = productData.reduce(
    (acc, data) => acc + (data.quantity || 1),
    0
  );

  const handleAdd = (id, quantity) => {
    setProductData((preData) => {
      return preData.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 || quantity + 1 };
        }
        return item;
      });
    });
  };
  const handleSub = (id, quantity) => {
    setProductData((preData) => {
      return preData.map((item) => {
        if (item.id === id && (item.quantity || quantity) > 0) {
          return { ...item, quantity: item.quantity - 1 || quantity - 1 };
        }
        return item;
      });
    });
  };

  const handleQuantityChange = (id, newQuantity) => {
    setProductData((preData) => {
      return preData.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: parseInt(newQuantity) || 1 };
        }
        return item;
      });
    });
  };

  const handleDelete = (id) => {
    setProductData((preData) => {
      return preData.filter((item) => item.id !== id);
    });
  };

  return (
    <div>
      <div className="container">
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

                        <div>
                          <button
                            onClick={() =>
                              handleAdd(item.id, item.quantity || 1)
                            }
                          >
                            +
                          </button>
                          <input
                            type="number"
                            value={item.quantity || 1}
                            onChange={(e) =>
                                handleQuantityChange(item.id, parseInt(e.target.value))
                            }
                            />
                          <button
                            onClick={() =>
                              handleSub(item.id, item.quantity || 1)
                            }
                          >
                            -
                          </button>
                          <button onClick={() => handleDelete(item.id)}>
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <Cardt totalPrice={totalPrice} totalQuantity={totalQuantity} />
    </div>
  );
};
export default UseContext;
