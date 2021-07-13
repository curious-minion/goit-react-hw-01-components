import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from './defaultAvatar.svg';
import { profile, name_css, description, tag_css, location_css,label, quantity,stats_css, avatar_css,stats_item} from './Profile.module.css';

const Profile = ({ avatar, name, tag, location, stats }) => (
  
    <div className={profile}>
    <div className={description}>
      <img src={avatar} alt="Аватар пользователя" className={avatar_css} width="100"/>
      <p className={name_css}>{name}</p>
      <p className={tag_css}>@{tag}</p>
      <p classname={location_css}>{location}</p>
    </div>

    <ul className={stats_css}>
      <li className={stats_item}>
        <span className={label}>Followers</span>
        <span className={quantity}>{stats.followers}</span>
      </li>
     <li className={stats_item}>
        <span className={label}>Views</span>
        <span class={quantity}>{stats.views}</span>
      </li>
      <li className={stats_item}>
        <span className={label}>Likes</span>
        <span className={quantity}>{stats.likes}</span>
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
