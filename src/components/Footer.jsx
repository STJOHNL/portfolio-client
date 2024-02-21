import { useState } from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn, faUpwork } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { useContact } from '../hooks/useContact'

const Footer = () => {
    const [formData, setFormData] = useState({
        email: '',
        fName: '',
        lName: '',
        message: '',
    })
    const { createContact } = useContact()

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        })
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        createContact(formData)
        setFormData({
            email: '',
            fName: '',
            lName: '',
            message: '',
        })
    }

    return (
        <footer id="contact">
            <div>
                <div className="footer-links">
                    <h3>Get in touch</h3>
                    <Link
                        to='mailto:logan@devtivity.com'
                    // target="_blank"
                    >
                        <FontAwesomeIcon icon={faEnvelope} className="icon" />
                    </Link>
                    <Link
                        to='https://www.linkedin.com/in/logan-st-john-665709200/'
                        target="_blank"
                    >
                        <FontAwesomeIcon icon={faLinkedinIn} className="icon" />
                    </Link>
                    <Link
                        to='https://www.upwork.com/freelancers/~01c2c84dcf07138a17'
                        target="_blank"
                    >
                        <FontAwesomeIcon icon={faUpwork} className="icon" />
                    </Link>
                    <Link
                        to='https://github.com/STJOHNL'
                        target="_blank"
                    >
                        <FontAwesomeIcon icon={faGithub} className="icon" />
                    </Link>
                </div>
            </div>

            <form
                onSubmit={onSubmit}
            >
                <div className="left-form">
                    <div className="spread">
                        <label htmlFor='email'>Email</label>
                        <input
                            type="email"
                            name='email'
                            onChange={handleChange}
                            value={formData.email}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor='fName'>First</label>
                        <input
                            type="text"
                            name='fName'
                            onChange={handleChange}
                            value={formData.fName}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor='lName'>Last</label>
                        <input
                            type="text"
                            name='lName'
                            onChange={handleChange}
                            value={formData.lName}
                            required
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor='message'>Message</label>
                    <textarea
                        name='message'
                        onChange={handleChange}
                        value={formData.message}
                        required></textarea>
                </div>
                <button className='btn'>Send Message</button>
            </form>
        </footer>
    )
}

export default Footer