
import React, { useEffect } from 'react'

import './layout.less'
import { init } from 'ityped'

const Voice = ({list}) =>{
   

    useEffect(()=>{
        const text = document.querySelector('#text')
        const source = document.querySelector('#source')
        init(text, { showCursor: false, disableBackTyping:true, strings: [list[0].content] }) 
        init(source, { showCursor: false, disableBackTyping:true, strings: [list[0].author]})
    },[])
    return (
        <div className="voice">
          <p className="text" id="text"></p><p className="source" id="source"></p> 
         </div>
      )
}

export default Voice;