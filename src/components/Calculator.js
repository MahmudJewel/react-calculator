// combined component & main component
import React from "react";

import Layout from "./Layout";
import Results from "./Result";

class Calculator extends React.Component{
    // declaring constructor 
    constructor(){
        super();
        this.state={
            result:''
        }
    }

    // click function 
    onClick =e =>{
        if(e==='C'){
            this.setState({
                result:''
            })
        }
        else if(e==='CE'){
            this.setState({
                result: this.state.result.slice(0, -1)
            })
        }

        else if(e==='='){
            this.calculate()
        }

        else {
            this.setState({
                result:this.state.result+e
            })
        }
        
    };

    // calculation functions 
    calculate=()=>{
        try {
            this.setState({
                // eslint-disable-next-line
                result: (eval(this.state.result) || "" ) + ""
            })
        } catch (e) {
            this.setState({
                result: "error"
            })

        }
    }

    render (){
        return (
            <div>
                <h1 className='text-center' >Calculator</h1>
                <Results result={this.state.result} />
                <Layout dish={<Results result={this.state.result} />} onClick={this.onClick}/>
            </div>
        );
    }
}
export default Calculator;