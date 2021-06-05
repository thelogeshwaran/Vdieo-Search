import "./styles.css";
import React, { useEffect, useState } from "react";
import Searchbar from "./components/Searchbar";
import api from "./api/api";
import VideoList from "./components/VideoList";
import VideoPlayer from "./components/VideoPlayer";

export default function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const onSubmit = async (term) => {
    const response = await api.get("/search", {
      params: {
        q: term
      }
    });
    console.log(response.data);
    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
  };
  useEffect(() => {
    onSubmit("cars");
  }, []);
  return (
    <div className="ui container" style={{ marginTop: "10px" }}>
      <Searchbar onEnter={onSubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoPlayer video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList onSelect={setSelectedVideo} videolist={videos} />
          </div>
        </div>
      </div>
    </div>
  );
}
