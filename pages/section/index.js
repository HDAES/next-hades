/*
 * @Descripttion: 分类页面
 * @Author: Hades
 * @Date: 2021-01-26 14:50:34
 * @LastEditTime: 2021-01-29 09:49:32
 */
import MyLayout from '../../components/layout/Layout'
import Header from './Header'
import Nav from './Nav'
import { getSectionId } from '../../lib/api'
const Section = ({info,list}) =>{
    return (
        <MyLayout>
            <Header info={info} length={list.length}/>
            <div style={{display:'flex',alignItems:'flex-start'}}>
                <Nav list={list}/>
            </div>
        </MyLayout>
    )
}

Section.getInitialProps = async (ctx) => {
    const { info,list } = await getSectionId(ctx.query.id)
    return { info,list }
}

export default Section;

