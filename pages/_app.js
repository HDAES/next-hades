/*
 * @Descripttion: 
 * @Author: Hades
 * @Date: 2021-01-25 21:22:32
 * @LastEditTime: 2021-01-31 18:27:51
 */
import { Provider } from 'react-redux'
import { useStore } from '../store/store'
import '../styles/reset.less'
import '../styles/main.less'
import 'antd/dist/antd.css'

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
