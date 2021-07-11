import React from 'react';
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => (
    <ul className="friend-list">
      {friends.map(friend => (
      <li className="item">
              <span className="status">{ friend.isOnline}</span>
  <img className="avatar" src={friend.avatar} alt="" width="48" />
              <p className="name">{friend.name}</p>
</li>))}
      </ul>
);


FriendList.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired
};

export default FriendList;