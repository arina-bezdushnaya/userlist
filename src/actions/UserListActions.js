export const FETCH_USER_LIST_SUCCESS = 'FETCH_USER_LIST_SUCCESS';


export const fetchUserListSuccess = (userlist) => ({
  type: FETCH_USER_LIST_SUCCESS,
  payload: userlist
});


export const fetchUserList = (url) => {
  return (dispatch) => {
    fetch(url)
    .then(response => response.json())
    .then(userlist => dispatch(fetchUserListSuccess(userlist)))
  }
};
