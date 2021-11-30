/*
 * @Descripttion: 
 * @Author: Hades
 * @Date: 2021-01-26 10:10:09
 * @LastEditTime: 2021-11-30 21:08:19
 */
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <link data-n-head="true" rel="stylesheet" href="https://at.alicdn.com/t/font_1098415_6lewpvb5fgd.css" />
        <script src="http://hades0512.oss-cn-beijing.aliyuncs.com/live2d/L2Dwidget.min.js"></script>
        <script type="text/javascript" src="http://api.map.baidu.com/getscript?v=2.0&ak=UHK8DaNEaHq6eLZGE8PUeAXGIvgAnfoa"></script>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument