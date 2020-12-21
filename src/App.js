import React from 'react'
import InteractiveCalculator from './components/InteractiveCalc'
import Calculator from './components/calculator'

/*
import './App.css'
import Navbar from './components/navbar.js'
import './components/navbar.css'
import Footer from './components/footer.js'
import './components/footer.css'
import Section from './components/section.js'
import './components/section.css'

//import styled from 'styled-components'
*/
/*
    <body>
        <Navbar />

        <main>
          <Section />
  


        </main>

        
      </body>
      

*/



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  render() {
    return (
      <Calculator />
  
    )
  }

}
export default App;
