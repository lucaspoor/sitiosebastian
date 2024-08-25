import { Formulario } from './components/Formulario';
import SeccionPropuestas from './components/propuestas/SeccionPropuestas';
import SeccionTrayectoria from './components/trayectoria/SeccionTrayectoria';
import Video from './components/video/VIdeo';
import Hero from './components/hero/hero';

import FooterTest from './components/footertest';
import ClickToChat from './components/wspchat';

import Deshero from './components/hero/deshero';
import Link from 'next/link';
import SeccionVideo from './components/video/SeccionVideo';
import Tuopinion from './components/tuopinion';

export default function Index() {
  return (
    <>
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
      <SeccionVideo></SeccionVideo>
      <SeccionTrayectoria /> {/* hidratation error */}
      <SeccionPropuestas />
      <Tuopinion></Tuopinion>
    </>
  );
}
