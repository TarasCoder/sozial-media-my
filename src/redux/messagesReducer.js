const messagesReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE-NEW-MSG-BODY":
      state.messageBody = action.text;
      return state;
    case "ADD-NEW-MSG":
      let newMsg = { message: state.messageBody };
      state.messages.push(newMsg);
      state.messageBody = "";
      return state;
    default:
      return state;
  }
};

export const updateNewMsgBodyCreator = (msg) => ({
  type: "UPDATE-NEW-MSG-BODY",
  text: msg,
});
export const addNewMsgCreator = () => ({ type: "ADD-NEW-MSG" });

export default messagesReducer;
