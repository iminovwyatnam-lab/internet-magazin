import "./footer.css"

import galochka from "../../assets/galochka.png"
import bistroye_dostavka from "../../assets/bistroye-dostavka.png"
import naushniki from "../../assets/naushniki.png"
import downlood from "../../assets/download.png"

export default function Footer() {
  return (
    <footer>
      <div className="footer-flex">

        <div>
          <img src={bistroye_dostavka} alt="" />
          <h4>FREE AND FAST DELIVERY</h4>
          <p>Free delivery for all orders over $140</p>
        </div>

        <div>
          <img src={naushniki} alt="" />
          <h4>24/7 CUSTOMER SERVICE</h4>
          <p>Friendly 24/7 customer support</p>
        </div>

        <div>
          <img src={galochka} alt="" />
          <h4>MONEY BACK GUARANTEE</h4>
          <p>We reurn money within 30 days</p>
        </div>
      </div>

      <div className="footer-flex1">
        <div>
          <h1>Exclusive</h1>
          <h4>Subscribe</h4>

          <p>Get 10% off your first order</p>

          <input type="text" name="" id="" placeholder="Enter your email" />
        </div>

        <div className="block1">
          <h3>Support</h3>

          <p>111 Bijoy sarani, Dhaka, <br /> DH 1515, Bangladesh.</p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>

        <div className="block2">
          <h3>Account</h3>

          <p>My Account</p>
          <p>Login / Register</p>
          <p>Cart</p>
          <p>Wishlist</p>
          <p>Shop</p>
        </div>

        <div className="block3">
          <h3>Quick Link</h3>

          <p>Privacy Policy</p>
          <p>Terms Of Use</p>
          <p>FAQ</p>
          <p>Contact</p>
        </div>

        <div>
          <img className="imgg" src={downlood} alt="" />
        </div>

      </div>
    </footer>
  )
}
