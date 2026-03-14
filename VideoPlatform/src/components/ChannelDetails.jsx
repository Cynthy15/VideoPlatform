import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import VideoCard from './VideoCard';
import Loader from './Loader';

const ChannelDetails = () => {
  const { id } = useParams();

  const { data: channelDetail, isLoading: loadingChannel } = useQuery({
    queryKey: ['channel', id],
    queryFn: () => fetchFromAPI(`channels?part=snippet,statistics&id=${id}`),
  });

  const { data: channelVideos, isLoading: loadingVideos } = useQuery({
    queryKey: ['channelVideos', id],
    queryFn: () => fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`),
  });

  if (loadingChannel) return <Loader />;

  const channel = channelDetail?.items[0];
  if (!channel) return <div>Channel not found</div>;

  return (
    <div className="channel-details">
      <div className="banner">
        <img src={channel.snippet.thumbnails.high.url} alt={channel.snippet.title} />
        <h1>{channel.snippet.title}</h1>
        <p>{channel.statistics.subscriberCount} subscribers</p>
      </div>
      <div className="videos">
        {loadingVideos ? <Loader /> : channelVideos?.items?.map((item) => (
          <VideoCard key={item.id.videoId} video={item} />
        ))}
      </div>
    </div>
  );
};

export default ChannelDetails;