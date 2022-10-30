import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDownLong } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <header id="header" className='header'>
        <h1 className='header-title'>
            Tiffane Anlyou
        </h1>

        <div className='header-illustration'>
            <img src="" alt="" className='header-illustration-img'/>
        </div>

        <div className='header-information'>
            <span className='comment-span' >
                //Who I am ?
            </span>
            <h2 className='header-information-activity'>
                Software Engineer And Blogger
            </h2>
            <p className='header-information-p'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, nesciunt!
            </p>
            <a href="#" className='btn-godown'>
                <FontAwesomeIcon icon={faArrowDownLong}/>
            </a>
        </div>
    </header>
)
}

export default Header