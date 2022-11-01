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
                        <a href="/" className='btn btn-primary btn-newsletter'>Submit</a>
                    </div>
                </div>
                <div className='footer-newsletter-social'>
                    <ul className='footer-newsletter-social-list'>
                        <li className='footer-newsletter-social-list-item'>
                            <a href="https://dribbble.com/black_genius" target={"_blank"} rel="noreferrer">
                                <i className="fab fa-dribbble"></i>
                            </a>
                        </li>
                        <li className='footer-newsletter-social-list-item'>
                            <a href="https://www.linkedin.com/in/anlyou-zohoungbogbo/" target={"_blank"} rel="noreferrer">
                                <i className="fa-brands fa-linkedin-in"></i>
                            </a>
                        </li>
                        <li className='footer-newsletter-social-list-item'>
                            <a href="https://twitter.com/anlzyzou" target={"_blank"} rel="noreferrer">
                                <i className="fa-brands fa-twitter"></i>
                            </a>
                        </li>
                        <li className='footer-newsletter-social-list-item'>
                            <a href="https://web.facebook.com/anlyou.zohoungbogbo" target={"_blank"} rel="noreferrer">
                                <i className="fa-brands fa-facebook-f"></i>
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