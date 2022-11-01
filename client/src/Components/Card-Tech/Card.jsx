import React from 'react';
import card from './Card-item';

function Card() {
  return (
    <div className='card-group'>
      {
        card.map((item, index)=>{
          return (
            <div key={index} className='card'>
              <div className='card-head'>
                <img src={item.logo} alt="logo" className='card-img'/>
                <span className='card-title'>
                  {item.title}
                </span>
              </div>
              <p className='card-description'>
                {item.description}
              </p>
              <a href={item.link} className='card-link'>see more</a>
            </div>
          )
        })
      }
    </div>
  )
}

export default Card