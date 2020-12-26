import React from 'react'

const userOutput=(props)=>{
    let text='the text is enuph';
    if(props.length>5){
        text='the text is too longh';
    }
    return (
     <div>
        <p>{text}</p>
     </div>
   
    );
}
export default userOutput;