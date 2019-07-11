import React from 'react';
import avatar from '../assets/img/avatar.jpeg';


const About = () => {
    return (
        <div className="body-container">
            <div className="body-container-transparent">
            </div>
            <div className="body-avatar">
                <img src={avatar}  alt="avatar" />
                </div>
                <div className="body-container-content">
                    <h3>
                        Lê Quang Sang
                    </h3>
                    <p className="body-content">
                        I’m passion about technologies, and one most of aspects is problem-solving. I love learning new things and facing interesting challenges.
                    </p>
                    <div className="body-social">
                        <a href="https://www.linkedin.com/in/shekcon/" rel="noopener noreferrer" target="_blank">
                            <i class="fab fa-linkedin social-linkedin" aria-hidden="true"></i>
                        </a>
                        <a href="https://github.com/shekcon" rel="noopener noreferrer" target="_blank">
                            <i class="fab fa-github social-github" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            
        </div>
    );
}

export default About;