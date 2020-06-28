import React, { Component } from 'react'

const WithCounter = WrappedComponent => {
    class withCounter extends Component {
        constructor(props) {
            super(props);
    
            this.state = {
                count:0
            };
        }
    
        incrementCounter = () => {
            const count = this.state.count + 1;
            this.setState({
                count : count 
            })
        }
        render() {
            return (
                < WrappedComponent count={this.state.count} incrementCounter={this.incrementCounter}/>
            )
        }
    }
    return withCounter;
    
}
export default WithCounter
