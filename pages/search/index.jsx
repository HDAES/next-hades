import React from 'react';
import Layout from '../../components/layout/Layout'
import Assort from '../../components/comm/Assort'
import HotArticle from '../../components/comm/HotArticle'
import ArchiveList from '../../components/comm/ArticleList'
import SearchEmpty from '../../components/comm/searchEmpty'
import Header from './Header'
import { getHotArticle , getSearch} from '../../lib/api'
const Search = ({hotArticle,searchList}) =>{
    return (
        <Layout>
            <div className="search">
                <div className="left">
                    <Header length={searchList.length} />
                    {
                        searchList.length== 0?<SearchEmpty/>:
                        <ArchiveList articleList={searchList}/>
                    }
                </div>
                <div className="right">
                    <HotArticle list={hotArticle}/>
                    <Assort/>
                </div>
            </div>
            <style jsx>{`
            .search{
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
        </Layout>
    )
}

Search.getInitialProps = async (ctx) => {
    const hotArticle = await getHotArticle()
    const searchList = await getSearch(ctx.query.keywords)
    return { hotArticle,searchList }
}

export default Search;