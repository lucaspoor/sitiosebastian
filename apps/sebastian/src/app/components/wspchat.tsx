'use client';
import React, { ReactElement, ReactNode } from 'react';

const URL = 'https://wa.me';

type props = {
  numero: string;
  message: string;
  children: ReactNode;
};

export default function ClickToChat({ numero, message, children }: props) {
  let url = `${URL}/${numero}`;

  if (message) {
    url += `/?text=${encodeURI(message)}`;
  }

  return (
    <a
      aria-label="Chat on WhatsApp"
      className="fixed w-16 lg:hidden block h-16 bottom-6 bg-[#25d366] text-3xl shadow-md rounded-full right-6 z-10 flex justify-center items-center "
      onClick={(e) => {
        window.open(url);

        // if (onClick) {
        //   onClick(e);
        // }
      }}
    >
      {children}
    </a>
  );
}
