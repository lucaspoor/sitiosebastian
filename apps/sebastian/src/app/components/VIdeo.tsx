'use client';
import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player/youtube';

export default function Video() {
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHasWindow(true);
    }
  }, []);
  return (
    <div className="h-64 mt-8 lg:m-40 ">
      {hasWindow && (
        <ReactPlayer
          url="https://www.youtube.com/embed/7VBCroFUZHU?si=tLFfbgqYQ24Qvylg"
          width="100%"
          height="100%"
        />
      )}
    </div>
  );
}
