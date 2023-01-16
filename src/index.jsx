import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Pages/Home'
import PostsListView from './Pages/Posts'
import OnePost from './Pages/OnePost'
import Upload from './Pages/Upload'
import Account from './Pages/Account'
import Header from './Components/Header'
import Error from './Components/Error'
import { Login } from './Components/Registration/Login'
import { Register } from './Components/Registration/Register'
import Auth from './Components/Registration/Auth'
import PrivateRoute from './PrivateRoute'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/">
          <Header />
          <Home />
        </Route>
        <Route exact path="/login">
          <Auth />
        </Route>
        <Route exact path="/posts">
          <Header />
          <PostsListView />
        </Route>
        <Route path="/posts/:post_id">
          <Header />
          <OnePost />
        </Route>
        <Route path="/upload">
          <Header />
          <Upload />
        </Route>
        <PrivateRoute path="/account" component={Account} />
        {/* <Header />
          <Account /> */}
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>
)