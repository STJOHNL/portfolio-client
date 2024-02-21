import { useAuth } from '../context/AuthContext'
import { toast } from 'react-hot-toast'
import { useNavigate, NavLink, Link } from 'react-router-dom'
import logo from '../assets/images/mainLogo.svg'

const Header = () => {
    const navigate = useNavigate()
    const { user, logOut } = useAuth()

    // const logout = () => {
    //     logOut()
    //     toast.success('Logged out!')
    //     navigate('/')
    // }

    return (
        // <div>
        //     {user && <button onClick={() => logout()}>Log Out</button>}
        // </div>
        <header>
            <nav>
                <NavLink
                    to='/'
                    className={({ isActive }) => isActive ? 'active-link' : 'btn'}
                >Home</NavLink>
                <NavLink
                    to='/about'
                    className={({ isActive }) => isActive ? 'active-link' : 'btn'}
                >About</NavLink>
                <Link
                    to='/'
                    className="header-logo">
                    <img src={logo} alt="Logan St. John" />
                </Link>
                <NavLink
                    to='/projects'
                    className={({ isActive }) => isActive ? 'active-link' : 'btn'}
                >Projects</NavLink>
                <NavLink
                    to='/contact'
                    className={({ isActive }) => isActive ? 'active-link' : 'btn'}
                >Contact</NavLink>
            </nav>
        </header>
    )
}
export default Header