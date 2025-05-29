import React, { useEffect, useState } from "react";
import "../styles/Collection.css";
import axios from "axios";

const CollectioProducts = ({
  id,
  name,
  description,
  price,
  image,
  itemCount,
  addTocart,
  removeFromCart,
}) => {
  return (
    <div>
      <div className="img-collection">
        <img src={image} alt="" style={{ width: "200px", height: "200px" }} />

        <div className="img-para">
          <p className="imgpara-name">{name}</p>
          <p className="imgpara-price">${price}</p>
          {!itemCount[id] ? (
            <div className="qty" onClick={() => addTocart(id)}>
              Qty
            </div>
          ) : (
            <div className="add">
              <div className="increase" onClick={() => addTocart(id)}>
                +
              </div>
              <p style={{ fontSize: "20px", color: "blue" }}>{itemCount[id]}</p>
              <div className="decrese" onClick={() => removeFromCart(id)}>
                -
              </div>
            </div>
          )}
          <p style={{ fontSize: "15px", marginTop: "20px" }}>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CollectioProducts;
