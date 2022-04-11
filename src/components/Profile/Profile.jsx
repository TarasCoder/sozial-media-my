import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts"
function Profile(props) {
  return (
    <div className={s.profileWrapper}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOAqbjQXaCVD_Zhpt5BXvccSaNRWWJFt_F0Q&usqp=CAU"
        alt="pic"
      />
      <p>ava + description</p>
    <MyPosts dispatch={props.dispatch} dialogs={props.dialogs} tempText={props.tempText} />
    </div>
  );
}

export default Profile;
