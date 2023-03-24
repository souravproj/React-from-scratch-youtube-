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

  render() {
      console.log('Lifecycle A render')
    return (
        <div>
                 <div>LifecycleA</div>
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