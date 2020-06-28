
import React, { Component } from 'react'
import WithCounter from './HOC/withCounter';
class ClickedComponent extends Component {
    
    render() {
        const {count, incrementCounter} = this.props
        return (
            <div>
                <button onClick={incrementCounter}>Clicked {count} times</button>
            </div>
        )
    }
}

export default WithCounter(ClickedComponent);
