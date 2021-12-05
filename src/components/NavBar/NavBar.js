import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';


const NavBar = () => {
    return (
<header>
    <nav className= "menu">
            <ul>
                <NavLink to='/' activeClassName='active'>Home</NavLink>
                <NavLink to='/category/MLA1574' activeClassName='active'>Limpieza</NavLink>
                <NavLink to='/category/MLA1459' activeClassName='active'>Inmuebles</NavLink>
                <NavLink to='/' activeClassName='active'></NavLink>
            </ul>
            <CartWidget />
    </nav>
</header>
)
};

export default NavBar;