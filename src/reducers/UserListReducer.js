import { FETCH_USER_LIST_SUCCESS } from '../actions/UserListActions';
  
const initialState = {
  userlist: []
};

export default function userListReducer (state = initialState, action) {
  switch (action.type) {
    case FETCH_USER_LIST_SUCCESS:
      return { 
        ...state,
        userlist: action.payload 
      }

    default:
      return state;
  }
}
