const profileReducer = (state, action) => {
  switch (action.type) {
    case "ADD-POST":
      let newDialog = {
        id: 5,
        message: action.textMessage,
        likesCount: 0,
        avatar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxLkbtTa0kfmKizxJgqECQLdlt_xq1R2jEQQ&usqp=CAU",
      };
      state.dialogs.push(newDialog);
      state.tempText = "";
      return state;
    case "CHANGE-TEXT":
      state.tempText = action.text;
      return state;
    default:
      return state;
  }
};

export const addPostActionCreator = (msg) => ({
  type: "ADD-POST",
  textMessage: msg,
});
export const chaningTextActionCreator = (msg) => ({
  type: "CHANGE-TEXT",
  text: msg,
});

export default profileReducer;
