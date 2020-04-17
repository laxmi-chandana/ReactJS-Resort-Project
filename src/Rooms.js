import React from 'react'
import Hero from './Hero.js'
import Banner from './Banner.js'
import { Link } from 'react-router-dom'
import RoomContainer from './RoomContainer.js'

export default function Rooms() {
    return (
        <>
            <Hero hero = "roomsHero">
                <Banner title = " Our rooms ">
                        <Link to = "/" className = " btn-primary">
                            Return Home
                        </Link>
                </Banner>
            </Hero>
            <RoomContainer/>
        </>
    )
}