import React, {useState} from 'react'
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Navbar() {

    const [link_active, set_link_active] = useState(0);

    return (
        <nav id="navbar" className="navbar">
            <ul className="navbar-list">
                <li className={"navbar-list-item "+(link_active == 0 ? "navbar-list-item-active" : "")} >
                    <a href="#" className='navbar-list-item-link' onClick={()=>{ set_link_active(0) }}>Home<span className='navbar-list-symbole'>.</span></a>
                </li>
                <li className={"navbar-list-item "+(link_active == 1 ? "navbar-list-item-active" : "")} >
                    <a href="#" className='navbar-list-item-link' onClick={()=>{ set_link_active(1) }}>Works<span className='navbar-list-symbole'>.</span></a>
                </li>
                <li className={"navbar-list-item "+(link_active == 2 ? "navbar-list-item-active" : "")} >
                    <a href="#" className='navbar-list-item-link' onClick={()=>{ set_link_active(2) }}>Articles<span className='navbar-list-symbole'>.</span></a>
                </li>
                <li className={"navbar-list-item "+(link_active == 3 ? "navbar-list-item-active" : "")} >
                    <a href="#" className='navbar-list-item-link' onClick={()=>{ set_link_active(3) }}>Contacts<span className='navbar-list-symbole'>.</span></a>
                </li>
            </ul>

            <span className='navbar-logo'>
                <a href="#" className='navbar-logo-link'>
                    Black<span className='navbar-logo-symbole'>_</span>genius
                </a>
            </span>

            <span className='navbar-handleButton'>
                <FontAwesomeIcon icon={faBars}/>
            </span>
        </nav>
    )
}

export default Navbar;