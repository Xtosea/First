import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Auth = () => {
  const [user, setUser] = useState(null);
  const [authUrl, setAuthUrl] = useState('');

  useEffect(() => {
    const clientId = 'YOUR_CLIENT_ID';
    const redirectUri = 'YOUR_REDIRECT_URI';
    const scope = 'user.info.basic,video.list';
    const authUrl = `https://open-api.tiktok.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=code`;
    setAuthUrl(authUrl);
  }, []);

  const handleAuth = () => {
    window.location.href = authUrl;
  };

  return (
    <div>
      {user ? (
        <div>Welcome, {user.nickname}!</div>
      ) : (
        <button onClick={handleAuth}>Authenticate with TikTok</button>
      )}
    </div>
  );
};

export default Auth;
