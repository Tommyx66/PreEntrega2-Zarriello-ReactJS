import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {
    const imgSonicSynergy = "../../img/SonicSinnergy.png"
    return (
        <header>
            <Link to={"/"}>
                <img className='img-sonic-synergy' src={imgSonicSynergy} alt="" />
            </Link>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Sonic Synergy</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">

                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link inicio" href="/">
                                    <p>Inicio</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"/categoria/1"}> Guitarras </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"/categoria/2"}> Bajos </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"/categoria/3"}> Sintetizador </NavLink>
                            </li>
                            <li className="cart-widget">
                                <CartWidget />
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>



        </header>
    )
}

export default NavBar