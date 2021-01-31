/*
 * @Descripttion: 分类页面
 * @Author: Hades
 * @Date: 2021-01-26 14:50:34
 * @LastEditTime: 2021-01-31 16:15:47
 */
import { useState } from 'react'
import MyLayout from '../../components/layout/Layout'
import ArticleList from '../../components/comm/ArticleList'
import ArticleEmpty from '../../components/comm/ArticleEmpty'
import Header from './Header'
import Nav from './Nav'
import { getSectionId } from '../../lib/api'
const Section = ({info,list}) =>{

    const [articleList,setArticleList] = useState(list)

    function changeNav(tname){
        let tempList = []
        list.forEach(item => {
            if(item.tname == tname||tname=='all'){
                tempList.push(item)
            }
        }); 
        setArticleList(tempList)
    }
    return (
        <MyLayout>
            <Header info={info} length={list.length}/>
            {
                articleList.length ==0?<ArticleEmpty/>: 
                <div style={{display:'flex',alignItems:'flex-start'}}>
                    <Nav list={list} changeNav={changeNav}/>
                    <ArticleList  articleList={articleList}/>
                </div>
            }
           
        </MyLayout>
    )
}

Section.getInitialProps = async (ctx) => {
    const { info,list } = await getSectionId(ctx.query.id)
    return { info,list }
}

export default Section;



