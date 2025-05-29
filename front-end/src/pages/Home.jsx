import headerImg from "../assets/img1.jpg";
import arrivel1 from "../assets/img2.jpeg";
import arrivel2 from "../assets/img3.jpg";
import arrivel3 from "../assets/img4.jpg";
import arrivel4 from "../assets/img5.jpg";
import w1 from "../assets/w1.jpg";
import w2 from "../assets/w2.jpg";
import w3 from "../assets/w3.jpg";
import w4 from "../assets/w4.jpg";
import Navbar from "../Navbar";
import "../styles/Home.css";

export default function Home() {
  return (
    <>
      <div className="header">
        <div>
          <h1>Level up Your styles</h1>
          <p>With our stunning Collection</p>
          <button>Shop</button>
        </div>
        <div>
          <img
            style={{ width: "300px", height: "300px" }}
            className="header-img"
            src={headerImg}
          />
        </div>
      </div>
      <div className="service">
        <div className="service-container-1">
          <div>
            <h2>We Provide Best</h2>
            <h2>Customer Experience</h2>
          </div>
          <div>
            <p>
              {" "}
              || we ensure that one Customer have the best shopping experience
            </p>
          </div>
        </div>
        <div className="service-container-2">
          <div>
            <i class="fa-solid fa-face-smile"></i>
            <h4>Satisfaction Guarantee</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard
            </p>
          </div>

          <div>
            <i class="fa-solid fa-face-smile"></i>
            <h4>New Arrivel</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard
            </p>
          </div>

          <div>
            <i class="fa-solid fa-face-smile"></i>
            <h4>Fast and free shop</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard{" "}
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 style={{ padding: "20px" }}>New Arrivel</h2>
      </div>

      <div className="new-arrivel">
        <div className="new-arrivel-container">
          <img className="new-arrivel-img" src={arrivel1} />
          <button>
            Shop Now <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
        <div className="new-arrivel-container">
          <img className="new-arrivel-img" src={arrivel2} />
          <button>
            Shop Now <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
        <div className="new-arrivel-container">
          <img className="new-arrivel-img" src={arrivel3} />
          <button>
            Shop Now <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
        <div className="new-arrivel-container">
          <img className="new-arrivel-img" src={arrivel4} />
          <button>
            Shop Now <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
      <div>
        <h2 style={{ padding: "20px" }}>Most wanted</h2>
      </div>

      <div className="new-arrivel">
        <div className="new-arrivel-container">
          <img className="new-arrivel-img" src={w1} />
          <button>
            Shop Now <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
        <div className="new-arrivel-container">
          <img className="new-arrivel-img" src={w2} />
          <button>
            Shop Now <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
        <div className="new-arrivel-container">
          <img className="new-arrivel-img" src={w3} />
          <button>
            Shop Now <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
        <div className="new-arrivel-container">
          <img className="new-arrivel-img" src={w4} />
          <button>
            Shop Now <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>

      {/* News */}
      <div className="news">
        <h2>Join our News Letter</h2>
        <p>
          Signup for our email newsletter to get exclusive discount and updates
        </p>
        <div>
          <input type="text" className="search"></input>
        </div>
        <div>
          <button>
            Subscribe <i class="fa-solid fa-arrow-right"></i>
          </button>
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
