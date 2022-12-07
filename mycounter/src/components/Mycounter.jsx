import React, { Component } from 'react'

export default class Mycounter extends Component {
    constructor(props){
        super(props);
        this.state ={
            age: this.props.age,
        }
    }
  render() {
    return (
      <div>
        <h1> Name :{this.props.fname}</h1>
        <p>age :{this.state.age}</p>
        <h4> haircolor: {this.props.hair}</h4>
        <button onClick={()=> {this.setState({age:this.state.age+1}) }}> Birthday for {this.props.fname}</button>
        {this.props.children}
        
      </div>
    )
  }
}
