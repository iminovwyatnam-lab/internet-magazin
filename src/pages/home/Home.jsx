import { useEffect, useState } from "react"
import Hero from "../../components/hero/Hero"
import { getProduct } from "../../api/ProductApi"
import Products from "../../components/hero/products/Products"

export default function Home() {
    const [data, setData] = useState([])

    useEffect(() => {
        async function loadProducts() {
            try {
                const products = await getProduct();
                console.log(products);
                setData(products);
            } catch (error) {
                console.error("Maxsulotlarni yuklashda xato", error);

            }
        }
        loadProducts()
    }, [])
    return (
        <>
            <Hero />
            <Products products={data}/>
        </>
    )
}