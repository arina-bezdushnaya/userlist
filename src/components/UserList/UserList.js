import React from "react";
import { connect } from 'react-redux';
import { fetchUserList } from '../../actions/UserListActions';
import {
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import { UserItem } from '../UserItem/UserItem';


const UserList = ({userlist, fetchUserList}) => {
  let { path, url } = useRouteMatch();

  return (

    <div className="content">

      <div className="content__action">
        <button onClick={() => fetchUserList('https://jsonplaceholder.typicode.com/users')}>
          get UserList
        </button>
      </div>
  
      <div className="content__result" >
        <ul> 
          {userlist.map(user => ( 
            <li key={user.id}>
              <Switch>
                <Route exact path={path}></Route>
                <Route path={`${path}/${user.id}`} >
                  <UserItem {...user} />
                </Route>
              </Switch>
              
              <Link to={`${url}/${user.id}`}>
                <>
                  <p><b>name:</b> {user.name}</p>
                  <p><b>username:</b> {user.username}</p>
                  <hr/>
                </>
              </Link>

            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}


export default connect(
  state => ({
    userlist: state.userlist.userlist
  }),
  dispatch => ({
    fetchUserList: (url) => dispatch(fetchUserList(url))
  })
)(UserList);
