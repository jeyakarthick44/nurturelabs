import React from 'react'
import "../styles/sidebar.css"
import ellipse from "../images/Ellipse.png"


const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='heading'>
                <img src={ellipse} />
                <h6>N</h6>
            <h1>Name</h1>
            </div>
        </div>
    )
}

export default Sidebar;