import React from 'react';
import Auth from '../components/Auth';
import RewardSystem from '../components/RewardSystem';
import FollowerExchange from '../components/FollowerExchange';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const App = () => {
  return (
    <div>
      <Auth />
      <RewardSystem />
      <FollowerExchange />
    </div>
  );
};

export default App;
