import React from 'react';

function Home() {
    return (
        <section className="#Home">
            <div className="home-content">
                <div className="left">
                    <h3>Hi! There I'm</h3>
                    <h1>Alyanna Nicole C. Pelaez</h1>
                <p>
                        2nd year student in Information Technology at <br/>
                        Western Institute of Technology
                    </p>
                    <button className="contact-button">
                        <a href="#Contact">Contact Me</a>
                    </button>
                </div>
            <div className="right"></div>
               <img src="alyanna-about.jpg" alt="Alyanna" width='400px'/>
            </div>
    </section>
    );
}

export default Home;
