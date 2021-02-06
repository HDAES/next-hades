import React from 'react';
import { Avatar } from 'antd'


const Friend = () =>{

    const list = [{
        name:'留下的光',
        url:'http://www.xn--ghqw2fj09bh8a.com/',
        avatar:'http://www.xn--ghqw2fj09bh8a.com/images/huijin.jpg',
        Intr:'摸摸哒！'
    },{
        name:'徐佳吉',
        url:'https://www.xujiaji.com/',
        avatar:'https://xujiaji.oss-cn-beijing.aliyuncs.com/blog/avatar.jpeg',
        Intr:'Todo'
    }]
    function toFriend(url){
        window.open(url,"_blank")
    }
    return (
        <div className="friend">
            <div className="title">friend</div>
            <div className="link-list">
                {
                    list.map( (item, index) =>{
                        return <div className="link-item" key={index} onClick={()=>toFriend(item.url)}>
                            <Avatar size="large"  src={item.avatar} >USER</Avatar>
                            <div className="name-intr">
                                <div className="name">{item.name}</div>
                                <div className="lable">{item.Intr}</div>
                            </div>
                        </div>
                    })
                }
            </div>
        <style jsx>{`
        .friend {
          margin-top: 20px;
          padding-bottom:20px;
          border-radius: 5px;
          box-shadow:var(--box-shadow);
          background-color: var(--header-background-color);
        }
        .title {
          padding: 20px 0 10px;
          text-align: center;
          font-size: 24px;
          font-family: "Damion";
          color: var(--text-color);
        }
        .fc{
          text-align: center;
          cursor: pointer;
          transition: all .3s;
        }
        .fc:hover{
          text-decoration: underline;
          transform: translateX(5px);
          font-style: italic;
        }
        .link-list{
            display: flex;
            flex-wrap: wrap;
            padding:20px 20px 0 20px;
        }
        .link-item{
            display: flex;
            flex-direction: row;
            flex-basis: 30%;
            background-color: var(--content-color);
            margin-bottom:20px;
            margin-right:20px;
            padding:20px 10px;
            cursor: pointer;
            transition: all .3s;
        }
        .link-item:hover{
            background-color: var(--border-color);
        }
        .name-intr{
            margin-left:20px;
        }
        .name{
            font-weight: bold;
            color: var(--text-color);
        }
        .lable{
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
            width:80px;
        }
      `}</style>
        </div>
    )
}

export default Friend