import React from 'react'
import './MyStyle.css'

function StyleSheet(props) {
    let className=props.primary? 'primary':''//this is by using props
  return (
    <div>
        <h1 className={`${className} font-xl`}>StyleSheet</h1>  
        </div>
        //here we can also called by using class name only within curly bracket
        //when there are many classes then we can call it by using backtik and obhiously you have to use $ sign
  )
}

export default StyleSheet