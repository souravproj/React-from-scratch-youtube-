import React, { Component } from 'react'

 class Form extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          username:'',
          comments:'',
          topic:'React'
       }
     }

     handleUsernameChange=(event)=>{
        this.setState({
            username:event.target.value
        })
     }

     handleCommentsChange=(event)=>{
         this.setState({
             comments:event.target.value
         })
     }
     hadleTopicChange=(event)=>{
         this.setState({
             topic:event.target.value
         })
     }

     handleSubmit=(event)=>{
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
     }
  render() {
    //   const{username,comments,topic}=this.state(if we can use this line then we dont have to write `thus.state` ,we can write only necessary one)
    return (
        <form onSubmit={this.handleSubmit}>
            <div>
                 <label>Username</label>
                 <input type='text' value={this.state.username} onChange={this.handleUsernameChange}/>
            </div>
            <div>
                <label>Comments</label>
                <textarea value={this.state.comments} onChange={this.handleCommentsChange}></textarea>
            </div>
            <div>
                <label>Topic</label>
                <select value={this.state.topic} onChange={this.hadleTopicChange}>
                    <option value="React">React</option>
                    <option value="Angular">Angular</option>
                    <option value="vue">vue</option>
                </select>
            </div>
            <button type='submit' >Submit</button>
        </form>
      
    )
  }
}

export default Form