import React, { useState, useEffect } from "react";
import "./YouTubeApi.css";

import "bootstrap/dist/css/bootstrap.min.css"; //

function YouTubeApi() {
  const [videos, setVideos] = useState([]);
  const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;
  const CHANNEL_ID = import.meta.env.VITE_REACT_APP_CHANNEL_ID;

  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=9&key=${API_KEY}&order=date`
    )
      .then((response) => response.json())
      .then((data) => {
        setVideos(data.items);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  console.log(videos);

  return (
    <div className="allVideosWrapper">
      <div className="container">
        <div className="row h-100 align-items-center justify-content-center text-center">
          <div className="col-12">
            <div className="title-wraper bold video-title-wrapper">
              <h1> Latest Videos</h1>
            </div>
          </div>
          {videos?.map((singleVideo, i) => {
            let videoId = singleVideo.id.videoId;
            let vidLink = `https://www.youtube.com/watch?v=${videoId}`;
            return (
              <div key={i} className="col-sm-12 col-md-4">
                <div className="singleVideoWrapper">
                  <div className="videoThumbnail">
                    <a href={vidLink} target="_blank" rel="noopener noreferrer">
                      <img
                        src={singleVideo.snippet.thumbnails.high.url}
                        alt={singleVideo.snippet.title}
                      />
                    </a>
                  </div>
                  <div className="videoInfoWrapper">
                    <div className="videoTitle">
                      <a
                        href={vidLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {singleVideo.snippet.title}
                      </a>
                    </div>
                    <div className="videoDesc ">
                      <br />
                      {singleVideo.snippet.description}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default YouTubeApi;
