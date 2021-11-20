import React from "react";
import "../../css/tweetBox.css";
import { Avatar, Button } from "@material-ui/core";

const TweetBox = () => {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" />
          <input
            placeholder="What's happening?"
            type="text"
            className="form-control"
          />
        </div>
        <div className="row">
          <div className="col">
            <input
              className="tweetBox__imageInput form-control"
              placeholder="Optional: Enter image URL"
              type="text"
            />
          </div>
        </div>
        <Button type="submit" className="tweetBox__tweetButton">
          Tweet
        </Button>
      </form>
    </div>
  );
};

export default TweetBox;
