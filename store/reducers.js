/*
 * @Descripttion: 
 * @Author: Hades
 * @Date: 2021-01-26 10:15:09
 * @LastEditTime: 2021-01-28 11:11:01
 */
import { combineReducers } from 'redux'
import * as types from './types'


 // INITIAL TIMER STATE
const initialConfigState = {
  theme:'light-theme',
  toTop:false
}

// COUNTER REDUCER
const configReducer = (state = initialConfigState, action) => {
    switch (action.type) {
      case types.THEME:
        return {
          ...state,
          theme: state.theme=='light-theme'?'dark-theme':'light-theme'
        }
      case types.TOTOP:
        return {
          ...state,
          toTop: action.status
        }
      default:
        return state
    } 
  }
  
const initialContentState = {
    sayingList:[],
    sortList:[],
}
 

const contentReducer = (state = initialContentState, action) => {
  switch (action.type) {
    case types.SAYING:
      return {
        ...state,
        sayingList: action.list
      }
    case types.SORT:
      return {
        ...state,
        sortList: action.list
      }
    default:
      return state
  } 
}

  
  // COMBINED REDUCERS
  const reducers = {
    config: configReducer,
    content:contentReducer
  }
  
  export default combineReducers(reducers)