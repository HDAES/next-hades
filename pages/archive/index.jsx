import MyLayout from '../../components/layout/Layout'
import HotArticle from '../../components/comm/HotArticle'
import Assort from '../../components/comm/Assort'
import Header from './Header'
import ArchiveList from './ArchiveList'

import { getArticleList,getHotArticle } from '../../lib/api/index'
const Archive = ({articleList, hotArticle}) =>{
    return(
        <MyLayout>
            <div className="archive" >
                <div className="left">
                    <Header length={articleList.length}/>
                    <ArchiveList list={articleList}/>
                </div>
                <div className="right">
                    <HotArticle list={hotArticle}/>
                    <Assort/>
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

export async function getStaticProps() {
    const articleList = await getArticleList()
    const hotArticle = await getHotArticle()
    return {
      props: { 
        articleList,
        hotArticle
      },
    }
  }