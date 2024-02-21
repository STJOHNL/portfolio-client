import ambassadorHub from '../assets/images/projects/ambassadorHub.png'
import cwpos from '../assets/images/projects/cwpos.png'
import devtivity from '../assets/images/projects/devtivity.png'
import exchangePlace from '../assets/images/projects/exchangePlace.png'
import expertMoneyFinders from '../assets/images/projects/expertMoneyFinders.png'
import FitFlow from '../assets/images/projects/FitFlow.png'
import groupRunApp from '../assets/images/projects/groupRunApp.png'
import hrbor from '../assets/images/projects/hrbor.png'
import myUncommonPlan from '../assets/images/projects/myUncommonPlan.png'
import pointTwo from '../assets/images/projects/pointTwo.png'
import psfGatherings from '../assets/images/projects/psfGatherings.png'
import ProjectCard from '../components/ProjectCard'

const Projects = () => {
    return (
        <div className='projects-page'>
            <h1>Projects</h1>
            <div className='projects-container'>
                <ProjectCard
                    title={'Ambassador Hub'}
                    image={ambassadorHub}
                    description={'Web application built with Node.js and EJS to help organize ambassadors and provide them with benefits.'}
                />
                <ProjectCard
                    title={'Point of Sale'}
                    image={cwpos}
                    description={'Web application built with React and Node.js allow employees to easily create invoices.'}
                />
                <ProjectCard
                    title={'Devtivity'}
                    image={devtivity}
                    description={'Website built on Wordpress with Elementor for a software development company.'}
                />
                <ProjectCard
                    title={'Exchange Place'}
                    image={exchangePlace}
                    description={'Website built on Wordpress with Elementor for a commercial real estate company.'}
                />
                <ProjectCard
                    title={'Expert Money Finders'}
                    image={expertMoneyFinders}
                    description={'Website built on Wordpress with Elementor for an asset recovery business.'}
                />
                <ProjectCard
                    title={'FitFlow Check in'}
                    image={FitFlow}
                    description={'Web application built with React and Node.js to help to speed up the wait time and check-in process.'}
                />
                <ProjectCard
                    title={'Group Run App'}
                    image={groupRunApp}
                    description={'Web application built with Node.js and EJS to allow runners to check-in and accumalate points for showing up.'}
                />
                <ProjectCard
                    title={'HRBOR'}
                    image={hrbor}
                    description={'Website built on Wordpress with Elementor for a chamber of commerce.'}
                />
                <ProjectCard
                    title={'myUncommonPlan'}
                    image={myUncommonPlan}
                    description={'Web application built with React and Node.js to create a personal development plan and keep the user accountable.'}
                />
                <ProjectCard
                    title={'Point 2 Running Company'}
                    image={pointTwo}
                    description={'Website built on Wordpress with Elementor for a run specialty store.'}
                />
                <ProjectCard
                    title={'PSF Gatherings'}
                    image={psfGatherings}
                    description={'Website built on Wordpress with Elementor for a weekend event.'}
                />
            </div>
        </div>
    )
}
export default Projects