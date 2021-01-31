import { useEffect,useState } from 'react'
import Router from 'next/router'
import { Spin } from 'antd';

const Loading =  () =>{
    const [loadingStatus,setLoadingStatus] = useState(false)

    
    //设置loading状态为true
    function setTrue(){
        setLoadingStatus(true)
    }
     //false
    function setFalse(){
        setLoadingStatus(false)
    }
    useEffect(()=>{
        Router.events.on('routeChangeStart',setTrue)
        Router.events.on('routeChangeComplete',setFalse)
        Router.events.on('routeChangeError',setFalse)
        return () =>{
            Router.events.off('routeChangeStart',setTrue)
            Router.events.off('routeChangeComplete',setFalse)
            Router.events.off('routeChangeError',setFalse)
            window.removeEventListener('click',()=>{
                console.log('取消监听事件')
            });
        }
    },[loadingStatus])

    return (
        <div>
            {
                loadingStatus?<div className="loading"><Spin /></div>:''
            }
            <style jsx>{`
            .loading{
                position: fixed;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                z-index: 999;
                background-color: rgba(0,0,0,.2);
                display: flex;
                justify-content: center;
                align-items: center;
            }
        `}</style>
        </div>
    )
}

export default Loading