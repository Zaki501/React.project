import React from 'react'



class Calculator extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            
            value: [],
            submit:[]
        
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.resetAll = this.resetAll.bind(this);
    }
handleChange(event) {
     this.setState({value: event.target.value});
}

handleSubmit(event) { 

//doesnt allow letters    
const str = this.state.value;
const regex = /[a-z]/gm;

const result = regex.test(str);



if(result === false) {



/*const v = new Function('a', 'return a');
const a = v(this.state.value)

console.log(typeof(this.state.value))


*/


/* 

const regex = /[a-z]/gm;
const str = ``;
let m;

while ((m = regex.exec(str)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (m.index === regex.lastIndex) {
        regex.lastIndex++;
    }
    
    // The result can be accessed through the `m`-variable.
    m.forEach((match, groupIndex) => {
        console.log(`Found match, group ${groupIndex}: ${match}`);
    });
}

*/


//console.log(typeof(eval(this.state.value))) 
 

    this.setState({
        submit: [...this.state.submit, ` ${eval(this.state.value)} \u00A0\u00A0\u00A0\u00A0 ${str}`],
        value: []
    })


    event.preventDefault();

} else {
    alert('Do not enter a letter');
}

}


resetAll() {
    this.setState({
        value: [],
        submit:[]
    });
}


    render(){

 const listOfEntries = this.state.submit.map(n => <p>{n}</p>);
 const lastFourEntries = this.state.submit.slice(0).slice(-4).map(n => <p> {n} </p>)
 const copyButton = <button />
 

        return (
            <div>
               <form className="section-container column">

                    <label className="section">
                        <h1>Calculator </h1>
                        <h2>Previous four entries:</h2>
                    </label>

                    <div className="section inputdisplay">
                        <p className="small-text">{`Answer \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 Input`}</p>
                        <p className="small-text"> {lastFourEntries}</p>
                    </div>
                    
                    <div className="section inputbox">
                        <input value={this.state.value} onChange={this.handleChange}></input>
                        <input type="submit" value="Submit" onClick={this.handleSubmit}></input>
                        <input type="submit" value="Clear" onClick={this.resetAll} />
                    </div>

               </form>
            </div>

        )
    }


}
export default Calculator