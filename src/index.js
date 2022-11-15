import React, { Suspense } from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import store from './store'
import theme from './assets/theme'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'antd/dist/antd.less'
import 'normalize.css'
import './assets/css/index.less'
import { HashRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // <React.StrictMode>
  <HashRouter>
    <Provider store={store}>
      <Suspense fallback="loading">
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Suspense>
    </Provider>
  </HashRouter>
  //</React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
