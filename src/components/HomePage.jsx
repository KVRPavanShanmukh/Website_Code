import './HomePage.css';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import pskoctacatImage from '../assets/images/pskoctacat.png'; // Assuming this is your PSKOCTACAT image
import logo from '../assets/images/psk.png'; // Assuming this is your logo
import kllib from '../assets/images/kllib.jpg';
import campus from '../assets/images/campus.jpg';
import topview from '../assets/images/topview.png';
import mech from '../assets/images/mech.png';
import randd from '../assets/images/randd.png';
import techmh from '../assets/images/techmh.png';
import amazon from '../assets/images/amazon.avif';
import google from '../assets/images/google.webp';
import microsoft from '../assets/images/ms.png';
import cog from '../assets/images/cognizant.png';


export default function HomePage() {
    const [showCharacter, setShowCharacter] = useState(false);
    const [chatHistory, setChatHistory] = useState([]);
    const [userInput, setUserInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    // const chatDisplayRef = useRef(null); // No longer needed if chat history is always reset

    const [showYoutubeIframe, setShowYoutubeIframe] = useState(false);

    const contentCategories = [
        { name: 'Web Development', url: 'https://www.youtube.com/playlist?list=PLuX3eKcrjN0hoY2WMKnb9hzCG3eyCwsh3' },
        { name: 'Operating Systems', url: 'https://www.youtube.com/playlist?list=PLuX3eKcrjN0jh-QOTwp7aoG7dnlLjQlhP' },
        { name: 'Networking Concepts', url: 'https://www.youtube.com/playlist?list=PLuX3eKcrjN0iU_Fkw_wN7b4rJ3ObCJwc1' },
        { name: 'Object Oriented Programming', url: 'https://www.youtube.com/playlist?list=PLuX3eKcrjN0gzAFp_L-Mm-XFvwrP3QogM' },
        { name: 'Gaming', url: 'https://www.youtube.com/playlist?list=PLuX3eKcrjN0hPdANbIUZDh3CKTr2yJM8Z' },
        { name: 'Educational Podcast', url: 'https://www.youtube.com/playlist?list=PLuX3eKcrjN0ipVrhrRkXR8Ogh9XCNUesC' },
    ];

    // useEffect(() => { // This useEffect for scrolling is no longer needed if chat is always reset
    //     if (chatDisplayRef.current) {
    //         chatDisplayRef.current.scrollTop = chatDisplayRef.current.scrollHeight;
    //     }
    // }, [chatHistory]);

    const handleClick = () => {
        setShowCharacter(true);
        // Always reset chat history when the character is shown/clicked
        setChatHistory([{ role: 'genie', text: 'Hello! I am PSKOCTACAT. How can I help you today?' }]);
    };

    const handleCloseCharacter = () => {
        setShowCharacter(false);
        setChatHistory([]); // Clear history on close
        setUserInput('');
    };

    const handleShowYoutubeIframe = () => {
        setShowYoutubeIframe(true);
    };

    const handleHideYoutubeIframe = () => {
        setShowYoutubeIframe(false);
    };

    const openPlaylist = (url) => {
        window.open(url, '_blank', 'noopener noreferrer');
    };

    const sendMessageToGenie = async () => {
        if (userInput.trim() === '') return;

        const userMessage = userInput;
        // Optionally, you can show the user's message immediately for better UX, then replace it with the AI's.
        // If you strictly want only one message at a time, remove this line.
        setChatHistory(prev => [...prev, { role: 'user', text: userMessage }]);
        
        setUserInput('');
        setIsLoading(true);

        try {
            const prompt = `You are a character named PSKOCTACAT. Your age is infinite and your date of birth is 2898 A.D. Respond concisely and in character.
            User: ${userMessage}`;

            // We only send the latest user message for a "fresh" response,
            // as requested for the "fade out" effect (by replacing old messages).
            let chatHistoryForApi = [{ role: "user", parts: [{ text: prompt }] }];

            const payload = { contents: chatHistoryForApi };
            // IMPORTANT: Replace "YOUR_ACTUAL_GEMINI_API_KEY_HERE" with your real Gemini API Key.
            // For production, consider using environment variables (e.g., process.env.REACT_APP_GEMINI_API_KEY)
            // or a backend proxy to keep your API key secure.
            const apiKey = "AIzaSyDL3FpI2nGwIjYarbzjJIzTcFM6KYAg-UA"; 
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            const result = await response.json();

            if (result.candidates && result.candidates.length > 0 &&
                result.candidates[0].content && result.candidates[0].content.parts &&
                result.candidates[0].content.parts.length > 0) {
                const genieResponse = result.candidates[0].content.parts[0].text;
                // Replace entire history with new response for a fresh feel
                setChatHistory([{ role: 'genie', text: genieResponse }]);
            } else {
                console.error("Unexpected API response structure:", result);
                setChatHistory([{ role: 'genie', text: 'Sorry, I could not get a response from the AI.' }]);
            }
        } catch (error) {
            console.error("Error communicating with Gemini API:", error);
            setChatHistory([{ role: 'genie', text: 'There was an error connecting to the AI. Please try again.' }]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !isLoading) { // Prevent sending multiple times while loading
            sendMessageToGenie();
        }
    };

    const [showImageModal, setShowImageModal] = useState(false);
    const [currentModalImage, setCurrentModalImage] = useState('');

    const handleOpenImageModal = (imageUrl) => {
        setCurrentModalImage(imageUrl);
        setShowImageModal(true);
    };

    const handleCloseImageModal = () => {
        setShowImageModal(false);
        setCurrentModalImage('');
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

                <ul className='nav-links'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/logsup'>Login</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/portfolio'>Portfolio</Link></li>
                    <li><Link to='/register'>Regsiter</Link></li> {/* This line links to Register.jsx */}
                    <li><Link to='/faq'>FAQ</Link></li> {/* Retained original link to '/' */}
                </ul>
            </nav>

            {/* Main Content Container */}
            <div className='home-container'>
                {/* Content Categories Section */}
                <h2 className="content">Content I make:</h2>
                <div className="content-buttons-container">
                    {contentCategories.map((category, index) => (
                        <button
                            key={index}
                            className="btn content-button"
                            onClick={() => openPlaylist(category.url)}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>

                {/* About Me Section */}
                <p className='theory'>Hello Guys I am K.V.R.Sai Pavan Shanmukh graduating in Koneru Lakshmaiah Education Foundation. I will be graduated in 2027. My Branch is CSIT. I live in Vijayawada, A.P, India.</p>

                {/* Image Gallery 1 (Campus) */}
                <div className="image-gallery-container">
                    <img
                        src={kllib}
                        alt="KLU LIB"
                        className="modalImage"
                        onClick={() => handleOpenImageModal(kllib)}
                    />
                    <img
                        src={campus}
                        alt="Campus View"
                        className="modalImage"
                        onClick={() => handleOpenImageModal(campus)}
                    />
                    <img
                        src={topview}
                        alt="Another View"
                        className="modalImage"
                        onClick={() => handleOpenImageModal(topview)}
                    />
                    <img
                        src={mech}
                        alt="Mechanical Lab"
                        className="modalImage"
                        onClick={() => handleOpenImageModal(mech)}
                    />
                    <img
                        src={randd}
                        alt="R&D Block"
                        className="modalImage"
                        onClick={() => handleOpenImageModal(randd)}
                    />
                </div>

                {/* Image Gallery 2 (Companies) */}
                <div className="image-gallery-container">
                    <img
                        src={techmh}
                        alt="Tech Mahindra"
                        className="modalImage"
                        onClick={() => handleOpenImageModal(techmh)}
                    />
                    <img
                        src={amazon}
                        alt="AMAZON"
                        className="modalImage"
                        onClick={() => handleOpenImageModal(amazon)}
                    />
                    <img
                        src={microsoft}
                        alt="MS"
                        className="modalImage"
                        onClick={() => handleOpenImageModal(microsoft)}
                    />
                    <img
                        src={google}
                        alt="GOOGLE"
                        className="modalImage"
                        onClick={() => handleOpenImageModal(google)}
                    />
                    <img
                        src={cog}
                        alt="COGNIZANT"
                        className="modalImage"
                        onClick={() => handleOpenImageModal(cog)}
                    />
                </div>

                {/* Interest and Skills Section */}
                <p className='theory1'>
                    Above are my dream companies <br></br>
                    I am a Web Developer and I am currently learning ReactJS. I have a passion for creating interactive and dynamic web applications. I also enjoy exploring new technologies and staying updated with the latest trends in web development...
                </p>

                {/* PSK OCTI Button */}
                <button className='btn' onClick={handleClick}>PSK OCTI</button>

                {/* Recent Youtube Updates Section */}
                <h2>Recent Youtube Updates</h2>
                <button className='btn youtube-button' onClick={handleShowYoutubeIframe}>
                    Show Latest Video
                </button>

                {showYoutubeIframe && (
                    <div className='yt-container'>
                        <button className="close-iframe-btn" onClick={handleHideYoutubeIframe}>X</button>
                        <iframe width="800" height="800" src="https://www.youtube.com/embed/oIW5HET5kMM?si=7Jo2FIvGCdcZdHre" title="YouTube video player"
                            frameBorder="0" allow="accelerometer; autoplay; clipboard-write; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                        </iframe>
                    </div>
                )}

                {/* Social Media Profiles Section */}
                <h2 className='links'>Social Media Profiles</h2>
                <div className='link-list'>
                    <a icon="fa-brands fa-youtube" href='https://www.youtube.com/@ShanmukhYoutube' target='_blank' rel='noopener noreferrer'>
                        <i className="ytlink"></i> My YouTube Channel</a> <br />
                    <a icon="fa-brands fa-github" href='https://github.com/KVRPavanShanmukh' target='_blank' rel='noopener noreferrer'>
                        <i className="githublink"></i> My GitHub Profile</a> <br />
                    <a icon="fa-brands fa-linkedin" href='https://www.linkedin.com/in/pavan-shanmukh-kakarla-aa3923335/' target='_blank' rel='noopener noreferrer'>
                        <i className="linkedinLink"></i> My LinkedIn Profile</a>
                </div>
                {/* Footer Section */}
                <footer className='footer'>
                    <p>Thank you for visiting!!</p>
                    <p>© 2025 Pavan Shanmukh Kakarla. All rights reserved.</p>

                    <p>Made with ❤️ by Pavan Shanmukh</p>
                    <div>
                        <p>Follow me for more updates!!!</p>
                    </div>
                </footer>
            </div>

            {/* PSK OCTACAT Chat Widget */}
            {showCharacter && (
                <div className="octacat-chat-container">
                    <button className="octacat-close-btn" onClick={handleCloseCharacter}>×</button>
                    <img
                        src={pskoctacatImage}
                        alt="PSKOCTACAT Character"
                        className="octacat-image-fixed"
                        onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/120x120/CCCCCC/000000?text=Image+Error"; }}
                    />
                    <div className="chat-display-fixed">
                        {chatHistory.map((msg, index) => (
                            <div key={index} className={`message ${msg.role}-message`}>
                                {msg.text}
                            </div>
                        ))}
                        {isLoading && <div className="loading-indicator">Typing...</div>}
                    </div>

                    <div className="chat-input-container-fixed">
                        <input
                            type="text"
                            value={userInput}
                            onChange={(e) => setUserInput(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder="Type your message..."
                            className="chat-input-fixed"
                            disabled={isLoading}
                        />
                        <button onClick={sendMessageToGenie} className="chat-send-btn-fixed" disabled={isLoading}>
                            Send
                        </button>
                    </div>
                </div>
            )}

            {/* Image Modal (ensure this is part of your original structure if you use it) */}
            {showImageModal && (
                <div className="image-modal-overlay" onClick={handleCloseImageModal}>
                    <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
                        <span className="close-modal-btn" onClick={handleCloseImageModal}>×</span>
                        <img src={currentModalImage} alt="Full size" className="full-size-image" />
                    </div>
                </div>
            )}
        </div>
    );
}
