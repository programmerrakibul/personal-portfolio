import Navbar from "./components/Navbar/Navbar"
import { Outlet } from "react-router"

const Layout = () => {
    return (
        <>
            <header className="sticky top-0 z-50 backdrop-blur-xl">
                <Navbar />
            </header>
            <main>
                <Outlet/>
            </main>
        </>
    )
}

export default Layout