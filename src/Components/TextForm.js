import React, {useState} from 'react'

export default function TextForm(props) {
    const [text,setText] = useState('');
    const HandleUpChange = ()=>{
       // console.log("Hi onclick" + text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success");
    }
    const HandleLoChange = ()=>{
        //console.log("Hi onclick" + text)
        let newText = text.toLowerCase();
        setText(newText)
    }
    const HandleCaChange = ()=>{
        //console.log("Hi onclick" + text)
        let newText = text[0].toUpperCase() + text.slice(1);
        setText(newText);
        
       
    }
    const HandleClChange = ()=>{
        //console.log("Hi onclick" + text)
        let newText = '';
        setText(newText)
    }
    const HandleCopyChange = (event)=>{
        var text = document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value)
       }
       const HandleRmvChange = (event)=>{
          let ntext = text.split(/[ ]+/)
         setText(ntext.join(" "))
         }
    const HandleOnChange = (event)=>{
       // console.log("Hi onchange")
        setText(event.target.value)
    }
   
    const countWords = (text) => {
        if (text.trim() === "") {
          // If the input is empty or contains only spaces, consider it as 0 words.
          return 0;
        } else {
          // Split the text by spaces and count the words.
          return text.split(" ").length;
        }
      };
      
     
        
   
 
    
   
 
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'? 'white' : 'black'}}>   
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" id="myBox" rows="8" value={text} onChange={HandleOnChange} style={{color:props.mode==='dark'? 'white' : 'black',backgroundColor:props.mode==='dark'? 'grey' : 'white'}}></textarea>
        </div>
        <button className={`btn btn-${props.mode==='dark'?'light':'dark'} mx-2`} onClick={HandleUpChange}>Convert to Uppercase</button>
        <button className={`btn btn-${props.mode==='dark'?'light':'dark'} mx-2`} onClick={HandleLoChange}>Convert to LowerCase</button>
        <button className={`btn btn-${props.mode==='dark'?'light':'dark'} mx-2`} onClick={HandleCaChange}>Capitalize</button>
        <button className={`btn btn-${props.mode==='dark'?'light':'dark'} mx-2`} onClick={HandleClChange}>Clear</button>
        <button className={`btn btn-${props.mode==='dark'?'light':'dark'} mx-2`} onClick={HandleCopyChange}>Copy</button>
        <button className={`btn btn-${props.mode==='dark'?'light':'dark'} mx-2`} onClick={HandleRmvChange}>Remove Extra spaces</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'? 'white' : 'black'}}>
        <h2>Your text summary</h2>
        <p><b> {countWords(text)}</b>  Words and <b>{text.length}</b> Characters</p>
        <p>Time to Read Words <b>{0.008 * text.split(" ").length}</b></p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter text to preview here"}</p>
    </div>
    </>
  )
}
