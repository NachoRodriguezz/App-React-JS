import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
const CartWidget = () => {
    const {getItemQuantity} = useContext(CartContext)
    return (
        <>
            <ul className='navbar-nav me-auto cartWidget'>
                <li className="nav-item">
                    <Link className="nav-link" to="/cart">
                        <button className="btn btn-">
                            <i className="fas fa-shopping-cart fa-lg"></i>
                            { getItemQuantity() >= 1 && <span className="cantCarrito">{getItemQuantity()}</span>}
                            </button>
                    </Link>
                    
                </li>
            </ul>
        </>
    );
}

export default CartWidget;