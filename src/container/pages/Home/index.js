import React, { Fragment, useEffect, useState } from 'react';
import classname from 'classnames';
import { Card, Header, Loader } from 'components';
import './styles.scss';

const Home = ({ className }) => {
  const [animeList, setAnimeList] = useState([]);
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const getAnimeList = async () => {
    const temp = await 
          fetch(`https://api.jikan.moe/v4/anime`)
          .then(res => res.json());
    setAnimeList(temp.data);
    setIsLoading(true);
  }

  useEffect (() => {
    getAnimeList();
  }, []);

  console.log('anime:', animeList);

  const classNames = classname('p-home', className);
  return (
    <div className={classNames}>
      <Header />
      {!isLoading ? (
        <Loader /> 
      ) : (
      <div className='container'>
        <div className='row'>
          {animeList.map((i) => (
            <Fragment>
              <Card 
                name={i.title} 
                img={i.images.jpg.large_image_url}
                duration={i.duration}
                listId={i.mal_id}
                list
              />
            </Fragment>
          ))}
        </div>
      </div>
      )}
    </div>
  )
};

export default Home;