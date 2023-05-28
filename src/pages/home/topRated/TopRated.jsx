import React, { useState } from 'react';
import ContentWrapper from '../../../Components/contentWrapper/ContentWrapper';
import '../Home.scss'
import SwichTabs from '../../../Components/swichTabs/SwichTabs';
import useFatch from '../../../hooks/useFatch';
import Carousel from '../../../Components/carousel/Carousel';
const TopRated = () => {
  const [endPoint, setEndPoint] = useState('movie')

  const {data, loading} = useFatch(`/${endPoint}/top_rated`)

  const onTabChanged = (tab) =>{
    setEndPoint(tab === 'Movies' ? 'movie' : 'tv')
  }
  return <div className='carouselSection'>
    <ContentWrapper>
        <span className="carouselTitle">Top Rated </span>
        <SwichTabs data={['Movies', 'TV Shows']} onTabChange={onTabChanged}></SwichTabs>
        
    </ContentWrapper>
    <Carousel data={data?.results} loading={loading} endPoint={endPoint}/>
  </div>;
};

export default TopRated;
