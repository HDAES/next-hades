
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { init } from 'ityped'
import { getSaying } from '../../lib/api/index'
import { setSaying } from '../../store/actions'
import './layout.less'
const Voice = () =>{
    
    const dispatch = useDispatch()
    const content = useSelector(({content}) => content)

    useEffect(()=>{
        if(content.sayingList.length==0){
            getSaying().then( res =>{
                content.sayingList = res
                dispatch(setSaying(res))
                createItyped()
            })
        }else{
            createItyped()
        }
    },[])

    function createItyped(){
        const text = document.querySelector('#text')
        const source = document.querySelector('#source')
        init(text, { showCursor: false, disableBackTyping:true, strings: [content.sayingList[0].content] }) 
        init(source, { showCursor: false, disableBackTyping:true, strings: [content.sayingList[0].author]})
    }
    return (
        <div className="voice">
          <p className="text" id="text"></p><p className="source" id="source"></p> 
         </div>
      )
}

export default Voice;