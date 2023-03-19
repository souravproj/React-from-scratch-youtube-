// import React from 'react'

// 1st way topic

// function Greet(){
//     return <h1>Hello World</h1>
// }

// 2nd way topic
// const Greet=()=><h1>Hello World</h1>
// export default Greet;


//3rd way topic
// export const Greet=(props)=>{
//     console.log(props)

// return (
//     <div>
// <h1>Hello {props.name} i know you are a {props.heroName}</h1>
//     {props.children}
//     </div>
// )
// }
//props are immutable and its value cannot be change

//ONE WAY TO DISTRUCTURING PROPS

// import React from 'react'
// const Greet=props=>{
//     const {name,heroname}=props
    
//     return(
//         <div>
//             <h1>
//                 Hello {name} you are a good {heroname}
//             </h1>
//         </div>
//     )
// }
// export default Greet;

//ANOTHER WAY TO DISTRUCTRING PROPS

import React from 'react'
const Greet=({name,heroname})=>{
   return(
        <div>
            <h1>
                Hello {name} you are a good {heroname}
            </h1>
        </div>
    )
}
export default Greet;