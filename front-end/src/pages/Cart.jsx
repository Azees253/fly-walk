import React from "react";
import "../styles/Cart.css";
import { useNavigate } from "react-router-dom";

const Cart = ({
  CollectionItems,
  itemCount,
  removeFromCart,
  getTotalCartAmount,
}) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="cart">
        <div className="cart-item">
          <div className="cart-items-title">
            <p>items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <br />
          <hr />
          {CollectionItems.map((item, index) => {
            if (itemCount[item._id] > 0) {
              return (
                <div>
                  <div className="cart-items-title cart-items-item">
                    <img
                      src={`https://fly-walk-back-end.onrender.com/images/${item.image}`}
                      alt=""
                      style={{ width: "50px" }}
                    />
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                    <p>{itemCount[item._id]}</p>
                    <p>${item.price * itemCount[item._id]}</p>
                    <p
                      onClick={() => removeFromCart(item._id)}
                      className="cross"
                    >
                      x
                    </p>
                  </div>
                  <hr />
                </div>
              );
            }
          })}
        </div>
        <div className="cart-bottom">
          <div className="cart-total">
            <h2>cart Totals</h2>
            <div>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery Fees</p>
                <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <b>Total</b>
                <b>
                  ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
                </b>
              </div>
              <hr />
            </div>
            <button onClick={() => navigate("/contact")}>
              PROCEED TO CHECKOUT
            </button>
          </div>
          <div className="cart-promocode">
            <div>
              <p>If you have a promo code,Enter it here</p>
              <div className="cart-promocode-input">
                <input type="text" placeholder="Promo code" />
                <button>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
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
};

export default Cart;
