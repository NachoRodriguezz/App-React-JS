import {Link} from "react-router-dom"
const CartWidget = () => {
  return (
    <ul className="navbar-nav me-auto">
      <li className="nav-item">
        <Link className="nav-link" to='./cart'>
          <button className="btn btn-primary"><img src="./img/cart2.svg" alt="" /></button>
        </Link>
      </li>
    </ul>
  );
};

export default CartWidget;