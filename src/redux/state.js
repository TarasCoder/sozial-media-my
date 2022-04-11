let store = {
  _state: {
    profilePage: {
      dialogs: [
        // {
        //   id: 1,
        //   message: "Hi there!",
        //   likesCount: 3,
        //   avatar:
        //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxLkbtTa0kfmKizxJgqECQLdlt_xq1R2jEQQ&usqp=CAU",
        // },
        // {
        //   id: 2,
        //   message: "Hi!",
        //   likesCount: 2,
        //   avatar:
        //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxLkbtTa0kfmKizxJgqECQLdlt_xq1R2jEQQ&usqp=CAU",
        // },
        // {
        //   id: 3,
        //   message: "Yo",
        //   likesCount: 1,
        //   avatar:
        //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxLkbtTa0kfmKizxJgqECQLdlt_xq1R2jEQQ&usqp=CAU",
        // },
        // {
        //   id: 4,
        //   message: "Yo yo yo!",
        //   likesCount: 8,
        //   avatar:
        //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxLkbtTa0kfmKizxJgqECQLdlt_xq1R2jEQQ&usqp=CAU",
        // },
        // {
        //   id: 5,
        //   message: "Hello from REDUX!",
        //   likesCount: -20,
        //   avatar:
        //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxLkbtTa0kfmKizxJgqECQLdlt_xq1R2jEQQ&usqp=CAU",
        // },
      ],
      tempText: "",
    },
    messagesPage: {
      people: [
        { id: 1, userName: "Sasha" },
        { id: 2, userName: "Sveta" },
        { id: 3, userName: "Maria" },
        { id: 4, userName: "Robert" },
        { id: 5, userName: "Bob" },
        { id: 6, userName: "Lilya" },
      ],
      messages: [
        { message: "Hi!" },
        { message: "Yo-yo!" },
        { message: "How are you?" },
        { message: "What's up?" },
      ],
      messageBody: "",
    },
  },
  getState() {
    return this._state;
  },
  _reRenderAll() {
    console.log("State changed!");
  },
  subscribe(observer) {
    this._reRenderAll = observer;
  },
  dispatch(action) {
    if (action.type === "ADD-POST") {
      let newDialog = {
        id: 5,
        message: action.textMessage,
        likesCount: 0,
        avatar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxLkbtTa0kfmKizxJgqECQLdlt_xq1R2jEQQ&usqp=CAU",
      };
      this._state.profilePage.dialogs.push(newDialog);
      this._state.profilePage.tempText = "";
      this._reRenderAll(this._state);
    } else if (action.type === "CHANGE-TEXT") {
      this._state.profilePage.tempText = action.text;
      this._reRenderAll(this._state);
    } else if (action.type === "UPDATE-NEW-MSG-BODY") {
      this._state.messagesPage.messageBody = action.text;
      this._reRenderAll(this._state);
    } else if (action.type === "ADD-NEW-MSG") {
      let newMsg = { message: this._state.messagesPage.messageBody };
      this._state.messagesPage.messages.push(newMsg);
      this._state.messagesPage.messageBody = "";
      this._reRenderAll(this._state);
    }
  },
};

export const addPostActionCreator = (msg) => ({
  type: "ADD-POST",
  textMessage: msg,
});
export const chaningTextActionCreator = (msg) => ({
  type: "CHANGE-TEXT",
  text: msg,
});
export const updateNewMsgBodyCreator = (msg) => ({
  type: "UPDATE-NEW-MSG-BODY",
  text: msg,
});
export const addNewMsgCreator = () => ({ type: "ADD-NEW-MSG" });

export default store;
