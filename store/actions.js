/*
 * @Descripttion: 
 * @Author: Hades
 * @Date: 2021-01-26 10:32:19
 * @LastEditTime: 2021-01-28 11:10:39
 */
import * as types from './types'

export const changeTheme = () =>({type: types.THEME});

export const changeToTop = (status) =>({type: types.TOTOP,status});

export const setSaying = (list) =>({type: types.SAYING,list});

export const setSort = (list) =>({type: types.SORT,list});
