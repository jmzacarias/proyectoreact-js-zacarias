import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';


const NavBar = () => {
    return (
<header>
    <nav className= "menu">
            <ul>
                <li>Home</li>
                <li>Itinerario</li>
                <li>Galeria</li>
                <li>Compras</li>
            </ul>
            <CartWidget />
    </nav>
</header>
)
};

export default NavBar;