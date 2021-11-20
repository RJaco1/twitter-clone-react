import React from "react";
import "../../css/widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterTweetEmbed,
  TwitterShareButton,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

const Widgets = () => {
  return (
    <div>
      <div className="widgets">
        <div className="widgets__input">
          <SearchIcon className="widgets__searchIcon" />
          <input placeholder="Search Twitter" type="text" className="form-control"/>
        </div>

        <div className="widgets__widgetContainer">
          <h2>What's happening</h2>

          <TwitterTweetEmbed tweetId={"1459563497403170824"} />

          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="elonmusk"
            options={{ height: 400 }}
          />

          <TwitterShareButton
            url={"https://facebook.com/cleverprogrammer"}
            options={{ text: "#reactjs is awesome", via: "cleverqazi" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Widgets;
