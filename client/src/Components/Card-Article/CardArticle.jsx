import React from 'react'

function CardArticle(props) {
  const {title, pubDate, link, thumbnail, description, categories} = props.data;
  console.log(props.data);
  return (
    <div className='card-article'>
      <div className='card-article-illustration'>
        <img src={thumbnail} alt="image"/>
      </div>
      <div className='card-article-body'>
        <span className='card-article-body-meta'>
          <span className='card-article-body-meta-when'>{pubDate} </span>
          | 
          {categories.join("-")}
        </span>
        <h2 className='card-article-body-title'>{title}</h2>
        <p className='card-article-body-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis a illum nam nulla molestias distinctio, deleniti perferendis quaerat at dolorem. Facilis totam quibusdam aperiam veniam qui dolorum? Voluptate, modi ad?</p>
        <a href={link} className='btn'>Read</a>
      </div>
    </div>
  )
}

export default CardArticle