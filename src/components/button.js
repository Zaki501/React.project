import React from 'react'
import { Component } from 'react';
import '../components/button.css'

function Button() {
// const jumpDown = () => {}

const jumpDown = () => {
    console.log("button clicked");
}
    return (
        <div>
            <a className="myButton" onClick={jumpDown} href="#scrollTo"> Jump Down </a>
        </div>
    )

}
export default Button