import React from 'react';

function Skills() {
    return (
        <section className="#Skills">
            <h2>About Me</h2>
            <div className="skills-body">
                <div className="html-section">
                <h4>HTML</h4>
                <img src="html.png" alt="html" width={'200px'} />
                </div>
                <div className="css-section">
                    <h4>CSS</h4>
                    <img src="css.png" alt="css" width={'200px'} />
                    </div>
                    <div className="react-section"> 
                    <h4>REACT JAVASCRIPT</h4>  
                    <img src="react.png" alt="react.JS" width={'200px'} /> 
                    </div>
                    <div className="design-section"> 
                    <h4>UI/UX DESIGN</h4>  
                    <img src="ui-ux-design.png" alt="ui-ux-design" width={'200px'} /> 
                </div>
            </div>
        </section>
    );
}

export default Skills;