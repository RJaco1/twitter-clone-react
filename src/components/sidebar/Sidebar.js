import React, { useContext } from "react";
import { useHistory } from 'react-router-dom'
import "../../css/sidebar.css";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import RoomIcon from '@material-ui/icons/Room';
import { Button } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";

import SidebarOption from "./SidebarOption";
import AuthContext from '../../context/auth-context';

const Sidebar = () => {
  const authCtx = useContext(AuthContext);
  const history = useHistory();

  const handlerLogout = async () => {
    try {
      await authCtx.logout();
      history.push('/login')
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar__twitterIcon" />

      <SidebarOption active Icon={HomeIcon} text="Home" />
      <SidebarOption Icon={SearchIcon} text="Explore" />
      <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" />
      <SidebarOption Icon={MailOutlineIcon} text="Messages" />
      <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
      <SidebarOption Icon={ListAltIcon} text="Lists" />
      <SidebarOption Icon={PermIdentityIcon} text="Profile" />
      <SidebarOption Icon={MoreHorizIcon} text="More" />
      <div onClick={handlerLogout}>
        <SidebarOption Icon={RoomIcon} text="log out" />
      </div>

      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        Tweet
      </Button>
    </div>
  );
};

export default Sidebar;
