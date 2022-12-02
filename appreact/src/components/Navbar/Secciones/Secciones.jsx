import { Link } from "react-router-dom";
const Secciones = () => {
    return ( 
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className='nav-link' to="/">
                        <button className='btn btn-'>Inicio</button>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className='nav-link' to="/category/1">
                        <button className='btn btn-y'>Palos</button>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className='nav-link' to="/category/2">
                        <button className='btn btn-'>Mochilas</button>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className='nav-link' to="/category/3">
                        <button className='btn btn-'>Accesorios</button>
                    </Link>
                </li>
            </ul>

    );
}

export default Secciones;