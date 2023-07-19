import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import { Link } from 'react-router-dom';
import './styles.scss';

const Card = ({ listId, img, name, duration, desc, list, className }) => {
  const classNames = classname('card', className, {
    'card__list': list
  });
  return (
    <div className={classNames}>
      {list && (
        <Link key={listId} to={`detail/${listId}`}>
          <div className='card__card-img'>
            <img src={img} alt={name} className='card__card-image'/>
          </div>
          <div className='card__card-desc-wrapper'>
            <p className='card__card-title'>{name}</p>
            <p className='card__card-duration'>{duration}</p>
          </div>
        </Link>
      )}
      {!list && (
        <Fragment>
          <div className='card__card-img'>
            <img src={img} alt={name} className='card__card-image'/>
          </div>
          <div className='card__card-desc-wrapper'>
            <p className='card__card-title'>{name}</p>
            <p className='card__card-desc'>{desc}</p>
          </div>
        </Fragment>
      )}
    </div>
  )
};

Card.propTypes = {
  className: PropTypes.string,
  img: PropTypes.string,
  name: PropTypes.string,
  duration: PropTypes.string,
  desc: PropTypes.string,
  listId: PropTypes.any,
  list: PropTypes.bool
};

Card.defaultProps = {
  className: '',
  img: '',
  name: '',
  duration: '',
  desc: '',
  listId: 0,
  list: false
};

export default Card;