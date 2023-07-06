    import React,{useState} from 'react'
    export default function Form(props) {

      const [text, setText]=useState ("");

       // it is onchange function
      const onChangefun =(event)=>{
        setText(event.target.value)
      }
        
      //it is use for converting in uppercase
      const upperClick =()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.alertfunction("Converted to Uppercase","success");
      }

       //it is use for converting in lowercase
      const lowerClick =()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.alertfunction("Converted to Lowercase","success");
      }

      //it is use for clear all text
      const handleclear =()=>{
        let newText="";
        setText(newText);
        props.alertfunction("Text is Cleaned","warning");
      }

      // it is use for extracting all email from text
      function extractEmails() {
        let email = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
        let matches = text.match(email);
        if (matches) {          
          return matches.join("\n");
        } else {
          return '\n';
        }
      }

      const handleCopy=()=>{       
        navigator.clipboard.writeText(text);
        props.alertfunction("Text Copied","success");
      }

      let email=extractEmails({text});

      const emailCopy=()=>{       
        navigator.clipboard.writeText(email);
        props.alertfunction("Email Copied","success");
      }
     
       
      // for printing text
      function display(text) {
        window.print();
     }
    
      return (
        < >
        <div className="container" style={{color: props.mode===`dark`?`white`:`black`}}>
              <h1> {props.hading}</h1>
              <div className="mb-3">
              <textarea className={`htmlForm-control`} style={{color: props.mode===`dark`?`white`:`black`, backgroundColor: props.mode===`dark`?`#4e4545`:`white`}} value={text} onChange={onChangefun}  // text area
               id="exampleFormControlTextarea1" rows="10" ></textarea>     
                             
                                 {/*         buttons                     */}
              <button disabled={text.length===0} type="button" className="close mx-2" aria-label="Close" onClick={handleclear}>     
              <span aria-hidden="true">&times;</span>                                                    
                </button>
              </div>
              <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={upperClick}>conver to uppercase</button>
              <button disabled={text.length===0}className="btn btn-primary mx-2 my-1" onClick={lowerClick}>conver to lowercase</button>
              <button disabled={text.length===0}className="btn btn-primary mx-2 my-1" onClick={display}>print</button>
              <button disabled={text.length===0}className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy</button>
        </div>
              
              <div className="container" style={{color: props.mode===`dark`?`white`:`black`}}>
                <h2>Text summary</h2>
                {text.split(/\s+/).filter((element)=>(element.length!==0)).length} words and {text.length} characters.   
              <h3 className="my-2">All email in your text is bellow  </h3> 
                 {email}      <br/>
                 <button disabled={text.length===0 || email.length===0}className="btn btn-primary mx-2 my-1" onClick={emailCopy}>Copy Email</button> 
               
              
              </div>



        </>
      )
    }
