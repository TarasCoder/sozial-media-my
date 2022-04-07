import React from 'react'
import s from "./Post.module.css"

function Post(props) {
  return (
    <div className={s.wrapper}>
      <img src={props.img} alt="avatar" />
      <p>"{props.message}"</p>
      <p>Likes: {props.likes}</p>
    </div>
  )
}

export default Post
