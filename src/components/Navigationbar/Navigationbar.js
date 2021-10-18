import React, { useState, useEffect } from "react";
import "./Navigationbar.css";
import SearchIcon from "@material-ui/icons/Search";
import { useDispatch, useSelector } from "react-redux";
import { authUser } from "../../redux/actions/authUser/actionCreators";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import Avatar from "@material-ui/core/Avatar";

function Navigationbar() {
  const logMeOut = () => {
    document.cookie = "jwt" + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  };

  const state = useSelector((state) => {
    return state;
  });

  const dispatch = useDispatch();
  const token = document.cookie.split("=")[1];
  const [count, setCount] = useState(0);

  useEffect(() => {
    dispatch(authUser(token));
  }, []);

  useEffect(() => {
    setCount((prevState) => prevState + 1);
  }, [state.authUserReducer.loading]);

  if (!state.authUserReducer.authorize) {
    return (
      <div className="navigationBar">
        <div className="left">Live</div>

        <div className="center">
          <input type="text" placeholder="Search Live" />
          <SearchIcon className="searchIcon" />
        </div>

        <div className="right">
          <a className="logIn" href="http://localhost:3000/login">
            Login
          </a>

          <a href="http://localhost:3000/register" id="signUp">
            Sign Up
          </a>
        </div>
      </div>
    );
  } else {
    return (
      <div className="navigationBarLI">
        <div className="leftLI">
          <HomeIcon className="homeIcon" />
          <MenuIcon className="menuIcon" />
        </div>

        <div className="centerLI">
          <input type="text" placeholder="Search Live" />
          <SearchIcon className="searchIcon" />
        </div>

        <div className="rightLI">
          <NotificationsIcon className="notificationIcon" />
          <CalendarTodayIcon className="calendarIcon" />
          <Avatar
            className="profileLI"
            alt="Remy Sharp"
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
          />
          <a href="http://localhost:3000/login" onClick={logMeOut} id="signUp">
            Logout
          </a>
        </div>
      </div>
    );
  }
}

export default Navigationbar;
