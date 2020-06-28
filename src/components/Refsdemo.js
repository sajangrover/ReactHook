import React, { Component } from 'react'

class Refsdemo extends Component {
    constructor(props){
        super(props);
        this.inputRef = React.createRef();
        this.cbRef = null;
        this.setCbref = element => {
            //console.log(element)
            this.cbRef = element
        }
    }
    componentDidMount(){
        //this.inputRef.current.focus();
        if(this.cbRef){
            this.cbRef.focus();
        }
    }
    clickHandler =()=>{
        alert(this.inputRef.current.value)
    }
    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef}/>
                <input type="text" ref={this.setCbref}/>
                <button onClick={this.clickHandler}>click</button>
            </div>
        )
    }
}

export default Refsdemo;
