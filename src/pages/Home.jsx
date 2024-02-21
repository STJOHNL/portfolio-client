import { Link } from "react-router-dom"
import LogoCarousel from "../components/LogoCarousel"
import loganLego from '../assets/images/loganLego.gif'
import ProjectCard from "../components/ProjectCard"
import FitFlow from '../assets/images/projects/FitFlow.png'
import groupRunApp from '../assets/images/projects/groupRunApp.png'
import myUncommonPlan from '../assets/images/projects/myUncommonPlan.png'

const Home = () => {

    return (
        <>
            <section className="hero-section">
                <div className="hero-title">
                    <h1>Logan St. John</h1>
                    <h2>Software Developer</h2>
                </div>
                <div className="hero-cta">
                    <div className="absolute-container">
                        <div className="hero-btn-container glass">
                            <Link
                                to="/about"
                                className="btn"
                            >About</Link>
                            <Link
                                to="/"
                                className="btn"
                            >Contact</Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="client-slider">
                <h3>I'm grateful to have worked with such clients</h3>
                <LogoCarousel />
            </section>
            <section className="portfolio-section">
                <div className="title-blurb">
                    <h3>My work</h3>
                    <p>Explore a selection of client and personal projects I've developed.</p>
                </div>
                <section className="portfolio-cards">
                    <ProjectCard
                        title={'Group Run App'}
                        image={groupRunApp}
                        description={'Web application built with Node.js and EJS to allow runners to check-in and accumalate points for showing up.'}
                    />
                    <ProjectCard
                        title={'myUncommonPlan'}
                        image={myUncommonPlan}
                        description={'Web application built with React and Node.js to create a personal development plan and keep the user accountable.'}
                    />
                    <ProjectCard
                        title={'FitFlow Check in'}
                        image={FitFlow}
                        description={'Web application built with React and Node.js to help to speed up the wait time and check-in process.'}
                    />
                </section>
                <Link
                    to='/projects'
                    className="btn"
                >View more projects</Link>
            </section>
            <section className="about-section">
                <img
                    src={loganLego}
                    alt="Logan with a Lego statue"
                />
                <div>
                    <h3>About</h3>
                    <p>Skilled Full Stack Developer with expertise in JavaScript, Node.js, MongoDB, and React, delivering dynamic web solutions that boost business growth.</p>
                    <Link
                        to='/about'
                        className="btn"
                    >Learn more</Link>
                </div>
            </section>
        </>
    )
}
export default Home