import React, { Component } from 'react'

 class LifecycleB extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          name:'Sourav'
       }
       console.log('LifecycleB Constructor')
     }
    static getDerivedStateFromProps(props,state){
        console.log('LifecycleB getDerivedStateFromProps')
        return null
    } 
    componentDidMount(){
        console.log('LifecycleB componentDidMount')
    }
    shouldComponentUpdate(){
        console.log('LifecycleB shouldComponent')
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('LifecycleB getSnapshotBeforeUpdate')
    }
    componentDidUpdate(){
        console.log('LifecycleB componentDidUpdate')
    }

  render() {
      console.log('Lifecycle A render')
    return (
      <div>
          LifecycleB
      </div>
    )
  }
}

export default LifecycleB