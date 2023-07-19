import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import { Card } from 'components';
import './styles.scss';

const AnimeDetail = ({ 
  title, 
  img, 
  desc, 
  id, 
  aired,
  duration,
  rating,
  status,
  rank,
  className 
}) => {
  const classNames = classname('anime-detail', className);
  return (
    <div className={classNames}>
      <Card 
        img={img}
        listId={id}
      />
      <div className='anime-detail__anime-desc-wrapper'>
        <div className='anime-detail__anime-desc-section'>
          <h2 className='anime-detail__anime-title'>{title}</h2>
          <p className='anime-detail__anime-duration'>{duration}</p>
          <p className='anime-detail__anime-rating'>{rating}</p>
          <div className='anime-detail__anime-synopsis-wrapper'>
            <h4>Synopsis: </h4>
            <p className='anime-detail__anime-desc'>{desc}</p>
          </div>
          <h4>Aired: </h4>
          <p className='anime-detail__anime-aired'>{aired}</p>
          <h4>Status: </h4>
          <p className='anime-detail__anime-status'>{status}</p>
          <h4>Rank: </h4>
          <p className='anime-detail__anime-rank'>{rank}</p>
        </div>
      </div>
    </div>
  )
};

AnimeDetail.propTypes = {
  className: PropTypes.string,
  img: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
  aired: PropTypes.string,
  duration: PropTypes.string,
  rating: PropTypes.string,
  status: PropTypes.string,
  rank: PropTypes.string,
  id: PropTypes.any
};

AnimeDetail.defaultProps = {
  className: '',
  img: '',
  title: '',
  duration: '',
  desc: '',
  aired: '',
  rating: '',
  status: '',
  rank: '',
  id: 0,
  list: false
};

export default AnimeDetail;