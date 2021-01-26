/*
 * @Descripttion: 
 * @Author: Hades
 * @Date: 2021-01-26 13:26:07
 * @LastEditTime: 2021-01-26 14:35:14
 */
import axios from 'axios'

const server = 'http://127.0.0.1:8001'

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
    const data = await http({method:'GET',url: server+'/hades/saying'})
    return data
}

export async function getSection(){
    return await http({method:'GET',url: server+'/hades/section'})
}