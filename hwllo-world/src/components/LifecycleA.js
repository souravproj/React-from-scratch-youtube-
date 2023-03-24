import React, { Component } from 'react'
import LifecycleB from './LifecycleB'


 class LifecycleA extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          name:'Sourav'
       }
       console.log('LifecycleA Constructor')
     }
    static getDerivedStateFromProps(props,state){
        console.log('LifecycleA getDerivedStateFromProps')
        return null
    } 
    componentDidMount(){
        console.log('LifecycleA componentDidMount')
    }

    shouldComponentUpdate(){
        console.log('LifecycleA shouldComponent')
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('LifecycleA getSnapshotBeforeUpdate')
        return null
    }
    componentDidUpdate(){
        console.log('LifecycleA componentDidUpdate')
    }
    changeState=()=>{
        this.setState({
            name:'codevolution'
        })
    }

  render() {
      console.log('Lifecycle A render')
    return (
        <div>
                 <div>LifecycleA</div>
                 <button onClick={this.changeState}>Change State</button>
                 <LifecycleB/>
        </div>
    )
      
    
  }
}

export default LifecycleA

//calling way in console
//1.LifeCycleA constructor
//2.LifeCycleA getDerivedStateFromProps
//3.LifeCycleA render
//4.LifeCycleB constructor
//5.LifeCycleB getDerivedStateFromProps
//6.LifeCycleB render
//7.LifecycleB componentDidMount
//8.LifecycleA componentDidMount

//After Clicking on changeState button console will be
//1.LifecycleA getDerivedStateFromProps
//2.LifecycleA shouldComponent
//3.Lifecycle A render
//4.LifecycleB getDerivedStateFromProps
//5.LifecycleB shouldComponent
//6.Lifecycle A render
//7.LifecycleB getSnapshotBeforeUpdate
//8.LifecycleA getSnapshotBeforeUpdate
//9.LifecycleB componentDidUpdate
//10.LifecycleA componentDidUpdate