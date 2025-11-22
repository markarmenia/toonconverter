import { Link, useLocation } from 'react-router-dom'
// Logo is now loaded from public directory

const Header = () => {
    const location = useLocation()

    return (
        <nav className="top-nav">
            <Link to="/" className="logo-container">
                {/* We will use the generated image here, for now text fallback if image fails */}
                <img src="/toon_logo.svg" alt="TOON Logo" className="logo-img" />

            </Link>
            <div className="header-nav-links">
                <Link
                    to="/"
                    className={location.pathname === '/' ? 'active' : ''}
                >
                    Converter
                </Link>
                <Link
                    to="/about"
                    className={location.pathname === '/about' ? 'active' : ''}
                >
                    About
                </Link>
                <Link
                    to="/docs"
                    className={location.pathname === '/docs' ? 'active' : ''}
                >
                    Docs
                </Link>
                <Link
                    to="/contact"
                    className={location.pathname === '/contact' ? 'active' : ''}
                >
                    Contact
                </Link>
            </div>
        </nav>
    )
}

export default Header
