/*
 * @Descripttion: 文章中心
 * @Author: Hades
 * @Date: 2021-01-31 17:38:08
 * @LastEditTime: 2021-11-30 18:04:26
 */
import { useState,useEffect } from 'react'
import Head from 'next/head'
import marked from 'marked'
import hljs from "highlight.js";
import { Anchor } from 'antd';
import 'highlight.js/styles/monokai-sublime.css';
import '../../styles/marked.less'
import Layout from '../../components/layout/Layout'
import Section from '../../components/comm/Assort'
import Catalog from './Catalog'
import { getArticle } from '../../lib/api' 

const Article = ({data,content}) =>{
    const [catalog,setCatalog] = useState([1,2,3,4])
    useEffect( ()=>{
        let arrContent = data.content.split('\n\n')
        let tempArr = []
        arrContent.forEach(element => {
            if(element.indexOf("#")>-1){
                tempArr.push(element.replace(RegExp("#","g"),''))
            }
        });
        
        let Catalog = []
        tempArr.forEach(item =>{
            let obj = { }
            obj.name = item
            obj.url = item.replace(RegExp(/\.| /,"g"),'').toLowerCase()
            Catalog.push(obj)
        })
        setCatalog(Catalog)
    },[])
   

    return (
        <Layout>
            <Head> <title>hades</title></Head>
            <div className="article">
                <div className="detailed-content"  
                    dangerouslySetInnerHTML = {{__html:content}}  >
                </div>
                <Anchor offsetTop={80}>
                    <div className="side">
                        <Catalog content={catalog}/>
                        <Section/> 
                    </div>
                </Anchor>
            </div>
            
            <style jsx>{`
                .article{
                    display:flex;
                    justify-content:space-between;
                }
                .detailed-content{
                    width:740px;
                    background-color:var(--header-background-color);
                    padding:20px;
                    border-radius: 5px;
                } 
                .side{
                    width:320px;
                }
            `}</style>
        </Layout>
    )
}
Article.getInitialProps = async (ctx) => {
    marked.setOptions({
        gfm: true,
        pedantic: false,
        sanitize: false,
        tables: true,
        breaks: false,
        smartLists: true,
        smartypants: false,
        highlight: function (code) {
            return hljs.highlightAuto(code).value;
        }
      }); 
    const data = await getArticle(ctx.query.id)
    let newhtml = await marked(data.content)

    
    return { 
        data,
        content:newhtml
    }
}
export default Article