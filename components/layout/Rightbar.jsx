import { useDispatch, useSelector } from 'react-redux'
import { changeTheme } from '../../store/actions'

const Rightbar = () =>{

    const config = useSelector(({config}) => config)
    const dispatch = useDispatch()

    return (
        <div className="rightbar">
            <div className="card-item" onClick={()=>dispatch(changeTheme())}> 
                <i className="iconfont icon-yejianmoshi" />
            </div>
            <div className="card-item-last" style={{height: config.toTop?"36px":0}} onClick={()=>window.scrollTo(0, 0)}> 
                <i className="iconfont icon-31huidaodingbu" />
            </div>
        </div>
    )
}

export default Rightbar;