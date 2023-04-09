import './inputBox.css'
const InputBox =({type="text",value, ...rest})=>{
    return(
     <input 
     className="InputBox" 
     type={type} 
     value={value}
     {...rest}
     />
        )
}
export default InputBox  