// result component==> result display 
import React from "react";
import '../CSS/layout.css';

class Results extends React.Component{
    render(){
        let {result} = this.props;
        return (
        <div className='main'> 
            <h2>{result}</h2>
        </div>
        );
    }
}

export default Results;