export const FETCH_TODO_LIST_SUCCESS = 'FETCH_TODO_LIST_SUCCESS';


export const fetchTodoListSuccess = (todolist) => ({
  type: FETCH_TODO_LIST_SUCCESS,
  payload: todolist
});


export const fetchTodoList = (url) => {
  return (dispatch) => {
    fetch(url)
    .then(response => response.json())
    .then(todolist => dispatch(fetchTodoListSuccess(todolist)))
  }
};
