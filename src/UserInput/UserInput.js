import React from 'react'

const userInput=(props)=>{
    return <input value={props.value} onChange={props.change} type="text"></input>
}

export default userInput;