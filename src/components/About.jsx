import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-body">
      <h1> About<br></br>
      Me
      </h1>
      <div className="services-container">
        <div className="service-card">
          <div className="icon-container">
            <i className="fa-solid fa-user"></i>
          </div>
          <h3>My Interests</h3>
          <p>
            I am a passionate and dedicated software engineer with a strong foundation in computer science. I have a keen interest in web development, particularly in creating dynamic and responsive user interfaces.
            My goal is to contribute to innovative projects that make a difference in people's lives.
          </p>
        </div>

        
        <div className="service-card">
          <div className="icon-container">
            <i className="fa-brands "></i>
          </div>
          <h3>My Interests</h3>
          <p>I'm currently seeking job opportunities where I can leverage my technical skills, strong communication abilities, and
            collaborative mindset. I thrive in dynamic, fast-paced environments and I am eager to make a positive impact in software engineering.
            If you're looking for a dedicated and enthusiastic professional, let's connect! Reach out and let's create something amazing together.
          </p>
            </div>


        <div className="service-card">
          <div className="icon-container">
            <i className="fa-brands fa-android"></i>
          </div>
          <h3>Internships</h3>
          <p>
            AICTE Cisco  Virtual Intenrship Program (2024-25)<br />
            ● Completed a virtual internship program with AICTE and Cisco and learnt basic and moderate networking concepts..<br />
            Social Intenrship (2024-25)
            ● Completed a social internship program with Healthcare and Medical Applications and conducted surveys in the nearby Villages to my Campus.<br />
        
            ● Web Development (Front-End Web Developer)<br />
            ● Learned HTML, CSS, JavaScript, Bootstrap.<br />
            ● Built websites, portfolios, games, tools and more.<br />
            ● Earned a certificate as a Front-End Web Developer.
          </p>
        </div>

        <div className="service-card">
          <div className="icon-container">
            <i className="fa-solid fa-database"></i>
          </div>
          <h3>My Skills</h3>
          <p>
            Java, OOPS, DBMS, OS, CN, System Design, HTML, CSS, JavaScript, Bootstrap, Tailwind CSS,SQL, MySQL.
          </p>
        </div>

        <div className="service-card">
          <div className="icon-container">
            <i className="fa-solid fa-pen"></i>
          </div>
          <h3>Education</h3>
          <p>
            ● Graduation: <b> B.Tech (CS & IT), Koneru Lakshmaiah Education Foundation,Vaddeswaram (2023 - 2027)</b><br />
            ● Intermediate/12th Grade: <b>Narayana Junior College(NAD),Vijayawada(State Board, 2021 - 2023)</b><br />
            ● Schooling: <b>Nalanda Vidya Niketan,Vijayawada(CBSE, 2009 - 2021)</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
