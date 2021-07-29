import React from "react";
import { connect } from 'react-redux';
import { fetchTodoList } from '../../actions/ToDoListActions';


const ToDoList = ({todolist, fetchTodoList}) => {
  return (
    <div className="content">
      <div className="content__action">
        <button onClick={() => fetchTodoList('https://jsonplaceholder.typicode.com/todos')}>
          get TodoList
        </button>
      </div>

      <div className="content__result" >
        <ul> 
          {todolist.map(todo => (
            <li key={todo.id}>
              <>
                <h3><b>id:</b> {todo.id}</h3>
                <p><b>userId:</b> {todo.userId}</p>
                <p><b>title:</b> {todo.title}</p>
                <p><b>completed:</b> {String(todo.completed)}</p>
              </>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}


export default connect(
  state => ({
    todolist: state.todolist.todolist
  }),
  dispatch => ({
    fetchTodoList: (url) => dispatch(fetchTodoList(url))
  })
)(ToDoList);
