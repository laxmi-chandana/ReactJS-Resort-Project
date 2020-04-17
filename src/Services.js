import React from 'react'
import Title from './Title.js'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'

export default class Services extends React.Component{
state = {
    services: [
        {
            icon: <FaCocktail />,
            title : "Free Refreshments",
            info: "This is first services"
        },
        {
            icon: <FaHiking />,
            title : "Free Hiking",
            info: "This is first services"
        },
        {
            icon: <FaShuttleVan />,
            title : "Free Shuttle",
            info: "This is first services"
        },
        {
            icon: <FaBeer />,
            title : "Strongest Beer",
            info: "This is first services"
        },
    ]
} 
    render(){
        return(
            <section className = "services">
                <Title title = "Services" />
                <div className = "services-center">
                    {this.state.services.map(
                        (service,index) =>{
                        return(
                            <article key = {index} className = "service">
                            <span> {service.icon}</span>
                            <h6> {service.title}</h6>
                            <p> {service.info}</p>
                            </article>
                        )
                        })
                    }
                </div>
                
            </section>
        )
    }
}