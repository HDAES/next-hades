import { useDispatch } from 'react-redux'
import { changeTheme } from '../../store/actions'

const Rightbar = () =>{

    const dispatch = useDispatch()

    return (
        <div className="rightbar">
            <div className="card-item" onClick={()=>dispatch(changeTheme())}> 
                <i className="iconfont icon-yejianmoshi" />
            </div>
            
        </div>
    )
}

export default Rightbar;