/*
 * @Descripttion: 
 * @Author: Hades
 * @Date: 2021-01-26 13:26:07
 * @LastEditTime: 2021-02-06 15:41:03
 */
import axios from 'axios'

//const server = 'http://127.0.0.1:8001'
const server = 'http://api.xl686.com'
function http(options){
    return new Promise((resolve, reject) => {
        axios({
            url: options.url,
            method: options.method,
            timeout: 12000,
            data: options.data,
            headers:options.headers||{ },
            params: (options.data && options.data.params) || '',
        }).then((response) => {
            if (response.status === 200) {
                let res = response.data
                if (res.code === 200) {
                    if(options.all){
                        resolve(res)
                    }else{
                        resolve(res.data)
                    }
                } else {
                    reject(res)
                }
            }
        })
    })
}

export async function getSaying(){
    return await http({method:'GET',url: server+'/hades/saying'})
}

export async function getSection(){
    return await http({method:'GET',url: server+'/hades/section'})
}

export async function getHotArticle(){
    return await http({method:'GET',url: server+'/hades/hotArticle'})
}

export async function getArticleList(){
    return await http({method:'GET',url: server+'/hades/articleList'})
}

export async function getSectionId(id){
    return await http({method:'GET',url: server+'/hades/sectionData/'+id})
}
export async function getArticle(id){
    return await http({method:'GET',url: server+'/hades/article/'+id})
}
export async function getSearch(key){
    return await http({method:'GET',url: server+'/hades/search/'+key})
}
