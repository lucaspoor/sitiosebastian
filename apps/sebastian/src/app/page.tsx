import { Formulario } from './components/Formulario';
import SeccionPropuestas from './components/propuestas/SeccionPropuestas';
import SeccionTrayectoria from './components/trayectoria/SeccionTrayectoria';
import Video from './components/VIdeo';
import Hero from './components/hero';
import Image from 'next/image';
import FooterTest from './components/footertest';

export default function Index() {
  return (
    <>
      <div className="sticky z-50 top-0 font-semibold lg:text-xl bg-redprimary w-100 shadow-slate-800 shadow-md text-white lg:pl-14  lg:p-2 p-1  pl-7 h-8 lg:h-10">
        <i className="fa fa-instagram" aria-hidden="true"></i>
        @sebastianalvarez.cl
      </div>
      <Image
        src="/images/votaA10.png"
        width={100}
        height={100}
        alt="Picture of the author"
        className="fixed top-0 z-50 lg:w-32 md:w-32 right-8 lg:right-24 shadow-gray-700 shadow-md"
      />

      <div className="w-100 bg-[#282b6a] flex m-0  justify-center pt-12 ">
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
