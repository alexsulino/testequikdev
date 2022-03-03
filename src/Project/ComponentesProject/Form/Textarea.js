//import './Input.module.css';
function Textarea ({type, text, name, placeholder, handleOnChange, value}){
    return (
        <div className="inputControl">
            <label htmlFor={name}>{text}</label>
            <textarea 
            type={type} 
            name={name} 
            id={name} 
            placeholder={placeholder} 
            onChange={handleOnChange} 
            value={value}>
            </textarea>
        </div>
    )
}
export default Textarea;