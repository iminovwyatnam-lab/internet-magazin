import "./hero.css"
import oypon from "../../assets/oypon.png"
import logo_oypon from "../../assets/logo-oypon.png"

export default function Hero() {
  return (
    <div>
      <div className="hero-block">
        <div className="hero-text">
            <img src={logo_oypon} alt="" />
            <h1>Up to 10% <br /> off Voucher</h1>

            <p>Shop Now</p>
        </div>

        <img className="oypon" src={oypon} alt="" />
      </div>


      <div className="hero-down">
        <div></div>
        <p>Our Products</p>
      </div>
    </div>
  )
}
