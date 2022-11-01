import React from 'react'
import Statproject from '../Components/Statproject'
// Exemple
import airbnb from "../img/Airbnb.svg";
// Exemple

function Work() {
  return (
    <main id='work' className='work'>
        <section className="work-head">
            <Statproject/>
            <div className='work-head-aside'>
                <span className='comment-span'>{"//Problem solve"}</span>
                <h2 className='title'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h2>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae expedita quo at itaque, alias error dolorem exercitationem enim voluptatibus deleniti aut autem, dolorum adipisci delectus.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex aperiam facilis natus nulla. Necessitatibus nostrum eos dolor odit illum repellendus reprehenderit? Placeat pariatur porro impedit voluptatibus ea tenetur assumenda neque. Harum ad ab nulla consectetur! Quo ducimus ratione nisi modi!
                </p>
                <a href="#portfolio" className='btn btn-section'>Discover</a>
            </div>
        </section>
        <section className='work-current'>
            <h2 className='work-current-title title'>Currntly Work <span className='color'>on</span></h2>
            <div className='work-current-group'>
                <div className='work-current-group-illustration'>
                    <img className='work-current-group-illustration-img' src={airbnb} alt="" />
                </div>
                <div className='work-current-group-description'>
                    <h3 className='work-current-group-description-title'>AirBnB Clone</h3>
                    <p className='work-current-group-description-p'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam hic architecto modi, commodi itaque dolorem voluptas culpa dolorum vero nulla?
                        <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam hic architecto modi, commodi itaque dolorem voluptas culpa dolorum vero nulla?
                    </p>
                    <a href="https://github.com/tiffan-source/AirBnB_clone" className='link'>github@link-project.com</a>
                </div>
            </div>
        </section>
        <section id='portfolio'>
            <h2 className='work-portfolio-title title'>Port<span className='color'>folio</span></h2>
            <ul>

            </ul>
        </section>
    </main>
  )
}

export default Work