/*
 * @Descripttion: 
 * @Author: Hades
 * @Date: 2021-01-26 09:36:06
 * @LastEditTime: 2021-01-26 14:46:20
 */

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import MyLayout from '../components/layout/Layout'
import Section from '../components/index/Section'
import Plan from '../components/index/Plan'
import { getSaying, getSection } from '../lib/api'
import {setSaying } from '../store/actions'
export default function Home({sayingList,section}) {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(setSaying(sayingList))
  },[])

  return (
    <MyLayout>
      <div style={{display:'flex',justifyContent:'space-between'}} >
          <div style={{width:740}}>
            <Section section={section}/>
            <Plan/>
          </div>
      </div>
    </MyLayout>
  )
}

export async function getStaticProps() {
  const sayingList = await getSaying()
  const section = await getSection()
  return {
    props: { 
      sayingList,
      section
    },
  }
}