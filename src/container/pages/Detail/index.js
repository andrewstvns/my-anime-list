import React, { useEffect, useState } from 'react';
import classname from 'classnames';
import './styles.scss';
import { useParams } from 'react-router-dom';
import { AnimeDetail, Button, Header, Loader } from 'components';

const Detail = ({ className }) => {
  const { id } = useParams();

  const [animeDetail, setAnimeDetail] = useState({
    title: "",
    images: "",
    duration: "",
    id: "",
    synopsis: "",
    aired: "",
    rating: "",
    status: "",
    rank: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const getAnimeDetails = async () => {
    const temp = await 
          fetch(`https://api.jikan.moe/v4/anime/${id}`)
          .then(res => res.json());
    setAnimeDetail({
      title: temp.data.title,
      images: temp.data.images.jpg.large_image_url,
      duration: temp.data.duration,
      id: temp.data.mal_id,
      synopsis: temp.data.synopsis,
      aired: temp.data.aired.string,
      rating: temp.data.rating,
      status: temp.data.status,
      rank: temp.data.rank
    });
    setIsLoading(true);
  };

  useEffect (() => {
    getAnimeDetails();
  }, []);

  console.log('detail : ', animeDetail);

  const classNames = classname('p-detail', className);

  return (
    <div className={classNames}>
      <Header />
      {!isLoading ? (
        <Loader />
      ) : (
        <div className='container'>
          <div className='row'>
            <Button route to={'/'}>Back</Button>
            <AnimeDetail 
              title ={animeDetail.title} 
              img={animeDetail.images}
              id={animeDetail.id}
              desc={animeDetail.synopsis}
              aired={animeDetail.aired}
              rating={animeDetail.rating}
              status={animeDetail.status}
              duration={animeDetail.duration}
              rank={animeDetail.rank}
            />
          </div>
        </div>
      )}
    </div>
  )
};

export default Detail;