import React, { useState, useEffect } from 'react';
import VideoPlayer from './VideoPlayer';

const RewardSystem = () => {
  const [rewards, setRewards] = useState(0);
  const [videoUrl, setVideoUrl] = useState('VIDEO_URL'); // Replace with actual video URL

  const handleVideoEnd = () => {
    // Award rewards for watching the video
    setRewards(rewards + 1);
  };

  return (
    <div>
      <p>Rewards: {rewards}</p>
      <VideoPlayer videoUrl={videoUrl} onVideoEnd={handleVideoEnd} />
    </div>
  );
};

export default RewardSystem;
