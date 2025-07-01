import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Link component కోసం ఇంపోర్ట్ చేయండి
import './FAQ.css';
import logo from '../assets/images/psk.png'; // లోగో కోసం ఇంపోర్ట్ చేయండి

const faqs = [
    {
        question:"Who is this PSK?",
        answer:"He is one of the most interesting Short Span Youtuber(Less fans) in Telugu Youtube Community, He does content creation on many concepts like Web Development,Operating Systems, Computer Networking,DBMS, Java Programming."
    },
    {
        question: "What is PSK OCTACAT?",
        answer: "PSK OCTACAT is a character created by AI to answer your questions and help you. It is the virtual assistant of PSK's website.It can perform many tasks like guiding you to navigate between the tabs,etc. ."
    },
    {
        question: "How do I get from this Website?",
        answer: "Various playlists are available on my YouTube channel PAVAN SHANMUKH KAKARLA. You can learn by clicking on the playlist button, related to your desired topic on the website's Homepage."
    },
    {
        question: "What is the benefit of logging into your website?",
        answer: "If you register and join my family, you get access to many PDFs on DSA,CS,etc topics for your practice. You can navigate through them using the Resources Link in the hompage. Later in the Resources page, again you have links to access whatever the topics you want.."
    },
    {
        question: "Which company are you currently working for?",
        answer: "I am still a student and will complete my graduation in 2027. My portfolio contains details of companies I am interested in."
    },
    {
        question: "What do you want to be in the future?",
        answer: "I want to be a successful Web Developer and have a passion for creating interactive and dynamic web applications."
    }
];

const FAQ = () => {
    const [openStates, setOpenStates] = useState({});
    const [isNavOpen, setIsNavOpen] = useState(false); // నావిగేషన్ ఓవర్‌లేను నియంత్రించడానికి స్టేట్

    const toggleFAQ = (index) => {
        setOpenStates(prevStates => ({
            ...prevStates,
            [index]: !prevStates[index] // నిర్దిష్ట సూచిక కోసం స్టేట్‌ను టోగుల్ చేయండి
        }));
    };

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen); // నావిగేషన్ ఓవర్‌లేను టోగుల్ చేయండి
    };

    return (
        <div>
            {/* Navbar Section */}
            <nav className='navbar'>
                <div className='logo'>
                    <a href="https://www.youtube.com/@ShanmukhYoutube" target="_blank" rel="noopener noreferrer">
                        <img src={logo} alt="My Channel Logo" className="navbar-logo" />
                    </a>
                </div>
                <div className='search-bar'>
                    <input type='text' placeholder='Search bro!!' />
                    <button type='button'>Search</button>
                </div>

                {/* Hamburger menu toggle button for mobile and desktop */}
                <button className="menu-toggle" onClick={toggleNav}>
                    {isNavOpen ? '×' : '☰'} {/* మెనూ స్టేట్‌ను బట్టి ఐకాన్ మారుతుంది */}
                </button>
            </nav>
            <div className="faq-container">
                <h1 className='faqh'>FAQ's</h1>
                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <div className="faq-item" key={index}>
                            <div className="faq-question" onClick={() => toggleFAQ(index)}>
                                <span>{faq.question}</span>
                                <span className="faq-icon">
                                    {openStates[index] ? '−' : '+'} {/* Icon changes based on state */}
                                </span>
                            </div>
                            {openStates[index] && (
                                <div className="faq-answer">
                                    <p>{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQ;
