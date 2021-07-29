import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Navigation from "../Navigation/Navigation";
import PostsList from "../PostsList/PostsList";
import ToDoList from "../ToDoList/ToDoList";
import UserList from "../UserList/UserList";


export default function App() {
  return (
    <Router>
      <div>
        <Navigation />

        <Switch>
          <Route path="/todolist">
            <ToDoList />
          </Route>
          <Route path="/userlist">
            <UserList />
          </Route>
          <Route path="/">
            <PostsList />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}
