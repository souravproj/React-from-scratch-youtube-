import React, { Component } from 'react'

 class Usergreeting extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          isLoggedIn:true
       }
     }
  render() {

    //Short Circuit Approach (it will return only when condition wiil be true,when false it will not return anything)
      return this.state.isLoggedIn && <div>Welcome Sourav</div>


    //this is the ternary conditional approach
    //  return(
    //      this.state.isLoggedIn?
    //      <div>Welcome Sourav</div>:<div>Welcome Guest</div>
    //  )


      //This is element variable approach for rendering
    //   let message //it is the variable which stores the element to be rendered
    //   if(this.state.isLoggedIn){
    //       message=<div>Welcome Sourav</div>
    //   }else{
    //       message=<div>Welcome Guest</div>
    //   }
    //   return <div>{message}</div>



      //if else method doesnot work inside jsx
      //this is the conditional rendering by using if else
    //   if(this.state.isLoggedIn){
    //       return (
    //           <div>
    //               Welcome Sourav
    //           </div>
    //       )
    //   } else{
    //       return (
    //           <div>
    //               Welcome Guest
    //           </div>
    //       )
    //   }
    
   }
 }

export default Usergreeting