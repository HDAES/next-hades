/*
 * @Descripttion: 我的布局
 * @Author: Hades
 * @Date: 2021-01-25 21:48:41
 * @LastEditTime: 2021-01-26 10:42:18
 */
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import MyHeader from "./Header"
import Click from './Click'
import Footer from './Footer'
import Rightbar from './Rightbar'
const MyLayout = ({children}) =>{
    
    const config = useSelector(({config}) => config)

    const [minHeight,setMinHeight] = useState(false)

    useEffect(()=>{
        setMinHeight(document.documentElement.clientHeight-80)
    },[true])

    return <div className={config.theme}>
        <MyHeader/>
        <div className="main" style={{minHeight:minHeight}}>
        
            <div className="container">
                {children}
            </div>
        </div>
        <Rightbar/>
        <Footer/>
        <Click/>
    </div>
}

export default MyLayout;