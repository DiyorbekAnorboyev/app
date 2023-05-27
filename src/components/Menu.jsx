import { Avatar } from "@mui/material";
import React from "react";
import "./Menu.css";

function Menu() {
  const username = {name: "diyorbek"}
  return (
    <div className="suggestions">
      <div className="suggestions__title">Menu for you</div>
      <div className="suggestions__usernames">
        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>{username.name.charAt(0).toUpperCase()}</Avatar>
            </span>
            <div className="username__info">
              <span className="username">{username.name}</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>

        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>{username.name.charAt(0).toUpperCase()}</Avatar>
            </span>
            <div className="username__info">
              <span className="username">{username.name}</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>

        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>{username.name.charAt(0).toUpperCase()}</Avatar>
            </span>
            <div className="username__info">
              <span className="username">{username.name}</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>

        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>{username.name.charAt(0).toUpperCase()}</Avatar>
            </span>
            <div className="username__info">
              <span className="username">{username.name}</span>
              <span className="relation">New to Instagram</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>
      </div>
    </div>
  );
}

export default Menu;