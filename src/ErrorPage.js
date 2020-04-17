import React from'react'
import Hero from './Hero.js'
import Banner from './Banner.js'
import { Link } from 'react-router-dom'


export default function ErrorPage() {
    return (
        < Hero >
            <Banner title = " 401 Error" subtitle = "Page Not Found ">
                <Link to = "/" className = " btn-primary">
                    Return Home
                </Link>
            </Banner>
        </Hero>
        
    )
}