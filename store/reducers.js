/*
 * @Descripttion: 
 * @Author: Hades
 * @Date: 2021-01-26 10:15:09
 * @LastEditTime: 2021-01-26 10:43:04
 */
import { combineReducers } from 'redux'
import * as types from './types'

 // INITIAL TIMER STATE
 const initialTimerState = {
    theme:'light-theme'
  }

// COUNTER REDUCER
const configReducer = (state = initialTimerState, { type }) => {
    switch (type) {
      case types.THEME:
        return {
            theme: state.theme=='light-theme'?'dark-theme':'light-theme'
        }
      default:
        return state
    } 
  }
  
 
  
  // TIMER REDUCER
//   const timerReducer = (state = initialTimerState, { type, payload }) => {
//     switch (type) {
//       case types.TICK:
//         return {
//           lastUpdate: payload.ts,
//           light: !!payload.light,
//         }
//       default:
//         return state
//     }
//   }
  
  // COMBINED REDUCERS
  const reducers = {
    config: configReducer
  }
  
  export default combineReducers(reducers)