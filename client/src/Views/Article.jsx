import React from 'react';
import CardArticleContainer from '../Components/Card-Article/CardArticleContainer';
import illus from '../img/articleIllustration.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDownLong } from '@fortawesome/free-solid-svg-icons';

function Article() {
  return (
    <main id='article' className='article'>
        <header className='article-header'>
            <div className='article-header-description'>
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
            </div>
            <div className='article-header-illustration'>
                <img className='article-header-illustration-img' src={illus} alt="artilce illustration"/>
            </div>
        </header>
        <div className='article-button-godown'>
            <a href="#" className='btn-godown'>
                <FontAwesomeIcon icon={faArrowDownLong  }/>
            </a>
        </div>
        <section>
            <div>
                <CardArticleContainer/>
            </div>
        </section>
    </main>
  )
}

export default Article