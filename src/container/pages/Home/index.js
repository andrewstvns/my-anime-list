import React, { Fragment, useEffect, useState } from 'react';
import classname from 'classnames';
import { Card, Header, Loader, FormSearch } from 'components';
import './styles.scss';

const Home = ({ className }) => {
  const [animeList, setAnimeList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState('');

  useEffect (() => {
    getAnimeList();
  }, []);

  const getAnimeList = async () => {
    let getUrl;

    if(search) {
      getUrl = `https://api.jikan.moe/v4/anime?q=${search}`
    } else {
      getUrl = `https://api.jikan.moe/v4/top/anime`
    }
    const temp = await 
          fetch(getUrl)
          .then(res => res.json());

    setAnimeList(temp.data);
    setIsLoading(true);
    console.log(temp)
  };

  console.log('anime:', animeList);

  const handleSearchAnime = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmitSearch = () => {
    getAnimeList();
  };

  const classNames = classname('p-home', className);
  return (
    <div className={classNames}>
      <Header />
      {!isLoading ? (
        <Loader /> 
      ) : (
      <div className='container'>
        <div className='row'>
          <FormSearch 
            onChange={handleSearchAnime} 
            onSubmit={handleSubmitSearch}
            value={search}
            name={search}>
              Search
          </FormSearch>
          <Card 
            animeList={animeList}
            list
          />
        </div>
      </div>
      )}
    </div>
  )
};

export default Home;