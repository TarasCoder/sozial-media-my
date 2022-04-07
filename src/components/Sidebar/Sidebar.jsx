import React from "react";
import s from "./Sidebar.module.css";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div>
      <ul className={s.menu}>
        <li>
          <Link to="/">Profile</Link>
        </li>
        <li>
          <Link to="/messages">Messages</Link>
        </li>
        <li>
          <Link to="/news">News</Link>
        </li>
        <li>
          <Link to="/music">Music</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
