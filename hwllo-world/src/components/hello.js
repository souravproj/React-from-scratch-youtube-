// import React from "react";
// const Hello=()=>{
//     return(
//         <div className='dummyClass'>
//         <h1>Hello Sourav</h1>
//         </>
//     )
// }
// export default Hello;


import React from "react";
const Hello=()=>{
   return React.createElement(
       'div',
       {id:'hello',className:'dummyClass'},
       React.createElement('h1',null,'Hello Sourav'))
}
export default Hello;