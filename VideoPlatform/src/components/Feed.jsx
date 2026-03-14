import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import VideoCard from './VideoCard';
import Loader from './Loader';

const Feed = () => {
  const { query } = useParams();
  const selectedCategory = query || 'Home';

  const { data, isLoading, error } = useQuery({
    queryKey: ['videos', selectedCategory],
    queryFn: () =>
      fetchFromAPI(`search?part=snippet&type=video&maxResults=50&q=${selectedCategory}`),
  });

  if (isLoading) return <Loader />;
  if (error) return <div>Error loading videos</div>;

  return (
    <div className="feed">
      <div className="videos">
        {data?.items?.map((item) => (
          <VideoCard key={item.id?.videoId || item.id} video={item} />
        ))}
      </div>
    </div>
  );
};

export default Feed;