import { faBookBookmark, faCloud, faCompass, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Footer() {
  return (
    <footer className='footer' id='footer'>
        <div className='footer-body'>
            <div className='footer-aboutme'>
                <h3 className='footer-aboutme-name title'>Black_Genius</h3>
                <p className='footer-aboutme-description'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia molestias rerum quaerat quia, voluptate facilis fuga ea asperiores repudiandae incidunt!
                </p>
                <p className='footer-aboutme-description'>
                    Cotonou, Benin +22962614498
                </p>
            </div>
            <div className='footer-newsletter'>
                <div className='footer-newsletter-group'>
                    <label htmlFor="subscribe" className='footer-newsletter-group-label'>Subscribe</label>
                    <div className='footer-newsletter-group-input'>
                        <input type="email" className='input' placeholder='black_genius@gmail.com'/>
                        <a href="/" className='btn btn-newsletter'>Submit</a>
                    </div>
                </div>
                <div className='footer-newsletter-social'>
                    <ul className='footer-newsletter-social-list'>
                        <li className='footer-newsletter-social-list-item'>
                            <a href="/">
                                <FontAwesomeIcon icon={faCloud}/>
                            </a>
                        </li>
                        <li className='footer-newsletter-social-list-item'>
                            <a href="/">
                                <FontAwesomeIcon icon={faBookBookmark}/>
                            </a>
                        </li>
                        <li className='footer-newsletter-social-list-item'>
                            <a href="/">
                                <FontAwesomeIcon icon={faPaperPlane}/>
                            </a>
                        </li>
                        <li className='footer-newsletter-social-list-item'>
                            <a href="/">
                                <FontAwesomeIcon icon={faCompass}/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='footer-copyright'>
            <span className='footer-copyright-content'>
                Copyright black_genius@2022
            </span>
        </div>
    </footer>
  )
}

export default Footer