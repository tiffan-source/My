import React from 'react'

function CardPortfolio({data}){
  return (
    <div className='card-portfolio'>
        <div className='card-portfolio-head'>
            <img className='card-portfolio-head-img' src={data.picture} alt="logo project" />
            <h3 className='title card-portfolio-head-title'>{data.title}</h3>
        </div>
        <div className='card-portfolio-body'>
            <p className='card-portfolio-body-content'>
                {data.description}
            </p>
        </div>
        <div className='card-portfolio-foot'>
            <a className='link' href={data.link}>linktoproject</a>
        </div>
    </div>
  )
}

export default CardPortfolio