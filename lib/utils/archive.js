/*
 * @Descripttion: 归档数据处理
 * @Author: Hades
 * @Date: 2021-01-27 21:52:49
 * @LastEditTime: 2021-02-01 22:44:03
 */
const formatMonth = ['January','February','March','April','May','June','July','August ','September','October','November','December']

function archive(data = []){
    const list=[]
    const year = []

    data.forEach((item)=>{
        year.push(item.createTime.slice(0,4))
    })

    const yearList = [...new Set(year)]

    yearList.forEach((item)=>{
        list.push({
            year:item
        })
    })

    list.map((item)=>{
        let tempMonths = []
        item.months = []
        data.map(i =>{
            if(item.year == i.createTime.slice(0,4)){
                tempMonths.push(i.createTime.slice(5,7))
            }
        })

        const dpTempMonths=[...new Set(tempMonths)] 

        dpTempMonths.forEach((dp)=>{
            item.months.push({
                month:dp,
                monthStr:formatMonth[parseInt(dp)-1]
            })
        })
    })

    list.map((item)=>{
        item.months.map((i,index)=>{
            item.months[index].articles=[]
            data.map((j) =>{
                if(item.year == j.createTime.slice(0,4) && i.month == j.createTime.slice(5,7)){
                    item.months[index].articles.push(j)
                }
            })
        })
    })


    return list
}

export default archive;