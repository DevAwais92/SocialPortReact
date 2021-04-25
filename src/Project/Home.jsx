import React from 'react'
import Common from './Common'
import home from './img/home.jpg'
import '.././index.scss'

const Home = () => {
    return (
        <div>
            <Common
            name="Grow your business Online with"
            imgsrc={home}
            route="/services"
            btname="Get Started"
             />
        </div>
    )
}
export default Home
