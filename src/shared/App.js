import React, { Component } from 'react'
import { Switch, Navlink, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import NoMatch from './components/NoMatch'
import UniversalDataloader from './components/UniversalDataloader'

import routes from './routes'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <p>Hello SSR Render</p>
        <Switch>
          {routes.map(({ path, exact, Component, ...rest }) => (
            <Route
              key={path}
              path={path}
              exact={exact}
              render={(props) => (
                <UniversalDataloader {...props} {...rest}>
                  {(dataProps) => <Component {...dataProps} />}
                </UniversalDataloader>
              )}
            />
          ))}

          <Route render={(props) => <NoMatch {...props} />} />
        </Switch>
      </main>
    </div>
  )
}

export default App
