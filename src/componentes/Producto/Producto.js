import { Link, useParams } from "react-router-dom";
import products from "../asyncMock";
import { useEffect, useState } from "react";
import ItemCount from "../Itemcount/Itemcount";


function Producto (){
const {productoId} =useParams();
const [producto, setProducto] = useState();

useEffect(()=>{
    
    const productoEncontrado = products.find((product)=>product.id == productoId);

    setProducto(productoEncontrado)
    console.log(producto)
}, [])

if( !producto ) return( <h1>cargando</h1> )

return(
    <div className="kk">
        <p className="xxd">{producto.description}</p>
        <img src={producto.img}/>
        <h4>{producto.name}</h4>
        <h6>{producto.price}</h6>
        <ItemCount className=""/>
<Link to="/productos">Volver</Link>
    </div>
)
} 
export default Producto;