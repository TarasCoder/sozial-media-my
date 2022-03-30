import React from "react";
import s from "./Profile.module.css";

function Profile() {
  return (
    <div className={s.profileWrapper}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOAqbjQXaCVD_Zhpt5BXvccSaNRWWJFt_F0Q&usqp=CAU"
        alt="pic"
      />
      <p>ava + description</p>
      <p>My posts</p>
      <textarea name="" id="" cols="30" rows="5"></textarea>
      <button>Add post</button>

      {/* POST COMPONENTS!!! */}
    </div>
  );
}

export default Profile;
