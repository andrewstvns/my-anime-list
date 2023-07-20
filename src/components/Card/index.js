import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import { Link } from 'react-router-dom';
import './styles.scss';

const Card = ({ 
  img, 
  name,
  desc, 
  list,
  animeList,
  character,
  charaList,
  className 
}) => {
  const classNames = classname('card', className, {
    'card__list': list
  });

  return (
    <div className={classNames}>
      {list && (
        <ul>
          {animeList.map((data) => (
            <li className='card__card-list-wrapper'>
              <Link key={data.mal_id} to={`detail/${data.mal_id}`}>
                <div className='card__card-img'>
                  <img src={data.images.jpg.large_image_url} alt={data.title} className='card__card-image'/>
                </div>
                <div className='card__card-desc-wrapper'>
                  <p className='card__card-title'>{data.title}</p>
                  <p className='card__card-duration'>{data.duration}</p>
                </div>
              </Link>
            </li>
          ))}
      </ul>
      )}
      {!list && !character && (
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
      {character && (
        <ul>
          {charaList.map((data) => (
            <li className='card__card-chara-wrapper'>
              <div className='card__card-chara-img'>
                <img src={data.character.images.jpg.image_url} alt={data.character.name} className='card__card-chara-image'/>
              </div>
              <p className='card__card-chara-name'>{data.character.name}</p>
            </li>
          ))}
        </ul>
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
  list: PropTypes.bool,
  character: PropTypes.bool,
  animeList: PropTypes.node,
  charaList: PropTypes.node
};

Card.defaultProps = {
  className: '',
  img: '',
  name: '',
  duration: '',
  desc: '',
  listId: 0,
  list: false,
  character: false,
  animeList: {},
  charaList: {}
};

export default Card;