import React from 'react'
import { useLocation } from 'wouter';

export const Navigation = () => {
  const [location, setLocation] = useLocation();

  const handleNavigation = (path: any) => {
    setLocation(path);
  };

  return (
    <nav>
      <ul>
        <li onClick={() => handleNavigation('/')}>Login</li>
        <li onClick={() => handleNavigation('/review')}>Write a Review</li>
        <li onClick={() => handleNavigation('/activity')}>Activity Feed</li>
      </ul>
    </nav>
  );
};