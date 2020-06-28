import React, { Component } from 'react'

class Input extends Component {
    constructor(props) {
        super(props)
    
        this.inputRef = React.createRef();
    }
    
    inputFocus=()=>{
        //console.log(this.inputRef);
        this.inputRef.current.focus();
    }
    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef}/>
            </div>
        )
    }
}

export default Input
