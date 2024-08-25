'use client';
import { useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import ReactPlayer from 'react-player/youtube';

export default function Video() {
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHasWindow(true);
    }
  }, []);
  return (
    <Fade duration={300} delay={200} triggerOnce className="md:w-1/2 w-full">
      <div className="w-full h-56 xl:h-96  md:h-80  flex justify-center">
        <div className=" h-full w-full ">
          {hasWindow && (
            <ReactPlayer
              url="https://www.youtube.com/embed/7VBCroFUZHU?si=tLFfbgqYQ24Qvylg"
              width="100%"
              height="100%"
            />
          )}
        </div>
      </div>
    </Fade>
  );
}
