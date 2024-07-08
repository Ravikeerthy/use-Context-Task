import React, { useContext } from "react";
import { myContext } from "../App";
import "./Styles/ProductsStyle.css";

const UseContext = () => {
  const [productData, setProductData] = useContext(myContext);

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
                      <div className="card h-100">
                        <img
                          src={item.image}
                          className="card-img-top"
                          alt="..."
                        />
                      </div>
                      <div className="card-body d-flex flex-column">
                        <h5 className="card-title">{item.title}</h5>
                        <h6 className="card-title">Price: {item.price}</h6>
                        <p className="card-title">{item.category}</p>
                        <p className="card-title">
                          Rating:
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                        </p>
                      </div>
                      <div>
                        <div className="description-align mt-auto">
                          <p className="card-text">{item.description}</p>
                        </div>
                        <div className="button-design">
                          <button
                            className="btn btn-success"
                            id="addSub"
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
                              handleQuantityChange(
                                item.id,
                                parseInt(e.target.value)
                              )
                            }
                          />
                          <button
                            className="btn btn-danger"
                            id="addSub"
                            onClick={() =>
                              handleSub(item.id, item.quantity || 1)
                            }
                          >
                            -
                          </button>
                          <button
                            onClick={() => handleDelete(item.id)}
                            className="btn btn-danger"
                            id="remove-design"
                          >
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
    </div>
  );
};
export default UseContext;
