import Navbar from "../Navbar";
import "../styles/Collection.css";
import white from "../assets/white.jpg";
import black from "../assets/black.jpg";
import tshirt from "../assets/T-shirt.jpg";
import jeans from "../assets/jeans.jpg";
import cotten from "../assets/cottan.jpg";
import placer from "../assets/placer.jpg";

export default function Collection() {
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
      <Navbar />
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
          <div className="product-box">
            <img style={{ width: "200px", height: "200px" }} src={white}></img>
            <p>White shirt</p>
          </div>
          <div className="product-box">
            <img style={{ width: "200px", height: "200px" }} src={black}></img>
            <p>Black shirt</p>
          </div>
          <div className="product-box">
            <img style={{ width: "200px", height: "200px" }} src={tshirt}></img>
            <p>T -shirt</p>
          </div>
          <div className="product-box">
            <img style={{ width: "200px", height: "200px" }} src={jeans}></img>
            <p>Jeans</p>
          </div>
          <div className="product-box">
            <img style={{ width: "200px", height: "200px" }} src={cotten}></img>
            <p>Cotten-shirt</p>
          </div>
          <div className="product-box">
            <img style={{ width: "200px", height: "200px" }} src={placer}></img>
            <p>Placer</p>
          </div>
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
