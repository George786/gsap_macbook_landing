import {footerLinks} from "../constants/index.js";

const Footer = () => {
    return (
        <footer>
            <div className="info">
                <p>More ways to shop: Find an Apple Store or other retailer near you.
                    Or call <a href="tel:0008000401966">000800 040 1966</a>.
                </p>
                <img src="/logo.svg" alt =""/>
            </div>

            <hr />
            <nav className="links" aria-label="Footer">
            <p>Copyright © {new Date().getFullYear()} Apple Inc. All rights reserved.</p>
            <ul>
                {footerLinks.map(({label, link }) => (
                    <li key={label}>
                        <a href={link}>{label}</a>
                    </li>
                ))}
            </ul>
            </nav>
        </footer>
    )
}
export default Footer