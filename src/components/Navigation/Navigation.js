import React from "react";
import {Link} from "react-router-dom";


export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">PostsList</Link>
        </li>
        <li>
          <Link to="/todolist">TodoList</Link>
        </li>
        <li>
          <Link to="/userlist">UserList</Link>
        </li>
      </ul>
    </nav>
  )
}