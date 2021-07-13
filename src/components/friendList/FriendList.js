import React from 'react';
import PropTypes from 'prop-types';
import { friendList, avatar_css, name_css, item, online, offline, title } from './FriendList.module.css';

const FriendList = ({ friends }) => (
  <ul className={friendList}>
    <span className = {title}>Friend List</span>
      {friends.map(friend => (
        <li className={item}>
          <span className={friend.isOnline ? online : offline}>{ friend.isOnline}</span>
          <img className={avatar_css} src={friend.avatar} alt="" width="80" />
          <p className={name_css}>{friend.name}</p>
</li>))}
      </ul>
);


FriendList.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired
};

export default FriendList;