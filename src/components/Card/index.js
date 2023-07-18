import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import { Link } from 'react-router-dom';
import './styles.scss';

const Card = ({ listId, img, name, duration, className }) => {
  const classNames = classname('card', className);
  return (
    <div className={classNames}>
      <Link key={listId} to={`detail/${listId}`}>
        <div className='card__card-img'>
          <img src={img} alt={name} className='card__card-image'/>
        </div>
        <div className='card__card-desc-wrapper'>
          <p className='card__card-title'>{name}</p>
          <p className='card__card-duration'>{duration}</p>
        </div>
      </Link>
    </div>
  )
};

Card.propTypes = {
  className: PropTypes.string,
  img: PropTypes.string,
  name: PropTypes.string,
  duration: PropTypes.string,
  listId: PropTypes.any
};

Card.defaultProps = {
  className: '',
  img: '',
  name: '',
  duration: '',
  listId: 0
};

export default Card;