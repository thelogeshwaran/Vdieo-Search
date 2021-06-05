import React, { useState } from "react";
import VideoCard from "./VideoCard";

const VideoList = ({ videolist, onSelect }) => {
  const results = videolist.map((video) => {
    return (
      <VideoCard key={video.id.videoId} video={video} onSelect={onSelect} />
    );
  });
  return <div className="ui relaxed divided list">{results}</div>;
};

export default VideoList;
