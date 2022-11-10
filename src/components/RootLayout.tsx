import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import classes from './RootLayout.module.css'

const RootLayout : React.FC = () => {
    return (
        <>
        <div className="header">
            <Navbar />
        </div>
        <div className={classes.main}><Outlet /></div>
        </>
    )
}

export default RootLayout