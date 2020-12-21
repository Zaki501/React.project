import React from 'react'
import image1 from '../background2.jpg'
import image2 from '../background3.jpg'
import Button from './button.js'
import '../components/button.css'
import Calculator from './calculator.js'
import InteractiveCalculator from './InteractiveCalc'

import styled from 'styled-components'


class Section extends React.Component {
    render() {
        return(
            <div>
            <section className="section-container">

                    <h1 className="section_header section">
                        Welcome message.
                    </h1>
                

            </section>     
             
            <section className="section-container">
                <div className="section section_button">
                    <Button />
                </div>
            </section>   
               
            
            
            <section className="section-container"> 
               
                <div className="section background-color">
                    <a href="#1"><img src={image1} alt="BG1" className="section_image"></img></a>
                </div>

                <div className="section background-color">
                    <a href="#1"><img src={image2} alt="BG2" className="section_image"></img></a>
                </div>

            </section>
            <section className="section-container">
                <div className="section section-test" id="scrollTo">
                    <Calculator />
                    
                </div>
                <div className="section">
                    <InteractiveCalculator />

                </div>
            </section>
            </div>
        )
    }
}
export default Section