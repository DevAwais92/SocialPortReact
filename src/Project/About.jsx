import React from 'react'
import Common from './Common'
import about from './img/about.jpg'

const About = () => {
    return (
        <div>
            <Common
                name="Welcome to our About Page with"
                imgsrc={about}
                route="/contact"
                btname="Contact us"
            />
        </div>
    )
}

export default About
