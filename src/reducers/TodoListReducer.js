import { FETCH_TODO_LIST_SUCCESS } from '../actions/ToDoListActions';
  
const initialState = {
  todolist: []
};

export default function todoListReducer (state = initialState, action) {
  switch (action.type) {
    case FETCH_TODO_LIST_SUCCESS:
      return { 
        ...state,
        todolist: action.payload 
      }

    default:
      return state;
  }
}
