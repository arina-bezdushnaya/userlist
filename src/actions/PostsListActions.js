export const FETCH_POSTS_LIST_SUCCESS = 'FETCH_POSTS_LIST_SUCCESS';


export const fetchPostsListSuccess = (postslist) => ({
  type: FETCH_POSTS_LIST_SUCCESS,
  payload: postslist
});


export const asyncfetchPostsList = (url) => {
  return (dispatch) => {
    fetch(url)
    .then(response => response.json())
    .then(postslist => dispatch(fetchPostsListSuccess(postslist)))
  }
};
