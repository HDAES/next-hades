/*
 * @Descripttion: 
 * @Author: Hades
 * @Date: 2021-01-25 21:39:46
 * @LastEditTime: 2021-01-31 18:15:08
 */
const withCss = require('@zeit/next-css')
const withLess = require('@zeit/next-less')
module.exports = withLess(withCss())