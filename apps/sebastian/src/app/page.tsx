import { Formulario } from './components/Formulario';
import SeccionPropuestas from './components/propuestas/SeccionPropuestas';
import SeccionTrayectoria from './components/trayectoria/SeccionTrayectoria';
import Video from './components/VIdeo';
import Hero from './components/hero/hero';
import Image from 'next/image';
import FooterTest from './components/footertest';
import ClickToChat from './components/wspchat';

import Deshero from './components/hero/deshero';

export default function Index() {
  return (
    <>
      <div className="sticky z-40 top-0 font-semibold flex justify-between lg:text-xl bg-redprimary w-100 shadow-slate-800 shadow-md text-white lg:pl-14  lg:p-2 p-2 px-6  h-10 lg:h-10">
        <a href="#">@sebastianalvarez.cl</a>
      </div>
      <Image
        src="/images/votaz27.png"
        width={1336}
        height={1336}
        className="2xl:w-52 xl:w-44 lg:w-40 sm:w-32 w-24 fixed  top-0 lg:right-40 right-8 z-50"
        alt="Picture of the author"
      />
      <ClickToChat
        numero="+56992934365"
        message="¡Hola! Cuéntanos en que te podemos ayudar"
      >
        {' '}
        <img
          alt="Chat on WhatsApp"
          src="/images/whatsapp.svg"
          className="w-12 h-12 lg:hidden ml-[2px] "
        ></img>
      </ClickToChat>
      {/* <Hero></Hero> */}
      <Deshero></Deshero>
      <div className="mb-24 mt-10">
        <Video />
      </div>
      <SeccionTrayectoria /> {/* hidratation error */}
      <SeccionPropuestas />
      <Formulario />
      <FooterTest></FooterTest>
    </>
  );
}
