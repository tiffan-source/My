import React, {useState} from 'react'
import Statproject from '../Components/Statproject'
import airbnb from "../img/Airbnb.svg";
import list_work from "../Components/Portfolio/PortfolioItem";
import CardPortfolio from '../Components/Portfolio/CardPortfolio';

function Work() {
    const [categorie, setCategorie] = useState("All");
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
                <a href="#portfolio" className='btn btn-primary     btn-section'>Discover</a>
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
            <ul className='work-portfolio-list-categorie'>
                <li>
                    <a href="/" className={'btn btn-'+(categorie === "All" ? "primary" : "secondary")} onClick={(e)=>{
                        e.preventDefault();
                        setCategorie("All")
                    }}>All</a>
                </li>
                <li>
                    <a href="/" className={'btn btn-'+(categorie === "Web Dev" ? "primary" : "secondary")} onClick={(e)=>{
                        e.preventDefault();
                        setCategorie("Web Dev");
                    }}>Web Developpement</a>
                </li>
                <li>
                    <a href="/" className={'btn btn-'+(categorie === "UI/UX" ? "primary" : "secondary")} onClick={(e)=>{
                        e.preventDefault();
                        setCategorie("UI/UX");
                    }}>UI/UX Design Illustration</a>
                </li>
                <li>
                  <a href="/" className={'btn btn-'+(categorie === "Other" ? "primary" : "secondary")} onClick={(e)=>{
                    e.preventDefault();
                    setCategorie("Other");
                  }}>Other</a>
                </li>
            </ul>
            <ul className='work-portfolio-list'>
                {
                    list_work.map((item, key)=>{
                        if (categorie === "All" || item.categorie === categorie)
                            return (
                                <CardPortfolio data={item} key={key}/>
                            )

                            return ""
                    })
                }
            </ul>
        </section>
    </main>
  )
}

export default Work