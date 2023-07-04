import {  NavLink ,Link} from "react-router-dom"
import Nike from "../../images/Nike.jpg"

const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link to="/">
                 <img src="https://thumbs.dreamstime.com/b/logo-de-nike-con-fondo-blanco-ilustraci%C3%B3n-editorial-la-empresa-168841205.jpg" alt="/" width="160px"  />
                </Link>
            <div className="Categories">
            <NavLink to={"/"} className={({isActive}) => isActive ? "ActiveOption" : "Option"}>Inicio</NavLink>
              <NavLink to={"./Productos"} className={({isActive}) => isActive ? "ActiveOption" : "Option"}>Productos</NavLink>
            </div>
            <div className="Cart">
                <box-icon name="cart"></box-icon>
                <span className="Item__total">0</span>
            </div>
        </nav>
    )
}
export default NavBar