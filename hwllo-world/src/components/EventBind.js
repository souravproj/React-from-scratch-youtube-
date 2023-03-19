import React, { Component } from 'react'

export class EventBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message:'Hello'
      }
    //   this.clickHandler=this.clickHandler.bind(this)
    }


    // clickHandler(){
    //     this.setState({
    //         message:'Good Bye!'
    //     })
         // console.log(this)
    // }

//Class Properties in Arrow Functions
    clickHandler=()=>{
        this.setState({
            message:'Goodbye!'
        })
    }

  render() {
    return (
      <div>
          <div>{this.state.message}</div>
          {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
          {/* IF WE CAN USE ARROW FUNCTION FOR PASSIG MESSAGE THEN NO NEED TO USE BIND FUNCTION */}
          {/* <button onClick={()=>this.clickHandler()}>Click</button>   */}
          <button onClick={this.clickHandler}>Click</button>

      </div>
    )
  }
}

export default EventBind