import React from 'react';
import { Link } from 'react-router-dom';

const ChannelCard = ({ channel }) => {
  const { id, snippet } = channel;
  const { title, thumbnails } = snippet;

  return (
    <Link to={`/channel/${id.channelId}`} className="channel-card">
      <img src={thumbnails.medium.url} alt={title} />
      <h3>{title}</h3>
    </Link>
  );
};

export default ChannelCard;