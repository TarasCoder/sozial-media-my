import React from "react";
import { Link } from "react-router-dom";
import s from "./Messages.module.css";
import { updateNewMsgBodyCreator, addNewMsgCreator } from "../../redux/messagesReducer";

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
  let people = props.state.state.messagesPage.people;
  let messages = props.state.state.messagesPage.messages;

  function changeText(ev) {
    props.dispatch(updateNewMsgBodyCreator(ev.target.value));
  }
  function addMessage() {
    props.dispatch(addNewMsgCreator());
  }

  return (
    <div>
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
      <textarea
        cols="60"
        rows="10"
        value={props.state.state.messagesPage.messageBody}
        onChange={changeText}
      ></textarea>
      <div>
        <button onClick={addMessage}>Add</button>
      </div>
    </div>
  );
}

export default Messages;
