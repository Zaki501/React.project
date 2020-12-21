import React from 'react'
import './InteractiveCalc.css'
import { evaluate } from 'mathjs'


//children
function KeyPad(props) {
    return(
        <styled_Keypad>
            <Key value="1" changeValue={props.changeValue}/>
            <Key value="2" changeValue={props.changeValue}/>
            <Key value="3" changeValue={props.changeValue}/>
            <Key value="4" changeValue={props.changeValue}/>
            <Key value="5" changeValue={props.changeValue}/>
            <Key value="6" changeValue={props.changeValue}/>
            <Key value="7" changeValue={props.changeValue}/>
            <Key value="8" changeValue={props.changeValue}/>
            <Key value="9" changeValue={props.changeValue}/>
            <Key value="0" changeValue={props.changeValue}/>
            <Key value="." changeValue={props.changeValue} />
        </styled_Keypad>
    )
}
function Operators(props) {
    return(
        <div className="operator">
            <Key value="+" changeValue={props.changeValue} />
            <Key value="-" changeValue={props.changeValue} />
            <Key value="*" changeValue={props.changeValue} />
            <Key value="/" changeValue={props.changeValue} />
            
            
        </div>
    )
}
function ActionKeys(props) {
    return(
        <div>
            <button className="button" value="=" onClick={props.evaluateExpression}>=</button>
            <button className="button" onClick={props.delInput}>Del</button>
            <button className="button" onClick={props.resetInput}>AC</button>
            <button className="button" onClick={props.getPreviousValue}>Ans</button>
        </div>
    )
}

function Inputs(props) {
    
    return(
        <div className="inputDisplay">
           <input value={props.inputDisplay}/>
           <input value={props.currentValue}/>
        </div>
    )
}

//grandchild
function Key(props) {
    return(
        <button className="button" value={props.value} onClick={props.changeValue}>{props.value}</button>
    )
}

class InteractiveCalculator extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            currentValue:[],
            submitted:[],
            answer: [],
            toggleDisplay: " "
        };
        this.resetInput = this.resetInput.bind(this)
        this.changeValue = this.changeValue.bind(this)
        this.evaluateExpression = this.evaluateExpression.bind(this)
        this.delInput = this.delInput.bind(this)
        this.getPreviousValue = this.getPreviousValue.bind(this)
    }

    resetInput() {
        this.setState({
            currentValue:[],
            submitted:[],
            answer: [],
            toggleDisplay: " "
        })
    }
    delInput() {
        this.setState({
            currentValue: this.state.currentValue.slice(0, -1)
        })
    }
    changeValue(event) {   
        this.setState({
            currentValue: [... this.state.currentValue, event.target.value].join(""),
            toggleDisplay: false
        }) 
    }
    getPreviousValue() {
        this.setState({
            currentValue: [...this.state.currentValue, this.state.answer.slice(-1)].join("")
        })
    }
    evaluateExpression() {
        const inputValue = this.state.currentValue;
        const evaluatedInputValue = JSON.stringify(evaluate(inputValue))

        this.setState({
            currentValue: evaluatedInputValue,
            submitted: [...this.state.submitted, inputValue],
            answer: [...this.state.answer, evaluatedInputValue],
            toggleDisplay: true

        })
        

    }

    render() {
        //gets last entry of state array

        const currentValue = this.state.currentValue;
        const previousAnswer = this.state.answer.slice(-1)
        const previousSubmission = this.state.submitted.slice(-1);

        const toggleDisplay = this.state.toggleDisplay;
        let inputDisplay;

        if (typeof(toggleDisplay) === "string") {
            inputDisplay = " ";
        } else
        if (toggleDisplay === true) {
            inputDisplay = `${previousSubmission} = ${previousAnswer}`;
        } else 
        if (toggleDisplay === false && this.state.answer.length > 0) {
            inputDisplay = `Ans = ${previousAnswer}`;
        }

        return(
            
            <div className="wrapper">

                <Inputs currentValue={currentValue} inputDisplay={inputDisplay}/>

                <div className="keypad-wrapper">
                    <KeyPad changeValue={this.changeValue} />
                    <Operators changeValue={this.changeValue} />
                </div>

                <ActionKeys evaluateExpression={this.evaluateExpression} delInput={this.delInput} resetInput={this.resetInput} getPreviousValue={this.getPreviousValue} />
 
            </div>
        
        )
    }
}

export default InteractiveCalculator