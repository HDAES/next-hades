/*
 * @Descripttion: 我的布局
 * @Author: Hades
 * @Date: 2021-01-25 21:48:41
 * @LastEditTime: 2021-01-28 10:10:22
 */
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import debounce from 'debounce'
import MyHeader from "./Header"
import Click from './Click'
import Footer from './Footer'
import Rightbar from './Rightbar'
import Voice from './Voice'
import Live2D from './Live2d'
import { changeToTop } from '../../store/actions'
const MyLayout = ({children}) =>{
    
    const config = useSelector(({config}) => config)
    const dispatch = useDispatch()

    const [minHeight,setMinHeight] = useState(false)

    useEffect(()=>{
        //监听滚动
        window.addEventListener('scroll', debounce(onScroll,100));
        return () =>{
            window.removeEventListener('scroll', onScroll);
        }
    },[])

    useEffect(()=>{
        setMinHeight(document.documentElement.clientHeight-80)
    },[])

    //监听滚动条
    function onScroll(){
        if(window.scrollY>=320){
            dispatch(changeToTop(true))
        }else if(window.scrollY<320){
            dispatch(changeToTop(false))
        }
    }
    return <div className={config.theme}>
        <MyHeader/>
        <div className="main" style={{minHeight:minHeight}}>
            <div className="container">
                {children}
            </div>
        </div>
        <Voice/>
        <Rightbar/>
        <Footer/>
        <Click/>
        <Live2D/>
    </div>
}


export default MyLayout;

