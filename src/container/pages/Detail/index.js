import React, { useEffect, useState } from 'react';
import classname from 'classnames';
import './styles.scss';
import { useParams } from 'react-router-dom';
import { Card } from 'components';

const Detail = ({ className }) => {
  const { id } = useParams();

  const [animeDetail, setAnimeDetail] = useState({
    title: "",
    images: "",
    duration: "",
    id: ""
  });

  const getAnimeDetails = async () => {
    const temp = await 
          fetch(`https://api.jikan.moe/v4/anime/${id}`)
          .then(res => res.json());
    setAnimeDetail({
      title: temp.data.title,
      images: temp.data.images.jpg.large_image_url,
      duration: temp.data.duration,
      id: temp.data.mal_id
    });
  };

  useEffect (() => {
    getAnimeDetails();
  }, []);

  console.log('detail : ', animeDetail);

  const classNames = classname('p-detail', className);

  return (
    <div className={classNames}>
      <div className='container'>
        <div className='row'>
          <h1>Detail</h1>
          <Card 
            name={animeDetail.title} 
            img={animeDetail.images}
            duration={animeDetail.duration}
            listId={animeDetail.id}
          />
        </div>
      </div>
    </div>
  )
};

export default Detail;