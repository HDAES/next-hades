/*
 * @Descripttion: 
 * @Author: Hades
 * @Date: 2021-01-26 10:32:19
 * @LastEditTime: 2021-01-27 21:43:33
 */
import * as types from './types'

export const changeTheme = () =>({type: types.THEME});

export const changeToTop = (status) =>({type: types.TOTOP,status});

export const setSaying = (list) =>({type: types.SAYING,list});

export const setHotArticle = (list) =>({type: types.HOTARTICLE,list});

export const setSort = (list) =>({type: types.SORT,list});

export const setArticleList = (list) =>({type: types.ARTICLE,list});