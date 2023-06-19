import React from 'react';
import '../../App.css';
import { AppRouter } from './Router';
import { Navigation } from './Navigation';

function App() {
  return (
    <div>
      <Navigation />
      <AppRouter />
    </div>
  )
}

export default App;
