const char=(props)=>{
    let style={
        display:'inline-block',
        padding:'16px',
        margin:'16px',
        border:'1px solid black',
        textAlign:'center'
    }
return <div onClick={props.click} style={style}>{props.char}</div>
}
export default char;