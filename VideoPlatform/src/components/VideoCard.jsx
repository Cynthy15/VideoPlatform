import React from 'react';
import { Link } from 'react-router-dom';

const VideoCard = ({ video }) => {
  const videoId = video?.id?.videoId || video?.id;
  const { snippet } = video;

  if (!videoId || !snippet) return null;

  return (
    <Link to={`/video/${videoId}`} className="video-card">
      <img
        src={snippet.thumbnails?.medium?.url}
        alt={snippet.title}
        loading="lazy"
      />
      <div className="info">
        <h3>{snippet.title}</h3>
        <p>{snippet.channelTitle}</p>
      </div>
    </Link>
  );
};

export default VideoCard;
