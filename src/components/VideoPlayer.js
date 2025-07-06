import React, { useState, useEffect } from 'react';

const VideoPlayer = ({ videoUrl, onVideoEnd }) => {
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);

  useEffect(() => {
    const videoElement = document.getElementById('video-player');
    if (videoElement) {
      videoElement.addEventListener('ended', handleVideoEnd);
      return () => {
        videoElement.removeEventListener('ended', handleVideoEnd);
      };
    }
  }, []);

  const handleVideoEnd = () => {
    setVideoEnded(true);
    onVideoEnd(); // Call the callback function when the video ends
  };

  const handlePlayVideo = () => {
    setVideoPlaying(true);
    const videoElement = document.getElementById('video-player');
    if (videoElement) {
      videoElement.play();
    }
  };

  return (
    <div>
      <video
        id="video-player"
        width="100%"
        height="100%"
        controls
        src={videoUrl}
      >
        Your browser does not support the video tag.
      </video>
      {!videoPlaying && (
        <button onClick={handlePlayVideo}>Play Video</button>
      )}
      {videoEnded && <p>Video ended. You earned rewards!</p>}
    </div>
  );
};

export default VideoPlayer;
