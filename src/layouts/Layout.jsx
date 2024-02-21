import { Outlet } from "react-router-dom"
import { Toaster } from "react-hot-toast"
import Header from "../components/Header"
import Footer from '../components/Footer'

const Layout = () => {
    return (
        <>
            <Header />
            <main>
                <Toaster
                    position="bottom-right"
                    toastOptions={{ duration: 2000 }}
                />
                <Outlet />
                <Footer />
            </main>
        </>
    )
}
export default Layout