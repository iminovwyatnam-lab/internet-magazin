import "./hero.css"
import oypon from "../../assets/oypon.png"
import logo_oypon from "../../assets/logo-oypon.png"

export default function Hero({ products = [], loading, error }) {

  function renderProducts() {
    if (loading) return <p>Загрузка...</p>
    if (error) return <p>{error}</p>


    return products.map((item) => (
      <div className="card" key={item.key}>
        <img src={item.img} alt={item.title} />
        <h3>{item.title}</h3>
        <p className="product-price">${item.price}</p>
      </div>
    ))
  }

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

      <div className="products-grid">
        {renderProducts()}
      </div>
    </div>
  )
}
