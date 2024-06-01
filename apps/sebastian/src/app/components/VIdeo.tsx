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
    <Fade duration={500} delay={500}>
      <div className="w-100 justify-center flex mt-12">
        <h1 className="font-arial font-bold text-3xl lg:text-4xl text-redprimary">
          Conoce al Candidato
        </h1>
      </div>
      <div className="w-100 h-56 xl:h-96  md:h-80 md:mx-32 xl:m-28 lg:mx-0 m flex justify-center">
        <div className=" h-full  lg:w-2/5 w-full m-7">
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
