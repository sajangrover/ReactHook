import React, { Component } from 'react'
import WithCounter from './HOC/withCounter';

class HoverComponent extends Component {
    render() {
        const {count, incrementCounter} = this.props
        return (
            <div>
                <h2 onMouseOver={incrementCounter}>Hovered {count} times</h2>
            </div>
        )
    }
}

export default WithCounter(HoverComponent);