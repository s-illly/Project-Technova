import React, { useEffect } from 'react';
import './style.css'; // Ensure you have the CSS file in the same directory

const CelestialHackathon = () => {
  useEffect(() => {
    const cursor = document.querySelector('.cursor-alien');
    let lastX, lastY; // Variables to store the last cursor position

    // Update the cursor position based on mouse movement
    const handleMouseMove = (e) => {
      lastX = e.clientX;
      lastY = e.clientY;
      cursor.style.left = `${lastX}px`;
      cursor.style.top = `${lastY}px`;
    };

    document.addEventListener('mousemove', handleMouseMove);

    // Hide the cursor when scrolling
    const handleScroll = () => {
      cursor.style.opacity = '0'; // Hide cursor during scroll
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        cursor.style.opacity = '1'; // Show cursor after scrolling stops
        cursor.style.left = `${lastX}px`; // Reset left position
        cursor.style.top = `${lastY}px`; // Reset top position
      }, 100);
    };

    let scrollTimeout;
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Navbar */}
      <nav>
        <ul className="nav-links">
          <li><a href="#about">Product</a></li>
          <li><a href="#get-involved">Solutions</a></li>
          <li><a href="#events-schedule">Get a Demo</a></li>
          <li><a href="https://hackclub.com/">Login</a></li>
          <li><a href="">Add to Chrome Now</a></li>
        </ul>
        <div className="hackclub-logo">
          <img src="https://cloud-fg4nhlbaa-hack-club-bot.vercel.app/0hack-club-logo.png" alt="Hack Club" />
        </div>
      </nav>

      {/* Landing page message */}
      <header>
        <div className="celestial-logo-container">
          <img src="https://cloud-gbkmzn8ay-hack-club-bot.vercel.app/0untitled_artwork_2.png" alt="Celestial Logo" className="celestial-logo" />
        </div>
        <div className="header-text">
          <h1>Introducing <strong>EDITName!</strong> 💫</h1>
          <h3 id="about">EDITSlogan - Protecting Your Eyes, 20 seconds at a time.</h3>
        </div>
      </header>

      <section className="about-section">
        <div className="text-container">
          <h2 id="events-schedule"><em>Product</em></h2>
          <p>text<em>text <a href="link">link text</a></em> text <strong>text</strong>.</p>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="schedule-section">
        <h2>What is the Day Going to Look Like?</h2>
        <table>
          <thead>
            <tr>
              <th>Time</th>
              <th>Event</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>9:00 - 10:00</td>
              <td>Opening Ceremony</td>
              <td>Welcome, icebreakers, and track selection.</td>
            </tr>
            <tr>
              <td>10:00 - 11:00</td>
              <td>Workshops</td>
              <td>Choose between PCB or 3D Modelling.</td>
            </tr>
            <tr>
              <td>11:00 - 11:30</td>
              <td>Break</td>
              <td>Relax and recharge.</td>
            </tr>
            <tr>
              <td>11:30 - 12:30</td>
              <td>Workshop or Project Time</td>
              <td>Continue learning or start creating.</td>
            </tr>
            <tr>
              <td>12:30 - 1:30</td>
              <td>Lunch Break</td>
              <td>Enjoy lunch with fellow participants.</td>
            </tr>
            <tr>
              <td>1:30 - 4:00</td>
              <td>Project Time</td>
              <td>Complete and polish your projects for the showcase.</td>
            </tr>
            <tr>
              <td>4:00 - 4:30</td>
              <td>Closing Ceremony</td>
              <td>Celebrate and share your work!</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Previous Events Section */}
      <section className="events-section">
        <h2>Previous Events</h2>
        <div className="events-gallery">
          <div className="event-item">
            <h4>Solstice - Chicago, IL</h4>
            <img src="https://cloud-6ef3v4tky-hack-club-bot.vercel.app/0image.png" alt="Solstice Event" />
          </div>
          <div className="event-item">
            <h4>Oasis - Austin, TX</h4>
            <img src="https://cloud-6ef3v4tky-hack-club-bot.vercel.app/2image.png" alt="Oasis Event" />
          </div>
          <div className="event-item">
            <h4>Evergreen - Seattle, WA</h4>
            <img src="https://cloud-6ef3v4tky-hack-club-bot.vercel.app/4image.png" alt="Evergreen Event" />
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="get-involved-section">
        <h2 id="get-involved">How Can I Get Involved?</h2>
        <p id="sign-up">Sign up for Celestial <a href="https://airtable.com/app0mGghjGQerElZG/shryYMH5B8ISvbGPg">here</a> or join the organizing team by sending us a <a href="mailto:celestial.hackathon@gmail.com">message</a>.</p>
        <h2>Have another question?</h2>
        <p>Reach out to us! Our email is <a href="mailto:celestial.hackathon@gmail.com">celestial.hackathon@gmail.com</a>!</p>  
      </section>

      <div className="cursor-alien">👾</div>

      {/* Footer */}
      <footer>
        <p>made with</p>
        <div className="heart">
          <div className="beat"><p>💜</p></div>
          <div className="thump"><p>💜</p></div>
        </div> 
        <p>from hack club!</p>
      </footer>
    </div>
  );
};

export default CelestialHackathon;
