import React, {Component} from 'react';
import Header from './../Common/Header'
import {image} from "../../"

export default class Home extends Component{



    render(){
        return (
            <div>     
                <Header title="Welcome to Our Studio"
                        subtitle="IT'S NICE TO MEE YOU"
                        buttonText="diga mais"
                        link="/services"
                        showButton={true}
                        image="/img/header-bg.jpg" /> 
            </div>
        )
    }
}