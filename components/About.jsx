import React from 'react';

function About() {
    return (
        <section className="#About">
            <div className="about-content">
                <div className="about-left">
                    <img src="alyanna-about.jpg" alt="Alyanna" width={'350px'} />
                </div>
                <div className="about-right">
                    <h2>About Me</h2>
                    <p>
                        Welcome to My Tech Journey! 🌟<br />
                        I’m [Your Name], an enthusiastic IT student dedicated to mastering the art of technology.<br />
                        With a strong passion for coding and problem-solving, I thrive on challenges that push the boundaries of innovation.<br />
                        Here, I share my insights, projects, and experiences as I navigate the dynamic world of software development and IT.<br />
                        Join me as I explore emerging technologies, collaborate on exciting projects, and transform ideas into impactful solutions.<br />
                        Together, let’s embrace the tech revolution and build a brighter digital future!
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;