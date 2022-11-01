import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../Components/Card-Tech/Card';
import Header from '../Components/Header';
// import Process from '../Components/Process';
import axios from 'axios';
import Statproject from '../Components/Statproject';
import { Component } from 'react';
import HomeArticle from '../Components/HomeArtilce';

class Home extends Component
{
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

    render(){
        return (
            <div>
                <Header/>
                <div id='homesection' className='section-container-xp'>
                    <Statproject/>
                    <div className='section-problem'>
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
                        <Link to={"work#"} className='btn btn-primary btn-section'>Discover</Link>
                    </div>
                </div>
    
                <div className='section-container-competence'>
                    <div className='section-problem section-problem-left'>
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
                    </div>
                    <Card/>
                </div>

                {/* <div>
                    <Process/>
                </div> */}

                <div className='section-container-article'>
                    <HomeArticle data={this.state.data}/>
                </div>
            </div>
        );

    }
}

export default Home;
