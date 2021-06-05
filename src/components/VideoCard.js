import React from "react";
import "./VideoCard.css";

const VideoCard = ({ video, onSelect }) => {
  return (
    <div className="item video-item" onClick={() => onSelect(video)}>
      <img className="ui image" src={video.snippet.thumbnails.medium.url} />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoCard;
