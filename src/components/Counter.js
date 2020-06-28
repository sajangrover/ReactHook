import React, { Component } from 'react'

class Counter extends Component {
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
            <div>
                {this.props.render(this.state.count, this.incrementCounter)}
            </div>
        )
    }
}

export default Counter
