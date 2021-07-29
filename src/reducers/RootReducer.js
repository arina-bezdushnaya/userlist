import { combineReducers } from "redux";
import postsListReducer from "./PostsListReducer";
import todoListReducer from "./TodoListReducer";
import userListReducer from "./UserListReducer";


const RootReducer = combineReducers({
  postslist: postsListReducer,
  todolist: todoListReducer,
  userlist: userListReducer
});


export default RootReducer;