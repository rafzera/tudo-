import React, {Component} from 'react'
import Header from './../Components/Header'
import image from "./../Assets/Img/Ti.jpg"

export default class Home extends Component{

    render(){
        return(
            <div>
                <Header
                image={image}
                showButton={true}
                titulo="bem vindo"
                subtitulo="venha conhecer nossos projetos"
                link="/services"
                texto="saiba mais"
                />
             </div>
       
        )

    }

}