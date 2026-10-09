import React from 'react'

export default function Products({ products }) {
    function renderProducts(products) {
        return products?.map((item) => {
            <ProductItem products={products}/>
        })
    }

    return (
        <div>

        </div>
    )
}
