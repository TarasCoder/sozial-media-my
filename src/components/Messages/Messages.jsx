import React from "react";
import { Link } from "react-router-dom";
import s from "./Messages.module.css";

function People(props) {
  let link = "/messages/" + props.id;
  return (
    <div className={s.people}>
      <Link to={link}>{props.name}</Link>
    </div>
  );
}

function Message(props) {
  return <div className={s.message}>{props.message}</div>;
}

function Messages(props) {
  let people = props.people;
  let messages = props.messages;
  return (
    <div className={s.messagesWrapper}>
      <div>
        {people.map((el) => {
          return <People name={el.userName} id={el.id} />;
        })}
      </div>

      <div className={s.messages}>
        {messages.map((el) => {
          return <Message message={el.message} />;
        })}
      </div>
    </div>
  );
}

export default Messages;
