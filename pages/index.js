/*
 * @Descripttion: 
 * @Author: Hades
 * @Date: 2021-01-26 09:36:06
 * @LastEditTime: 2021-01-27 22:34:04
 */

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import MyLayout from '../components/layout/Layout'
import Section from '../components/index/Section'
import Plan from '../components/index/Plan'
import HotArticle from '../components/comm/HotArticle'
import Assort from '../components/comm/Assort'
import ArticleList from '../components/comm/ArticleList'
import { getSaying, getSection, getHotArticle, getArticleList } from '../lib/api'
import {setSaying,setHotArticle, setSort, setArticleList } from '../store/actions'
export default function Home({sayingList,section,hotArticle, articleList}) {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(setSaying(sayingList))
    dispatch(setHotArticle(hotArticle))
    dispatch(setSort(section))
    dispatch(setArticleList(articleList))
    
  },[])

  return (
    <MyLayout>
      <div style={{display:'flex',justifyContent:'space-between'}} >
        <div style={{width:740}}>
          <Section section={section}/>
          <Plan/>
          <ArticleList articleList={articleList}/>
        </div>
        <div style={{width:320}}>
          <HotArticle/>
          <Assort/>
        </div>
      </div>
    </MyLayout>
  )
}

export async function getStaticProps() {
  const sayingList = await getSaying()
  const section = await getSection()
  const hotArticle = await getHotArticle()
  const articleList = await getArticleList()
  return {
    props: { 
      sayingList,
      section,
      hotArticle,
      articleList
    },
  }
}