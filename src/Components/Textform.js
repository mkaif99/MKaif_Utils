import React ,{useState} from 'react'

export default function Textform(props) {
    const handleUpClick = () => {
        console.log("Uper case")
        setText(text.toUpperCase())
        props.showAlert("Converted to Upper Case","success")
    }
    const handleLoClick = () => {
        console.log("Lower case")
        setText(text.toLowerCase())
        props.showAlert("Converted to Lower Case","success")
    }
    const handleOnChange = (even) => {
        console.log("Uper case")
        setText(even.target.value)
    } 
    const handleClearClick = () => {
        setText("")
    } 
    const [text, setText] = useState('')
    return (
        <>
        <div className='container' style={{color: props.mode ==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} style={{backgroundColor: props.mode ==='dark'?'grey':'white',color: props.mode ==='dark'?'white':'#042743'}} onChange={handleOnChange} id="myBox" rows="8"></textarea> 
                {/* onChange is used to type in textarea */}
            </div>
            <button className='btn btn-primary mx-3' onClick={handleUpClick}>Convert to Uppercase</button>
            <button className='btn btn-primary mx-3' onClick={handleLoClick}>Convert to Lowercase</button>
            <button className='btn btn-primary mx-3' onClick={handleClearClick}>Clear All</button>
        </div>
        <div className="container mt-3" style={{color: props.mode ==='dark'?'white':'#042743'}}>
            <h2>Your text sumary</h2>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:'Enter something in textbox above to preview it'}</p>
        </div>
        </>
    )
}
