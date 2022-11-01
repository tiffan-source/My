import React, {useState, useEffect} from 'react'
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';
function Navbar() {

    const [link_active, set_link_active] = useState(0);
    const [nav_active, set_nav_active] = useState(false);
    const [logo, set_logo] = useState("");
    const [nav_class_list, set_nav_class_list] = useState("navbar-list-item")
    let location = useLocation();

    useEffect(() => {
        set_nav_class_list(
            location.pathname === "/" ? "navbar-list-h-item" : "navbar-list-item"
        )

        set_logo(
            location.pathname === "/" ? "" : "navbar-logo-extra"
        )

        switch(location.pathname){
            case "/":
                set_link_active(0);
                break;

            case "/work":
                set_link_active(1);
                break;

            case "/article":
                set_link_active(2);
                break;

            case "/contact":
                set_link_active(3);
                break;

            default:
                set_link_active(0)
                break;
        }
    }, [location]);

    return (

        <nav id="navbar" className="navbar">
            <ul className={"navbar-list "+(!nav_active ? "navbar-list-hidden" : "")}>
                <li className={nav_class_list +(link_active === 0 ? " "+nav_class_list+"-active" : "")} >
                    <Link to={""} className='navbar-list-item-link' onClick={()=>{ set_link_active(0) }}>Home<span className='navbar-list-symbole color'>.</span></Link>
                </li>
                <li className={nav_class_list +(link_active === 1 ? " "+nav_class_list+"-active" : "")} >
                    <Link to={"work"} className='navbar-list-item-link' onClick={()=>{ set_link_active(1) }}>Works<span className='navbar-list-symbole color'>.</span></Link>
                </li>
                <li className={nav_class_list +(link_active === 2 ? " "+nav_class_list+"-active" : "")} >
                    <Link to={"article"} className='navbar-list-item-link' onClick={()=>{ set_link_active(2) }}>Articles<span className='navbar-list-symbole color'>.</span></Link>
                </li>
                <li className={nav_class_list +(link_active === 3 ? " "+nav_class_list+"-active" : "")} >
                    <Link to={"contact"} className='navbar-list-item-link' onClick={()=>{ set_link_active(3) }}>Contacts<span className='navbar-list-symbole color'>.</span></Link>
                </li>
            </ul>

            <span className={'navbar-logo ' + logo }>
                <Link to={""} className='navbar-logo-link'>
                    Black<span className='navbar-logo-symbole'>_</span>genius
                </Link>
            </span>

            <span className='navbar-handleButton' onClick={()=>{set_nav_active(!nav_active)}}>
                {
                    ! nav_active ?
                    <FontAwesomeIcon icon={faBars}/>
                    :
                    <FontAwesomeIcon icon={faXmark}/>
                }
            </span>
        </nav>
    )
}

export default Navbar;