
import { useState, useEffect } from "react"
import { getProducts, getProductByCategory } from "../asyncMock"
import Itemlist from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

const ItemListConteiner = ({ greeting }) => {
    const [products, setProducts] = useState([])

const { productsId } = useParams()
const {getProductByCategory} =useParams()


    useEffect(() => {
        const asyncFunc = productsId ? getProductByCategory : getProducts
        
        asyncFunc(productsId)
        .then(response => {
            setProducts(response)
        })
        .catch(error => {
            console.error(error)
           })
    }, [productsId])

    return(   <div> 
            <h1>{greeting}</h1>
            <Itemlist products={products}/>
            </div>  
    )
}
export default ItemListConteiner;
