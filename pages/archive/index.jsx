import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import MyLayout from '../../components/layout/Layout'
import HotArticle from '../../components/comm/HotArticle'
import Header from './Header'
import ArchiveList from './ArchiveList'
import { getArticleList } from '../../lib/api/index'
import { setArticleList } from '../../store/actions'
const Archive = () =>{
    const content = useSelector(({content}) => content)
    const dispatch = useDispatch()
    
    useEffect(()=>{
        if(content.articleList.length==0){
            getArticleList().then( res =>{
                dispatch(setArticleList(res))
            })
        }
    },[])
    return(
        <MyLayout>
            <div className="archive" >
                <div className="left">
                    <Header length={content.articleList.length}/>
                    <ArchiveList list={content.articleList}/>
                </div>
                <div className="right">
                    <HotArticle/>
                </div>
            </div>

            <style jsx>{`
            .archive{
                display:flex;
                justify-content:space-between;
            }
            .left{
                width:740px;
                box-shadow:var(--box-shadow);
                background-color: var(--header-background-color);
            }
            .right{
                width:320px;
            }
            `}</style>
        </MyLayout>
    )
}

export default Archive;