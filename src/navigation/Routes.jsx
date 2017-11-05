import React from 'react'
import { Switch, Route } from 'react-router-dom'

import * as pages from '../pages'

export default function Routes () {
  return (
    <Switch>
      <Route exact path='/' component={pages.Main} />
    </Switch>
  )
}
