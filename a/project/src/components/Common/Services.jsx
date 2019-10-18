import React,{Component}  from 'react'
import SingleService from './SingleService'

const services = [
    { title: 'E-Commerce', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin porta lacus nibh, ac ultricies odio placerat a.',icon: 'fa-shopping-cart'},
    { title: 'Responsive', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin porta lacus nibh, ac ultricies odio placerat a.',icon: 'fa-laptop'},
    { title: 'Web Security', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin porta lacus nibh, ac ultricies odio placerat a.',icon: 'fa-lock'}
  ]
export default class Services extends Component{

    render(){
        return(
            
                <section class="page-section" id="services">
                    <div class="container">
                    <div class="row">
                        <div class="col-lg-12 text-center">
                        <h2 class="section-heading text-uppercase">Services</h2>
                        <h3 class="section-subheading text-muted">Lorem ipsulum </h3>
                        </div>
                    </div>
                    <div class="row text-center">
                        {services.map((service,index) =>{
                         return <SingleService {...service} key={index}/>
                        })}
                        
                    </div>
                    </div>
                </section>
           
        )
    }
}