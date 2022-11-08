import { Link } from "react-router-dom";
const Secciones = () => {
    return ( 
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ display: "flex" , justifyContent : "center" , alignItems : "center" }}>
                <li className="nav-item">
                    <Link className='nav-link' to="/">
                        <button className='btn btn-primary'><img src="./img/palospng.png" alt="" style={{ width: 30 }}></img></button>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className='nav-link' to="/category/1">
                        <button className='btn btn-primary'>Computadoras</button>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className='nav-link' to="/category/2">
                        <button className='btn btn-primary'>Celulares</button>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className='nav-link' to="/category/3">
                        <button className='btn btn-primary'>TV</button>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className='nav-link' to="/category/4">
                        <button className='btn btn-primary'>Prerifericos</button>
                    </Link>
                </li>
            </ul>
    );
}

export default Secciones;