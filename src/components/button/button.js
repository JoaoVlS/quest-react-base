const alertLabel = (Button) => { 
    alert("A label desse botão é " + Button.label);   
}

const Button = ({label}) => {
    return <button className="btn" onClick={()=>alertLabel({label})}>{label}</button>
 }

 export default Button