import { Link, useLocation } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
    const location = useLocation()

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-links">
                    <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Converter</Link>
                    <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link>
                    <Link to="/docs" className={location.pathname === '/docs' ? 'active' : ''}>Docs</Link>
                    <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
                    <Link to="/privacy" className={location.pathname === '/privacy' ? 'active' : ''}>Privacy</Link>
                    <Link to="/cookies" className={location.pathname === '/cookies' ? 'active' : ''}>Cookies</Link>
                    <Link to="/terms" className={location.pathname === '/terms' ? 'active' : ''}>Terms</Link>
                    <Link to="/disclaimer" className={location.pathname === '/disclaimer' ? 'active' : ''}>Disclaimer</Link>
                </div>
                <p className="copyright">
                    © {new Date().getFullYear()} TOON Converter. Learn more about <a href="https://github.com/toon-format/toon" target="_blank" rel="noreferrer">TOON</a>
                </p>
            </div>
        </footer>
    )
}

export default Footer
