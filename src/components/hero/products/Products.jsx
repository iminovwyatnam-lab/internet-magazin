import { Link, NavLink } from "react-router-dom"

export default function Products({ products }) {
    function renderProducts(products) {
        return products?.map((product) => {
            return <ProductItem product={product} />
        })
    }

    return (
        <section>
            <div className="products-grid">
                {renderProducts(products)}
            </div>
        </section>
    )
}


function ProductItem({ product }) {
    return (
        <Link className="link" to={`/details/${product.id}`}>
            <div key={product.key} className='card'>
                <div>
                    <img src={product.img} alt="" />
                </div>

                <h3>{product.title}</h3>
                <p>{product.price}</p>
            </div>
        </Link>
    )
}

