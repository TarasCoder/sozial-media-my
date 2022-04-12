import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";

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
    profileReducer(this._state.profilePage, action);
    messagesReducer(this._state.messagesPage, action);
    this._reRenderAll(this._state);
  },
};

export default store;
