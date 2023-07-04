import Item from "../Item/Item"

const ItemList = ({products }) => {
    return(
        <div className="ListGroup">
            {products.map(prod => <Item key={products.id} {...prod} />)}
        </div>
    )
}
export default ItemList