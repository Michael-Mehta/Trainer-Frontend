import React, { useState, useRef, useEffect } from 'react';
import myVideo from './training.mp4';

function HomeVideo() {
  const videoRef = useRef(null);
  const [videoState, setVideoState] = useState({});

  function handleVideoStateChange() {
    setVideoState({
      currentTime: videoRef.current.currentTime,
      paused: videoRef.current.paused,
      volume: videoRef.current.volume
    });
  }

  useEffect(() => {
    const videoElement = videoRef.current;
    videoElement.addEventListener('timeupdate', handleVideoStateChange);
    videoElement.addEventListener('pause', handleVideoStateChange);
    videoElement.addEventListener('volumechange', handleVideoStateChange);

    return () => {
      videoElement.removeEventListener('timeupdate', handleVideoStateChange);
      videoElement.removeEventListener('pause', handleVideoStateChange);
      videoElement.removeEventListener('volumechange', handleVideoStateChange);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem('videoState', JSON.stringify(videoState));
  }, [videoState]);

  useEffect(() => {
    const savedState = localStorage.getItem('videoState');
    if (savedState) {
      setVideoState(JSON.parse(savedState));
    }
  }, []);

  return (
    <div>
      <video className = 'home-vid' ref={videoRef} src={myVideo} controls autoPlay loop />
    </div>
  );
}

export default HomeVideo;
