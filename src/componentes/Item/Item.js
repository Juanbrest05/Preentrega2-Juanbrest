
import { Link, useParams} from "react-router-dom";
import ItemCount from "../Itemcount/Itemcount";
import productos from "../asyncMock"


function Item() {

    return(
<div>
 


{productos.map((products) =>{
    return(
        <article className="jose" key= {products.id}>
            <h5 className="pepe"> {products.name} </h5>
            <img className="marco" src= {products.img}/>
            <h5 className="pepe"> ${products.price} </h5>
            <Link className="hector" to = {`/producto/${products.id}`}>Ver detalle</Link>
            <ItemCount className="narco"/>
        </article>
               );
            }
          )}
     </div>

    )
}

 
export default Item;