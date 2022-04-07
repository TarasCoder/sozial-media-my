import React from "react";
import Post from "./Post/Post";

function MyPosts(props) {
  let dialogs = props.dialogs;
  let refLink = React.createRef();

  const addPost = () => {
    let newMsg = refLink.current.value;
    props.addPost(newMsg);
  };
  const changingText = () =>{
    let newMsg = refLink.current.value;
    props.changeText(newMsg);
  }
  return (
    
    <div>
      <div>
        <p>My posts</p>
        <textarea 
          cols="30" 
          rows="5" 
          ref={refLink} 
          onChange={changingText} 
          value={props.tempText}>
        </textarea>
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
