import React from 'react';
import PropTypes from 'prop-types';
import {statistics, statList, item, label_css, percentage_css}from './Statistics.module.css';

const Statistics = ({ title, stats }) => (
  <section className={statistics}>
    {title && <h2>{title}</h2>}

    <ul className={statList}>
      {stats.map(stat => (
        <li key={stat.id} className={item}>
          <span className={label_css}>{stat.label}</span>
          <span className={percentage_css}>{stat.percentage}%</span>
        </li>))}
      </ul>
      
      
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default Statistics;
