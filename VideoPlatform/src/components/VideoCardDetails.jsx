import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import VideoPlayer from './VideoPlayer';
import VideoCard from './VideoCard';
import Loader from './Loader';

const VideoCardDetails = () => {
  const { id } = useParams();

  const { data: videoDetail, isLoading: loadingDetail } = useQuery({
    queryKey: ['video', id],
    queryFn: () => fetchFromAPI(`videos?part=snippet,statistics&id=${id}`),
  });

  const { data: relatedVideos, isLoading: loadingRelated } = useQuery({
    queryKey: ['related', id],
    queryFn: () => fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`),
  });

  if (loadingDetail) return <Loader />;

  const video = videoDetail?.items[0];
  if (!video) return <div>Video not found</div>;

  return (
    <div className="video-details">
      <div className="main-video">
        <VideoPlayer videoId={id} />
        <h1>{video.snippet.title}</h1>
        <p>{video.snippet.description}</p>
        <div className="stats">
          <span>{video.statistics.viewCount} views</span>
          <span>{video.statistics.likeCount} likes</span>
        </div>
      </div>
      <div className="related">
        {loadingRelated ? (
          <Loader />
        ) : (
          relatedVideos?.items
            ?.filter((item) => !!item.id?.videoId)
            .map((item) => <VideoCard key={item.id.videoId} video={item} />)
        )}
      </div>
    </div>
  );
};

export default VideoCardDetails;