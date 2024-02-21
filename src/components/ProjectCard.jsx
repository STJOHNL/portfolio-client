const ProjectCard = ({ title, image, description }) => {
    return (
        <div className="portfolio-card">
            <h5>{title}</h5>
            <img src={image} alt={title} />
            <p>Sole Developer</p>
            <p>{description}</p>
        </div>
    )
}
export default ProjectCard