/*
 * @Descripttion: 分类
 * @Author: Hades
 * @Date: 2021-01-27 14:12:36
 * @LastEditTime: 2021-01-31 16:23:49
 */
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Link from "next/link";
import { getSection } from '../../lib/api/index'
import { setSort } from '../../store/actions'

const Assort = () =>{
  const dispatch = useDispatch()
  const content = useSelector(({content}) => content)
  useEffect(()=>{
    if(content.sortList.length ==0){
      getSection().then( res =>{
        content.sortList = res
        dispatch(setSort(res))
      })
    }
  },[])

  return (
      <div className="section">
            <div className="section-title">
              <i className="iconfont icon-fenlei" />
              <span>分类</span>
          </div>
          {
              content.sortList.map((item)=>{
                  return (
                      <div className="section-item" key={item.id}>
                          <i className={"iconfont icon " + item.icon} />
                          <Link href={{pathname:"/section",query:{id:item.id}}}>
                              <a>{item.name}</a>
                          </Link>
                      </div>
                  )
              })
          }


      <style jsx>{`
      .section {
        padding: 10px;
        margin-top: 20px;
        border-radius: 5px;
        color: var(--text-color);
        box-shadow:var(--box-shadow);
        background-color: var(--header-background-color);
      }
      .section-title {
        height: 30px;
        display: flex;
        align-items: center;
        border-bottom: 1px solid var(--border-color);
      }
      .section-title i {
        padding: 0 10px 0 0;
        font-size:20px;
        color: var(--text-color);
      }
      .section-title span {
        font-weight: bold;
      }
      .section-item {
          display: flex;
          line-height:40px;
      }
      .section-item i {
          padding-right:15px; 
          font-size:20px;
      }
      a {
        width: 80%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: var(--text-color);
        transition: all 0.3s ease;
          font-weight: 500;
      }
      a:hover {
        padding-left: 10px;
        color: var(--header-logo-color);
      }
      `}</style>
      </div>
  )
}

export default Assort;