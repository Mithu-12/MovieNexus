import { useEffect, useState } from 'react';
import './style.scss';
import { useNavigate } from 'react-router-dom';
import useFatch from '../../../hooks/useFatch';
import { useSelector } from 'react-redux';
import Img from '../../../Components/lazyLoadImg/Img';
import ContentWrapper from '../../../Components/contentWrapper/ContentWrapper';

const HeroBanner = () => {
  const [background, setBackground] = useState('');
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const searchQueryHandler = () => {
    if (query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      searchQueryHandler();
    }
  };
  const { data, loading } = useFatch('/movie/upcoming');
  const { url } = useSelector((state) => state.home);
  console.log(url);
  console.log(data);
  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, [data]);
  console.log(background);
  return (
    <div className="heroBanner">
      {!loading && (
        <div className="backdrop-img">
          <Img src={background} />
        </div>
      )}
      <div className="opacity-layer"></div>
      <ContentWrapper>
        <div className="heroBannerContent">
          <span className="title">Welcome.</span>
          <span className="sub-title">
            Millions of movies, TV shows and people to discover. Explore now.
          </span>
          <div className="searchInput">
            <input
              type="text"
              placeholder="search for a movie or tv shows"
              onKeyUp={handleKeyPress}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={searchQueryHandler}>Search</button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default HeroBanner;
