import { reRenderAll } from "../render";

let state = {
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
  },
};

export const addPost = (textMessage) => {
  let newDialog = {
    id: 5,
    message: textMessage,
    likesCount: 0,
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxLkbtTa0kfmKizxJgqECQLdlt_xq1R2jEQQ&usqp=CAU",
  };
  state.profilePage.dialogs.push(newDialog);
  state.profilePage.tempText = "";
  reRenderAll(state);
};

export const changeText = (text) => {
  console.log(text);
  state.profilePage.tempText = text;
  reRenderAll(state);
};

export default state;
