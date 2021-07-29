import { FETCH_POSTS_LIST_SUCCESS } from '../actions/PostsListActions';
  
const initialState = {
  postslist: []
};

export default function postsListReducer (state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS_LIST_SUCCESS:
      return { 
        ...state,
        postslist: action.payload 
      }

    default:
      return state;
  }
}
