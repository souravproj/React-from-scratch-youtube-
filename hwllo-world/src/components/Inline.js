import React from 'react'

const heading={
    fontSize:'72px',
    color:'blue'
}

function Inline() {
  return (
    <div>
       <h1 className='error'>Error</h1>
        <h1 style={heading}>Inline</h1>
    </div>
  )
}

export default Inline


//in inline css we have to create object and have to put in into style attributes 