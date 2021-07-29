import React from "react";
import { connect } from 'react-redux';
import { asyncfetchPostsList } from '../../actions/PostsListActions';


export const PostsList = ({postslist, fetchPostsList}) => {
  return (
    <div className="content">
      <div className="content__action">
        <button onClick={() => fetchPostsList('https://jsonplaceholder.typicode.com/posts')}>
          get PostsList
        </button>
      </div>

      <div className="content__result" >
        <ul> 
          {postslist.map(post => (
            <li key={post.id}>
              <>
                <h3><b>id:</b> {post.id}</h3>
                <p><b>body:</b> {post.body}</p>
                <p><b>userId:</b> {post.userId}</p>
                <p><b>title:</b> {post.title}</p>
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
    postslist: state.postslist.postslist
  }),
  dispatch => ({
    fetchPostsList: (url) => dispatch(asyncfetchPostsList(url))
  })
)(PostsList);
