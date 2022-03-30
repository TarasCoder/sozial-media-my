import "./App.css";
import Header from "./components/Header/Header";
import News from "./components/News/News";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <Header />
          <Sidebar />
          {/* <News /> */}
          <Routes>
            <Route path='/' element={<Profile />} />
            <Route path="/news" element={<News />} />
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
