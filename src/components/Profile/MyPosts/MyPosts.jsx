import React from "react";
import Post from "./Post/Post";
import {addPostActionCreator, chaningTextActionCreator} from "../../../redux/state"

function MyPosts(props) {
  let dialogs = props.dialogs;
  let refLink = React.createRef();

  const addPost = () => {
    let newMsgP = refLink.current.value;
    props.dispatch(addPostActionCreator(newMsgP));
  };
  const changingText = () => {
    let newMsgCh = refLink.current.value;
    props.dispatch(chaningTextActionCreator(newMsgCh));
  };
  return (
    <div>
      <div>
        <p>My posts</p>
        <textarea
          cols="30"
          rows="5"
          ref={refLink}
          onChange={changingText}
          value={props.tempText}
        ></textarea>
        <button onClick={addPost}>Add post</button>
      </div>
      <div>
        {dialogs.map((el) => {
          return (
            <Post message={el.message} likes={el.likesCount} img={el.avatar} />
          );
        })}
      </div>
    </div>
  );
}

export default MyPosts;
