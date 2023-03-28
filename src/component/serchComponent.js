import { useState } from 'react';

let googleTransliterate = require('google-input-tool');
const XMLHttpRequest = require('xhr2');



export default function SearchComponnent(){
    const [text, setText] = useState('')

   //  let googleTransliterate = require('google-input-tool');
          function textConveter(){
            
            let inputLanguage = 'ne-t-i0-und';
    // let maxResult = 8;
      let request = new XMLHttpRequest();
     
     googleTransliterate(request, text, inputLanguage)
     .then((res) => {
         console.log("@data", res?.[0]?.[0])
     });
 
          }

     return(
        <>
        <form action="">
         <div class="input-group input-group-sm mb-3">
           <span class="input-group-text" id="inputGroup-sizing-sm">Small</span>
              <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
              onChange={(e)=>setText(e.target.value)}  onKeypress ={()=>textConveter()} />
           </div>
        </form>
          
        </>
     )
}