/*
 * @Descripttion: 
 * @Author: Hades
 * @Date: 2021-01-26 10:10:09
 * @LastEditTime: 2021-01-26 10:11:30
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
        <link data-n-head="true" rel="stylesheet" href="https://at.alicdn.com/t/font_1098415_0zignt6uzdgd.css" />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument