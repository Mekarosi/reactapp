import React from 'react'
import { BrowserRouter,  Switch, Route} from 'react-router-dom'
import Clock from './Clock'
import Count from './Count'

const App = () => {
  return (
    <BrowserRouter>
       <Switch> 
      <Route exact path="/clock" component={Clock} />
      <Route exact path="/count" component={Count} /> 
    </Switch>
    </BrowserRouter>
   
  )
}

export default App  






