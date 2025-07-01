import React from 'react';
import './Portfolio.css'; // Assuming you have a CSS file for styling
import { Link } from 'react-router-dom';

export default function Portfolio() {
    return (
        <div className='portfolio-container'>
            <header>
                <h1 className='head1'>PORTFOLIO</h1>
            </header>

            <nav className='navPortfolio'>
                <div className='logo'>
                    <a href='../assets/images/yt_logo.png'></a>
                </div>
                <div className='search-bar'>
                    <input type='text' placeholder='Search...karo' />
                    <button type='button'>Search</button>
                </div>
                <ul className='nav-links'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/projects'>Projects</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                    <li><Link to='/about'>About</Link></li>

                </ul>
            </nav>

            <div className='portfolio-content'>
                <h3>Welcome to my portfolio! Here you can find a collection of my projects and achievements.</h3>
                <hr></hr>
            <p><u><strong>•Web Based Online Examination System using AI Proctoring:</strong></u>
A website based Examination System that allows users to conduct and attempt exams for themselves, or their mentees.
<p>– A website that can communicate to end user for conducting Online Examinations for his skill check, A Database
at the back-end stores the data of all the users who logged in and performing write operations on the site.</p>
– Technology Used: Spring Boot, Reactjs, Bootstrap technologies.
<hr></hr>
<p><u><strong>•Word Count using AVL Tree using Data Structures:</strong></u> The AVL Tree Word Count Application is a software
tool designed to efficiently analyze the contents of a text document and generate a count of unique words
along with their frequencies.</p>
<hr></hr>
<p><u><strong>•Development of Low-Profile, Conformal Monopole Antennas for WBAN Applications (Research Paper):</strong></u>
Wireless Body Area Networks (WBANs) basically is a network containing sensor nodes that are attached to
the human body, used to measure the bio signals like heart rate, blood pressure and is used in majority of
applications in medical sector
</p>
<hr></hr>
<p><u><strong>•Billing System through Java:</strong></u> Creating an automatic billing system. Develop a GUI program such that it
should contain different categories of items in the shop and each category should display a drop-down list of
the items present such that on selecting a particular item the customer wants to purchase, it displays the item
name, the discount on it and the final price of the item. Calculate the total bill,print it,then store in a file</p></p>
            </div>

            <footer className='footer'>
                <p>Thank you for visiting my portfolio!</p>
                <p>© 2025 Pavan Shanmukh Kakarla. All rights reserved.</p>
            </footer>

        
        </div>


    );
}
