import React, { Component } from 'react';

class NewTask extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newTask: ''
        }
    }
    handleChange= (val) => {
        this.setState({newTask: val})
        }

    render() {
    return(
    <input onChange ={(e) => this.handleChange(e.target.value)}/>
    <button onClick ={() => this.props.submit()}>Add</button>
    )
    }
}

export default NewTask;
