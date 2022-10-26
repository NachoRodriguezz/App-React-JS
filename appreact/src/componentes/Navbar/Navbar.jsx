import "./navbar.css";
import FormBusqueda from "../FormBusqueda/FormBusqueda";
import Dropdown from "./Dropdown/Dropdown";
import Secciones from "./Secciones/Secciones";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-primary">
      <div className="container-fluid">
        <Secciones/>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Palos
              </a>
            </li>
            <Dropdown />
          </ul>
          <FormBusqueda busqueda={"Buscar Productos"} />
            <li className="nav-item">
              <a className="nav-link" href="#">
                <button><img src="./img/cart2.svg" alt="" /></button>
              </a>
            </li>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
