import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from './defaultAvatar.svg';

const Profile = ({ avatar, name, tag, location, stats }) => (
  <div className="profile">
    <div className="description">
      <img src={avatar} alt="Аватар пользователя" className="avatar" />
      <p className="name">{name}</p>
      <p className="tag">@{tag}</p>
      <p classname="location">{location}</p>
    </div>

    <ul class="stats">
      <li>
        <span class="label">Followers</span>
        <span class="quantity">{stats.followers}</span>
      </li>
      <li>
        <span class="label">Views</span>
        <span class="quantity">{stats.views}</span>
      </li>
      <li>
        <span class="label">Likes</span>
        <span class="quantity">{stats.likes}</span>
      </li>
    </ul>
  </div>
);

Profile.defaultProps = {
  avatar: defaultImage,
};

Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};

export default Profile;
