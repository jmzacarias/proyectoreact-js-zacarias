import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';


const NavBar = () => {
    return (
<header>
    <nav className= "menu">
            <ul>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/category/MLA1574'>Limpieza</NavLink>
                <NavLink to='/category/MLA1459'>Inmuebles</NavLink>
            </ul>
            <CartWidget />
    </nav>
</header>
)
};

export default NavBar;