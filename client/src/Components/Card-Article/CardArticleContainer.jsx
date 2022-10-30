import React, { Component } from 'react';
import CardArticle from './CardArticle';
import axios from 'axios';

class CardArticleContainer extends Component {

    constructor(props){
        super(props);
        
        this.state = {
            data : []
        }
    }

    componentDidMount(){
        axios.get("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40visi-plus").then(response=>{
        this.setState({
            data : response.data.items
        })
        });
    }


    render() {
        return (
            <>
            {
                this.state.data.map((dataitem, index)=>{
                    return (
                        <CardArticle data={dataitem} key={index}/>
                    )
                })
            }
            </>
        );
    }
}

export default CardArticleContainer;
