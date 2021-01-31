/*
 * @Descripttion: 文章中心
 * @Author: Hades
 * @Date: 2021-01-31 17:38:08
 * @LastEditTime: 2021-01-31 23:43:49
 */
import { useState,useEffect } from 'react'
import Head from 'next/head'
import marked from 'marked'
import hljs from "highlight.js";
import 'highlight.js/styles/monokai-sublime.css';
import '../../styles/marked.less'
import Layout from '../../components/layout/Layout'
import Section from '../../components/comm/Assort'
import Catalog from './Catalog'
import { getArticle } from '../../lib/api' 

const Article = ({data}) =>{

    const [html,setHtml] = useState(data.html)
    useEffect( ()=>{
        
        
    let arrContent = data.data.content.split('\n\n')
    let tempArr = []
    arrContent.forEach(element => {
        if(element.indexOf("#")>-1){
            tempArr.push(element.replace(' ',''))
        }
    });

    let Catalog = []
    tempArr.forEach(item =>{
        let obj = { 
            type:1
        }
        if(item.indexOf("#")>-1){
            obj.name = item
            var reg = RegExp(".","");
            obj.url = item.replace(reg,'')
            Catalog.push(obj)
        }
    })
    console.log(Catalog)


        setTimeout(()=>{
            renderMarked()
        },100)   
    },[])
    const renderMarked = async ()=>{
        let newhtml =await marked(data.data.content)
        setHtml(newhtml)
    }

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

    return (
        <Layout>
            <Head> <title>hades</title></Head>
            <div className="article">
                <div className="detailed-content"  
                    dangerouslySetInnerHTML = {{__html:html}}  >
                </div>
                <div className="side">
                    <Catalog content={data.data.content}/>
                    <Section/> 
                </div>
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
    const data = await getArticle(ctx.query.id)
    return { data }
}
export default Article