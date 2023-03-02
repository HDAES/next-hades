
import { Anchor } from 'antd';

const { Link } = Anchor;
const Catalog = ({content}) =>{

    return (
        <div className="catalog">
            <div className="title">目录</div>
            <Anchor offsetTop={80}>
            {   
                content!=null?
                content.map((item,index) =>{
                  return  <Link key={index} href={`#${item.url}`} title={item.name}></Link>
                }):<div></div>
            }
            </Anchor>
            <style jsx>{`
            .catalog{
                border-radius: 5px;
                padding:10px;
                box-shadow:var(--box-shadow);
                background-color:var(--header-background-color);
            }
            .title{
                font-size:24px;
                font-weight: bold;
                padding-left: 10px;
                color:var(--header-logo-color);
            }
            a{
                display: block;
                color:var(--header-logo-color);
                font-size:18px;
                
            }
            `}</style>
        </div>
    )
}

export default Catalog;