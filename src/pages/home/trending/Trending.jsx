import React, { useState } from 'react';
import ContentWrapper from '../../../Components/contentWrapper/ContentWrapper';
import '../Home.scss'
import SwichTabs from '../../../Components/swichTabs/SwichTabs';
import useFatch from '../../../hooks/useFatch';
import Carousel from '../../../Components/carousel/Carousel';
const Trending = () => {
  const [endPoint, setEndPoint] = useState('day')

  const {data, loading} = useFatch(`/trending/all/${endPoint}`)

  const onTabChanged = (tab) =>{
    setEndPoint(tab === 'Day' ? 'day' : 'week')
  }
  return <div className='carouselSection'>
    <ContentWrapper>
        <span className='carouselTitle'>Trending</span>
        <SwichTabs data={['Day', 'Week']} onTabChange={onTabChanged}></SwichTabs>
        
    </ContentWrapper>
    <Carousel data={data?.results} loading={loading}/>
  </div>;
};

export default Trending;
