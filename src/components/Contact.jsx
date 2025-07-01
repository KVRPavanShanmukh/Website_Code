import '../components/Contact.css';
import { Link } from 'react-router-dom';
// import React, { useState } from 'react'; // navOpen state అవసరం లేదు కాబట్టి useState ని తీసివేస్తాము
import logo from '../assets/images/psk.png'; // లోగోను import చేయండి (మీరు HomePage లో వాడుతున్నది)

export default function Contact() {
    // const [navOpen, setNavOpen] = useState(false); // ఈ state ఇప్పుడు అవసరం లేదు

    // const toggleNavbar = () => { // ఈ function ఇప్పుడు అవసరం లేదు
    //     setNavOpen(!navOpen);
    // };

    return (
        <div>
            {/* HomePage లో ఉన్న navbar ని ఇక్కడ వాడతాము */}
            <nav className='navbar'>
                <div className='logo'>
                    {/* మీ YouTube ఛానెల్‌కు లింక్ చేయండి */}
                    <a href="https://www.youtube.com/@ShanmukhYoutube" target="_blank" rel="noopener noreferrer">
                        <img src={logo} alt="My Channel Logo" className="navbar-logo" />
                    </a>
                </div>
                {/* Search Bar ని Contact Page లో తీసివేసాము, అవసరమైతే add చేసుకోవచ్చు */}
                {/*
                <div className='search-bar'>
                    <input type='text' placeholder='Search bro!!' />
                    <button type='button'>Search</button>
                </div>
                */}

                <ul className='nav-links'>
                    <li><Link to='/'>Home</Link></li> {/* మీరు add చేసిన Projects link */}
                    <li><Link to='/logsup'>Login/SignUp</Link></li> {/* మీరు add చేసిన Portfolio link */}
                    <li><Link to='/faq'>FAQ</Link></li> 
                </ul>
                <button className="callus">Call Us</button> {/* కొత్త క్లాస్ పేరు */}
            </nav>

            <section className="banner">
                <h1>Contact Us</h1>
                <h4>We're here to answer any questions you may have.</h4>
                <p>Feel free to reach out to us via the contact form below or through our official contact information.</p>
            </section>

            <section className="contact-form">
                <div className="form-container">
                    <h2>Your Details Please!!</h2>
                    <form action="#" method="POST" className='details'>
                        <label htmlFor="name">Full Name: </label>
                        <input type="text" id="name" name="name" required />

                        <label htmlFor="email">Your Email: </label>
                        <input type="email" id="email" name="email" required />

                        <label htmlFor="phone">Your Phone: </label>
                        <input type="tel" id="phone" name="phone" />

                        <label htmlFor="message">Your Message/Suggestion to us: </label>
                        <textarea id="message" name="message" rows="5" required></textarea>

                        <button type="submit" className="submit-button">Submit</button>
                    </form>
                </div>
            </section>

            <section className="contact-info">
                <h2>Contact Information</h2>
                <address>
                    Phone: <a href="tel:6302509027">6302509027</a><br /> {/* tel: స్కీమ్‌ను ఉపయోగించండి */}
                    Email: <a href="mailto:kakarlapavanshanmukh@gmail.com">kakarlapavanshanmukh@gmail.com</a> {/* mailto: స్కీమ్‌ను ఉపయోగించండి */}
                </address>
            </section>

            <footer>
                <p>© 2025 Pavan Shanmukh Kakarla. All rights reserved.</p>
            </footer>
        </div>
    );
}