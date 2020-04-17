import React from 'react'
import Hero from './Hero.js'
import Banner from './Banner.js'
import { Link } from 'react-router-dom'
import Services from './Services.js'
import FeaturedRooms from './FeaturedRooms.js'

export default function Home (){
    return (
    <>
        <Hero>
            <Banner title = " Luxirous" subtitle = "This is defintly">
                <Link to = "/rooms" className = " btn-primary">
                    Return Home
                </Link>
            </Banner>
        </Hero>
        <Services />
        <FeaturedRooms/>
    </>
    )

}