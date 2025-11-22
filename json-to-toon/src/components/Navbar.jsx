import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    const location = useLocation()

    const isActive = (path) => {
        return location.pathname === path ? 'active' : ''
    }

    return (
        <nav className="navbar">
            <div className="nav-links">
                <Link to="/" className={`nav-link ${isActive('/')}`}>Converter</Link>
                <Link to="/about" className={`nav-link ${isActive('/about')}`}>About</Link>
                <Link to="/docs" className={`nav-link ${isActive('/docs')}`}>Docs</Link>
                <Link to="/contact" className={`nav-link ${isActive('/contact')}`}>Contact</Link>
                <Link to="/privacy" className={`nav-link ${isActive('/privacy')}`}>Privacy</Link>
                <Link to="/cookies" className={`nav-link ${isActive('/cookies')}`}>Cookies</Link>
                <Link to="/terms" className={`nav-link ${isActive('/terms')}`}>Terms</Link>
                <Link to="/disclaimer" className={`nav-link ${isActive('/disclaimer')}`}>Disclaimer</Link>
            </div>
        </nav>
    )
}

export default Navbar
