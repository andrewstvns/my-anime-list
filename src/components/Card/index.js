import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import './styles.scss';

const Card = ({ img, name, duration, className }) => {
  const classNames = classname('card', className);
  return (
    <div className={classNames}>
      <div className='card__card-img'>
        <img src={img} alt={name} className='card__card-image'/>
      </div>
      <div className='card__card-desc-wrapper'>
        <a target='_self' href='/detail' className='card__card-link'>
          <span className='card__card-title'>{name}</span>
        </a>
        <p className='card__card-duration'>{duration}</p>
      </div>
    </div>
  )
};

Card.propTypes = {
  className: PropTypes.string,
  img: PropTypes.string,
  name: PropTypes.string,
  duration: PropTypes.string
};

Card.defaultProps = {
  className: '',
  img: '',
  name: '',
  duration: ''
};

export default Card;