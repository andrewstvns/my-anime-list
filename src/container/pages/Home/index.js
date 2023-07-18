import React, { Fragment, useEffect, useState } from 'react';
import classname from 'classnames';
import { Button, Card } from 'components';
import './styles.scss';

const Home = ({ className }) => {
  const [animeList, setAnimeList] = useState([]);
  const [search, setSearch] = useState('');

  const getAnimeList = async () => {
    const temp = await 
          fetch(`https://api.jikan.moe/v4/anime`)
          .then(res => res.json());
    setAnimeList(temp.data);
  }

  useEffect (() => {
    getAnimeList();
  }, []);

  console.log('anime:', animeList);

  const classNames = classname('p-home', className);
  return (
    <div className={classNames}>
      <div className='container'>
        <div className='row'>
          <h1>Home</h1>
          {animeList.map((i) => (
            <Fragment>
              <Card 
                name={i.title} 
                img={i.images.jpg.large_image_url}
                duration={i.duration}
              />
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  )
};

export default Home;