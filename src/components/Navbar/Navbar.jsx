import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget.jsx';

const NavBar = () =>  {
    return (
        <nav>
            <h3>Coffe Cat</h3>
            <div>
                <button> Inicio </button>
                <button> Productos </button>
                <button> Sobre Nosotros </button>
                <button> Contacto </button>
            </div>
            <CartWidget />
        </nav>
    );
}

export default NavBar;