import React, {Component} from 'react';
import Header from './../Common/Header'
import image from "../../Assets/Img/Ti.jpg"

import Services from '../Common/Services'

export default class Home extends Component{



    render(){
        return (
            <div>     
                <Header title="Welcome to Our Studio"
                        subtitle="it's nice to meet you"
                        buttonText="diga mais"
                        link="/services"
                        showButton={true}
                        image={image}/>
                <Services/>         
            </div>
        )
    }
}