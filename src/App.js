import "./App.css";
import Header from "./components/Header/Header";
import News from "./components/News/News";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import Messages from "./components/Messages/Messages";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App(props) {

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Profile dispatch={props.dispatch} dialogs={props.state.profilePage.dialogs} tempText={props.state.profilePage.tempText} />} />
          <Route path="/news" element={<News />} />
          <Route
            path="/messages/*"
            element={<Messages state={props} dispatch={props.dispatch} />}
          />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
