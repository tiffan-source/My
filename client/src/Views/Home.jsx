import React from 'react';
import Card from '../Components/Card-Tech/Card';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Navbar from '../Components/Navbar';
import Statproject from '../Components/Statproject';

const Home = () => {
    return (
        <div>
            <Header/>
            <div className='section-container-xp'>
                <Statproject/>
                <div className='section-problem'>
                    <span className='comment-span'>//Problem solve</span>
                    <h2 className='title'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </h2>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae expedita quo at itaque, alias error dolorem exercitationem enim voluptatibus deleniti aut autem, dolorum adipisci delectus.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex aperiam facilis natus nulla. Necessitatibus nostrum eos dolor odit illum repellendus reprehenderit? Placeat pariatur porro impedit voluptatibus ea tenetur assumenda neque. Harum ad ab nulla consectetur! Quo ducimus ratione nisi modi!
                    </p>
                    <a href="" className='btn btn-section'>Discover</a>
                </div>
            </div>

            <div className='section-container-xp'>
                <div className='section-problem section-problem-left'>
                    <span className='comment-span'>//Problem solve</span>
                    <h2 className='title'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </h2>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae expedita quo at itaque, alias error dolorem exercitationem enim voluptatibus deleniti aut autem, dolorum adipisci delectus.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex aperiam facilis natus nulla. Necessitatibus nostrum eos dolor odit illum repellendus reprehenderit? Placeat pariatur porro impedit voluptatibus ea tenetur assumenda neque. Harum ad ab nulla consectetur! Quo ducimus ratione nisi modi!
                    </p>
                    <a href="" className='btn btn-section'>Discover</a>
                </div>
                <Card/>
            </div>
        </div>
    );
}

export default Home;
