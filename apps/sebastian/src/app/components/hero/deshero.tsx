'use client';

import Image from 'next/image';
import Link from 'next/link';
import ButtonHero from './utils/button';
import useWindowDimensions from '../../utils/getviewport';
import { useEffect, useState } from 'react';

export default function Deshero() {
  const { width, height } = useWindowDimensions();
  const [desktop, setDesktop] = useState(false);
  const dispositivo = () => {
    width === undefined
      ? ''
      : width > 760
      ? setDesktop(true)
      : setDesktop(false);
  };
  useEffect(() => {
    dispositivo();
  });
  return (
    <div
      style={{
        backgroundImage: desktop
          ? 'url(/images/hero/bg.png)'
          : 'url(/images/hero/bgmov.png)',
      }}
      className="w-full flex bg-contain md:flex-row flex-col-reverse md:p-6  xl:p-12 md:px-10 xl:pt-20  px-4 "
    >
      {!desktop && (
        <div className="flex flex-col gap-6 pt-4 pb-8 mx-auto">
          <ButtonHero
            texto="¿Como te Ayudamos? Contáctanos"
            link="#linkcontacto"
            className="bg-red"
            css="bg-redprimary"
          ></ButtonHero>
          <ButtonHero
            texto="Ver Programa de Gobierno"
            link="/programa.pdf"
            css="bg-blueprimary"
          ></ButtonHero>
        </div>
      )}

      <div>
        <Image
          src={
            desktop ? '/images/hero/A-27(2).png' : '/images/hero/A-27(5).png'
          }
          width={1336}
          height={1336}
          className="md:w-10/12 w-full py-8 "
          alt="Picture of the author"
        />
      </div>

      <div className="flex flex-col py-4 items-center">
        <Image
          src="/images/hero/A-27.png"
          width={936}
          height={259}
          className="w-[936px] h-auto"
          alt="Picture of the author"
        />
        {desktop && (
          <div>
            <Image
              src="/images/hero/A-27(3).png"
              width={470}
              height={211}
              className="xl:w-[600px] lg:w-[450px] md:w-[300px] lg:pt-12 lg:pb-20 pt-6 pb-8  h-auto"
              alt="Picture of the author"
            />
            <div className="flex flex-col gap-6 mx-auto">
              <ButtonHero
                texto="¿Como te Ayudamos? Contáctanos"
                link="#linkcontacto"
                className="bg-red"
                css="bg-redprimary"
              ></ButtonHero>
              <ButtonHero
                texto="Ver Programa de Gobierno"
                link="/programa.pdf"
                css="bg-blueprimary"
              ></ButtonHero>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
