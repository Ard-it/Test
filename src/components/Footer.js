import React from "react";
import logo from '../images/Logo .svg';

const Footer = () => {
     return (
        <footer>
            <section>
                <div className="company-info">
                    <img src={logo} alt=""/>
                    <p>We are a family owned Mediterranean resturant, focused on traditional recipes served with a modern twist</p>
                </div>
                <div>
                    <h3>Important Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Menu</a></li>
                        <li><a href="/">Reservations</a></li>
                        <li><a href="/">Order Online</a></li>
                        <li><a href="/">Login</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Contact</h3>
                    <ul>
                        <li>Addres: <br/>Via Giacomo Matteotti 4, Gambettola, Italia</li>
                        <li>Phone: <br/>+39 34637588888888</li>
                        <li>Email: <br/>info@ekoclikclick.it</li>
                    </ul>
                </div>
                <div>
                    <h3>Social Media</h3>
                    <ul>
                        <li>Addres: <br/>Gambettola, Italia</li>
                        <li>Phone: <br/>+39 34637588888888</li>
                        <li>Email: <br/>info@ekoclikclick.it</li>
                    </ul>
                </div>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Facebook</a></li>
                        <li><a href="/">Instagram</a></li>
                        <li><a href="/">X</a></li>
                    </ul>
            </section>
        </footer>


     );
};

export default Footer;