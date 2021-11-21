import React, { forwardRef, useState, useEffect } from 'react';
import { Avatar } from '@material-ui/core';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';
import { Modal, Button, Row } from 'react-bootstrap';

import '../../css/post.css';
import db from '../../services/firebase';
import { doc, updateDoc } from 'firebase/firestore';

const Post = forwardRef(
  (
    { displayName, username, verified, text, image, avatar, like, postId },
    ref
  ) => {
    const [color, setColor] = useState('');
    const [show, setShow] = useState(false);
    const [followStyle, setFollowStyle] = useState(false);
    const [follow, setFollow] = useState('Follow');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
      like ? setColor('red') : setColor('');
    }, [like]);

    const updateLike = async () => {
      like ? (like = false) : (like = true);
      const postRef = doc(db, 'posts', postId);
      await updateDoc(postRef, {
        like: like,
      });
    };

    const updateFollow = () => {
      if (follow === 'Follow') {
        setFollow('Unfollow');
      } else {
        setFollow('Follow');
      }
    };

    return (
      <div className="post" ref={ref}>
        <div className="post__avatar">
          <Avatar src={avatar} />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {displayName}{' '}
                <span className="post__headerSpecial">
                  {verified && <VerifiedUserIcon className="post__badge" />} @
                  {username}
                </span>
              </h3>
              <Button
                type="submit"
                className="tweetBox__followButton"
                onClick={updateFollow}
              >
                {follow}
              </Button>
            </div>
            <div className="post__headerDescription">
              <p>{text}</p>
            </div>
          </div>
          <img src={image} alt="" type="button" onClick={handleShow} />
          <div className="post__footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon
              fontSize="small"
              type="button"
              onClick={() => updateLike()}
              style={{ color: color }}
            />
            <PublishIcon fontSize="small" />
          </div>
        </div>

        <Modal show={show} onHide={handleClose} centered>
          <Modal.Body>
            <Row>
              <img src={image} alt="" />
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
);

export default Post;
