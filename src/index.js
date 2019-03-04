import React from 'react'
import ReactDOM from 'react-dom'

import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function Index () {
  return <App />
}

function About () {
  return <h2>About</h2>
}

function Users () {
  return <h2>Users</h2>
}

const rootReducer = (asyncReducers) => {
  return combineReducers({
    ...asyncReducers
  })
}

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about/'>About</Link>
            </li>
            <li>
              <Link to='/users/'>Users</Link>
            </li>
          </ul>
        </nav>

        <Route path='/' exact component={Index} />
        <Route path='/about/' component={About} />
        <Route path='/users/' component={Users} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
