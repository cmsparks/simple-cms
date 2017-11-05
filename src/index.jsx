import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import Router from './navigation'
import 'shared/style/globals'

ReactDOM.render(
  <BrowserRouter>
    <Router />
  </BrowserRouter>
  , document.getElementById('app')
)
