import React, { Component } from 'react'
import Input from './Input'
export class Focus extends Component {
    constructor(props) {
        super(props)
        this.componentRef = React.createRef();
        
    }
    clickHandler=()=>{
        //console.log(this.componentRef)
        this.componentRef.current.inputFocus();
    }
    render() {
        return (
            <div>
                <Input ref ={this.componentRef}/>
                <button onClick={this.clickHandler}>click</button>
            </div>
        )
    }
}

export default Focus
