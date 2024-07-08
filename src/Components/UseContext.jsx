import React, { useContext } from "react";
import { myContext } from "../App";
import "./Styles/HomeStyle.css";

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
                      <img
                        src={item.image}
                        className="card-img-top image-thumbnail"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <h5 className="card-title">Price: {item.price}</h5>
                        <h5 className="card-title">{item.category}</h5>
                        <h5 className="card-title">
                          Rating:
                          {item.rating}
                        </h5>
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
      <Product />
    </div>
  );
};

export default UseContext;
