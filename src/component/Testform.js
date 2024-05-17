import React, {useState} from 'react'

export default function Testform(props) {
    const converupcase = ()=>{
        console.log("upper case");
        let newtext = text.toUpperCase();
        setText(newtext)
        props.showAlert("convert to upper case");
    }
    const converlocase = ()=>{
        console.log("upper case");
        let newtext1 = text.toLowerCase();
        setText(newtext1)
        props.showAlert("convert to lower case");
    }
    const handleonchange = (event)=>{
        console.log("on chnage start");
        setText(event.target.value)
    }
    const converclearcase = ()=>{
         console.log("prit celar text");
         setText("")
         props.showAlert("clear all data");
    }
    const [text, setText] = useState("write here anything");
     return (
        <>
    <div className={`container text-${props.mode==='light'?'dark':'light'}`}>
      <div className="mb-3">
  <h1>{props.title}</h1>
  <textarea className="form-control" id="mybox"  value={text} style={{backgroundcolor:props.mode==='light'?'grey':'white',
                                                                     color:props.mode==='light'?'dark':'light'}}  onChange={handleonchange}  rows="9"></textarea>
  <button className='btn btn-primary my-4' onClick={converupcase}>upper case</button> 
  <button className='btn btn-primary mx-4' onClick={converlocase}>lower case</button> 
  <button className='btn btn-primary mx-4' onClick={converclearcase}>clear now</button> 
</div>
    </div>
     <div className={`container text-${props.mode==='light'?'dark':'light'}`}>
              <h1>some text exseserious</h1>
              <p>{text.split(" ").length}word,{text.length} char</p>
              <p>{0.008 * text.split(" ").length}</p>
              <h1>priview</h1>
              <p>{text}</p>

     </div>
        </>
  )
}
