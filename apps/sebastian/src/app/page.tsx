import { Formulario } from './components/Formulario';
import SeccionPropuestas from './components/propuestas/SeccionPropuestas';
import SeccionTrayectoria from './components/trayectoria/SeccionTrayectoria';
import Video from './components/VIdeo';
import Hero from './components/hero';
import Image from 'next/image';
import FooterTest from './components/footertest';
import ClickToChat from './components/wspchat';

export default function Index() {
  return (
    <>
      <div className="sticky z-50 top-0 font-semibold flex justify-between lg:text-xl bg-redprimary w-100 shadow-slate-800 shadow-md text-white lg:pl-14  lg:p-2 p-2 px-6  h-10 lg:h-10">
        <a href="#">@sebastianalvarez.cl</a>
        <a className="" href="#">
          #TODOSSOMOSPUCON
        </a>
      </div>
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

      <div className="w-100  bg-[#282b6a] flex m-0  justify-center pt-4 ">
        <Image
          src="/images/bannernombre.png"
          width={500}
          height={200}
          alt="Picture of the author"
          className=" m-auto p-1 lg:w-2/5 animate-fade animate-once animate-duration-[4000ms]"
        />
      </div>
      <Hero></Hero>

      <div className="mb-24 mt-10">
        <Video />
      </div>

      <SeccionTrayectoria />
      <SeccionPropuestas />

      <Formulario />
      <FooterTest></FooterTest>
    </>
  );
}
