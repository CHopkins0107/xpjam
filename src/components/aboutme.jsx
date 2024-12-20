import React from "react";
import ReactDOM from "react-dom";
import "xp.css/dist/XP.css";


const AboutMe = () => {
    return (
        <div className="window" style={{ width: "700px"}}>
            <div className="title-bar">
                <div className="title-bar-text">About Me</div>
                <div className="title-bar-controls">
                    <button aria-label="Close"></button>
                </div>
            </div>
            <div className="window-body" style={{
                padding: '10px',
                fontSize: '16px'
            }}>
                <h4>Hello there!</h4><br></br>
                <p>My name is Jamel, and I am entry level Full Stack developer with a background in STEM education, leadership, and communication.
                </p><br></br>
                <p>My previous work includes teaching coding to kids K-12, coaching high schoolers in Competitive Esports, and leading staff across a variety of upper management positions. I love creating environments where creativity, learning, and productivity thrive.</p><br></br>
                <p>I have a strong background with Python thanks to my speciallization in Machine Learning, and I am currently expanding my front end skills with React. In my free time, I explore Game Development with Unity, Unreal Engine and Godot.</p><br></br>
                <p>I am always looking to work outside my comfort zone and learn new technologies. Thank you for visiting!</p>
            </div>
        </div>
        
    );
}

export default AboutMe;