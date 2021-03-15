import React, { Component } from 'react'

class MouseMoveClass extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             X : 0, Y:0
        }
    }
    logMousePosition = e =>{
        this.setState({ X : e.clientX , Y : e.clientY})
    }
    componentDidMount(){
        window.addEventListener('mousemove', this.logMousePosition)
    }
    componentWillUnmount(){
        window.removeEventListener('mousemove',this.logMousePosition)
    }
    render() {
        const {X, Y} = this.state
        return (
            <div>
                X - {X}  Y - {Y}
            </div>
        )
    }
}

export default MouseMoveClass
