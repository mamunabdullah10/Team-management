import './button.css'
const Button=({children, type="button",label})=>{
    return(
        <button type={type} className="submit-btn">{label || children}</button>
    )
}
export  default Button