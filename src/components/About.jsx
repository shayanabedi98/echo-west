import React from 'react'
import goldenGate from '../assets/golden-gate-tae-fuller.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
        <img src={goldenGate} alt="Picture of the Golden Gate bridge in San Francisco, taken by Tae Fuller" />
        <div className='about-text'>
            <h2>About Us</h2>
            <p>Echo West embodies the spirit of California's audio scene. Founded in 2019 by Shayan Abedi, we offer a curated selection of headphones and wireless earbuds designed for the discerning listener. Our mission is simple: to provide a soundscape as dynamic as the West Coast itself, blending superior sound quality with unparalleled comfort. Experience the Echo West difference, where every product is a passport to sonic excellence.</p>
        </div>
    </div>
  )
}

export default About