import italyLogan from '../assets/images/italyLogan.png'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <>

            <section className='about-hero'>
                <h1>About</h1>
                <img
                    src={italyLogan}
                    alt="Logan" />
                <div>
                    <p>Hello there! I'm a passionate Web Developer with a journey that kicked off in the unexpected year of 2020. Amidst the challenges brought on by the global pandemic, I found my calling when I stepped up to launch and maintain an e-commerce store for a small business that was grappling with the abrupt closure of physical stores. This experience was not just a response to a crisis; it ignited a profound interest in web development, leading me to dive deep into the tech world.</p>
                    <br />
                    <p>Since then, I've been immersed in crafting dynamic and user-friendly websites and applications, leveraging a diverse set of technologies including React, Node.js, HTML, CSS, and JavaScript, among other cutting-edge frameworks and tools. My approach is always centered around creating seamless, engaging experiences for users, while pushing the boundaries of what's possible on the web.</p>
                    <br />
                    <p>My journey from stepping in to support a small business during a critical time to becoming a tech enthusiast showcases my adaptability, continuous learning mindset, and dedication to excellence in the web development space. I'm excited to bring my blend of creativity, technical skill, and problem-solving abilities to new projects, aiming to make a meaningful impact through my work.</p>
                    <br />
                    <p>Let's create something amazing together.</p>
                    <div className='about-btn-container'>
                        <Link
                            className='btn'
                        >Get In Touch</Link>
                        <Link
                            className='btn'
                        >View My Work</Link>
                    </div>
                </div>
                <section>
                    <h3>Work Experience</h3>
                    <div className='info-card'>
                        <h5>Point 2 Running Company</h5>
                        <p>Sept 2019 - Present</p>
                        <p>E-commerce Manager and Buyer</p>
                    </div>
                    <div className='info-card'>
                        <h5>Devtivity</h5>
                        <p>Aug 2021 - Present</p>
                        <p>Software Developer</p>
                    </div>
                </section>
                <section>
                    <h3>Skills</h3>
                    <div className='skills-container'>
                        <span>React</span>
                        <span>Node.js</span>
                        <span>Express.js</span>
                        <span>Javascript</span>
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>MongoDB</span>
                        <span>Wordpress</span>
                        <span>Elementor</span>
                        <span>Divi</span>
                        <span>Blueshift</span>
                        <span>Zaius</span>
                        <span>Hubspot</span>
                        <span>Mailchimp</span>
                        <span>Figma</span>
                        <span>Canva</span>
                        <span>Google Suite</span>
                        <span>Jotform</span>
                    </div>
                </section>
                <section>
                    <h3>Education</h3>
                    <div className='info-card'>
                        <h5>Tidewater Community College</h5>
                        <p>2024 - Present</p>
                        <p>Associate of Science - Computer Science</p>
                        <p>Anticipated Graduation: May 2025</p>
                    </div>
                    <div className='info-card'>
                        <h5>Embry-Riddle Aeronautical University</h5>
                        <p>2012 - 2014</p>
                        <p>Private Pilot License</p>
                    </div>
                </section>

            </section>
        </>
    )
}
export default About
