/*
 * @Descripttion: 公共头部
 * @Author: Hades
 * @Date: 2021-01-25 21:45:56
 * @LastEditTime: 2021-02-01 14:09:40
 */
import Link from 'next/link'
import { Input } from 'antd'
import Router, { withRouter } from 'next/router'
import './layout.less'
const MyHeader = ({router}) =>{

    const routerIndex = router.route
    const navlist = [{
        index: '/',
        name: '首页'
    },{
        index: '/archive',
        name: '归档'
    },{
        index: '/about',
        name: '关于'
    }]
    return (
        <div className="header">
            <div className="container">
                <Link href="/">
                    <div className="logo-link">
                        <img className="logo" src="/logo.png" alt="logo" />
                        <span className="url"> xl686.com </span>
                    </div>
                </Link>
                <div className="tabs" >
                    {
                        navlist.map((item) => {
                            return (
                                <Link href={item.index} key={item.index}>
                                    <a className={ routerIndex == item.index?'tabs_active tab':'tab'} >{item.name}</a>
                                </Link>
                            )
                        })
                    }
                </div>
                <div className="search">
                    <Input.Search onSearch={value =>Router.push(`/search?keywords=`+value) } placeholder="请输入关键词"/>
                </div>
            </div>
        </div>
    )
}

export default withRouter(MyHeader);