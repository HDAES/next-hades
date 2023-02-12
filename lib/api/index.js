/*
 * @Descripttion: 
 * @Author: Hades
 * @Date: 2021-01-26 13:26:07
 * @LastEditTime: 2021-11-30 21:43:33
 */
import axios from 'axios'
import Md5 from 'md5'

//const server = 'http://127.0.0.1:8090'
const server = 'http://api.xl686.com'
function http(options){
    return new Promise((resolve, reject) => {

        const timestamp = new Date().getTime();
        const headers = {}
        headers['version'] = '1.0.0';
        headers['timestamp'] = timestamp;
        headers['sign'] = setSign(options,timestamp);

        
        axios({
            url: options.url,
            method: options.method,
            timeout: 12000,
            data: options.data,
            headers: {
                ...options.headers,
                ...headers
            },
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


function setSign(config,timestamp) {
    let str = ""
    if((config.method == "get" || config.method == "delete") && config.params){
        let keys = Object.keys(config.params).sort();
        for (let i = 0; i < keys.length; i++) {
            str += config.params[keys[i]];
        }
    }
    return Md5(str + Md5(timestamp.toString().substring(0, 8)) + timestamp)
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
