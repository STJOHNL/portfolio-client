import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import logo1 from '../assets/images/logos/logo1.png'
import logo2 from '../assets/images/logos/logo2.png'
import logo3 from '../assets/images/logos/logo3.png'
import logo4 from '../assets/images/logos/logo4.png'
import logo5 from '../assets/images/logos/logo5.png'
import logo6 from '../assets/images/logos/logo6.png'
import logo7 from '../assets/images/logos/logo7.png'
import logo8 from '../assets/images/logos/logo8.png'
import logo9 from '../assets/images/logos/logo9.png'
import logo10 from '../assets/images/logos/logo10.png'

const logos = [
    { id: 1, src: logo1, alt: 'Point 2 Running Company' },
    { id: 2, src: logo2, alt: 'Lawtrades' },
    { id: 3, src: logo3, alt: 'Exchange Place' },
    { id: 4, src: logo4, alt: 'Skrimp Shack' },
    { id: 5, src: logo5, alt: 'MyUncommonPlan' },
    { id: 6, src: logo6, alt: 'Devtivity' },
    { id: 7, src: logo7, alt: 'Expert Money Finders' },
    { id: 8, src: logo8, alt: 'D & D Construction' },
    { id: 9, src: logo9, alt: 'The Humane Space' },
    { id: 10, src: logo10, alt: 'EzyRun' },
    // Add more logos here
]
const LogoCarousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true
    };
    return (
        <Slider {...settings}>
            {logos.map(logo => (
                <img
                    key={logo.id}
                    src={logo.src}
                    alt={logo.alt}
                    className="carousel-logo"
                />
            ))}
        </Slider>
    )
}


export default LogoCarousel
