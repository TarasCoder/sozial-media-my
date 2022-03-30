import React from "react";
import s from "./Sidebar.module.css";
import {Link} from "react-router-dom";

function Sidebar() {
  return (
    <div>
      <ul className={s.menu}>
        <li>
          <Link to="/">Profile</Link>
        </li>
        <li>Messages</li>
        <li>
          <Link to="/news">News</Link>
        </li>
        <li>Music</li>
        <li>Settings</li>
      </ul>
    </div>

  );
}

export default Sidebar;
