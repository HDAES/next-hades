/*
 * @Descripttion: 我的布局
 * @Author: Hades
 * @Date: 2021-01-25 21:48:41
 * @LastEditTime: 2021-01-25 22:22:55
 */
import { useEffect, useState } from 'react'
import MyHeader from "./Header"
import Click from './Click'
import Footer from './Footer'

const MyLayout = ({children}) =>{
    
    const [minHeight,setMinHeight] = useState(false)

    useEffect(()=>{
        setMinHeight(document.documentElement.clientHeight-80)
    },[true])

    return <div className="light-theme">
        <MyHeader/>
        <div className="main" style={{minHeight:minHeight}}>
        
            <div className="container">
                {children}
            </div>
        </div>
        <Footer/>
        <Click/>
    </div>
}

export default MyLayout;