import { useState } from 'react';

import '../Home.scss'
import SwichTabs from '../../../Components/swichTabs/SwichTabs';
import useFatch from '../../../hooks/useFatch';
import Carousel from '../../../Components/carousel/Carousel';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
const Popular = () => {
  const [endPoint, setEndPoint] = useState('movie')

  const {data, loading} = useFatch(`/${endPoint}/popular`)

  const onTabChanged = (tab) =>{
    setEndPoint(tab === 'Movies' ? 'movie' : 'tv')
  }
  return <div className='carouselSection'>
    <ContentWrapper>
        <span className="carouselTitle">Whats Popular</span>
        <SwichTabs data={['Movies', 'TV Shows']} onTabChange={onTabChanged}></SwichTabs>
        
    </ContentWrapper>
    <Carousel data={data?.results} loading={loading} endPoint={endPoint}/>
  </div>;
};

export default Popular;
