import { useState } from "react";
import Navbar from "../Navbar";
import "../styles/Collection.css";
import axios from "axios";
// import { CollectionItems } from "../CollectionItems";
import CollectioProducts from "./CollectioProducts";

export default function Collection({
  token,
  CollectionItems,
  itemCount,
  setItemCount,
  addTocart,
  removeFromCart,
}) {
  function handleClick(e) {
    const list = document.querySelectorAll("#product > div");
    const searchVal = e.target.value.toUpperCase();
    list.forEach((el) => {
      el.style.display = el
        .querySelector("p")
        .textContent.toUpperCase()
        .includes(searchVal)
        ? "block"
        : "none";
    });
  }

  return (
    <>
      {/* product */}
      <div className="product-section">
        <form className="product-search">
          <input
            type="text"
            id="search"
            placeholder="Search"
            onKeyUp={handleClick}
          ></input>
          <i class="fa-solid fa-magnifying-glass"></i>
        </form>
        <div className="product" id="product">
          {CollectionItems.map((item, index) => {
            return (
              <CollectioProducts
                key={index}
                id={item._id}
                name={item.name}
                price={item.price}
                description={item.description}
                image={`https://fly-walk-back-end.onrender.com/images/${item.image}`}
                token={token}
                itemCount={itemCount}
                setItemCount={setItemCount}
                addTocart={addTocart}
                removeFromCart={removeFromCart}
              />
            );
          })}
        </div>
      </div>
      {/* Footer */}
      <div className="footer">
        <div className="footer-container">
          <div className="footer-box-1">
            <h2 className="heading-text"> FLYWALK</h2>
            <p>Lorem Ipsum is simply dummy text of the printing</p>
            <div className="footer-icon-container">
              <i
                class="fa-brands fa-instagram"
                style={{ color: "#ffffff" }}
              ></i>
              <i class="fa-brands fa-facebook" style={{ color: "#ffffff" }}></i>
              <i class="fa-brands fa-twitter" style={{ color: "#ffffff" }}></i>
            </div>
          </div>
        </div>

        <p>@2025 FLYWALK</p>
      </div>
    </>
  );
}
