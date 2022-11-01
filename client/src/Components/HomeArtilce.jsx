import React from 'react'

function HomeArticle(props) {
  return (
    <ul className='container-article-list'>
    {
        props.data.map((dataitem, index)=>{
            if (index === 0)
                return (
                    <li key={index} className='container-article-list-head'>
                        <h2 className='title'>Recenly add on <span className='color'>Medium</span></h2>
                        <img className='container-article-list-head-img' src={dataitem.thumbnail} alt="" />
                        <a href={dataitem.link}>
                            <span className='container-article-list-head-title'>{dataitem.title}</span>
                        </a>
                    </li>
                )
            else if (index > 0 && index < 5)
                return (
                    <li key={index} className={"container-article-list-body"+index}>
                        <a href={dataitem.link}>
                            <span className='container-article-list-body-title'>{dataitem.title}</span>
                        </a>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis cupiditate distinctio tempore, alias modi!</p>
                    </li>
                )
            else
                return ""
        })
    }
    </ul>
  )
}

export default HomeArticle