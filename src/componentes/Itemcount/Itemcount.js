import { useState } from "react";




function ItemCount({ consola, carrito }) {

    const [count, setCount] = useState(0)

    function handlerClicksuma() {
        if(count<10)
        setCount(count + 1);

    }
    function handlerClickresta() {
        if(count>0){
        setCount(count - 1)}
    }



    return (
        <div className="card">

            <div className=" card-content">
                <div className="media-content">
                    <div className="columns">
                        <div className="column">
                            <button className="jose" onClick={handlerClicksuma}>
                                +
                            </button>
                        </div>

                        <div className="column">
                            <span><p>{count}</p></span>
                        </div>

                        <div className="column">
                            <button className="jose" onClick={handlerClickresta} >
                                -
                            </button>
                        </div>
                        <div>
                <button className="Button"  >
                    Agregar al carrito
                </button>
            </div>

                    </div>

                </div>
            </div>
        </div>
    )
};
export default ItemCount;