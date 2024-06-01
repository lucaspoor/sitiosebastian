import Footer from './components/Footer';
import { Formulario } from './components/Formulario';
import PropuestasCards from './components/propuestas/Propuestas';
import TrayectoriaCards from './components/Trayectoria';
import Video from './components/VIdeo';
import Hero from './components/hero';
import Image from 'next/image';
import Animate from './utils/scrollanimation';

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

      <div className="w-100 bg-blueprimary flex m-0  justify-center mt-16 animate-fade animate-once animate-duration-[4000ms]">
        <Image
          src="/images/bannernombre.png"
          width={500}
          height={200}
          alt="Picture of the author"
          className=" m-auto p-1 lg:w-2/5"
        />
      </div>
      <Hero></Hero>

      <div className="">
        <div className="w-100 justify-center flex mt-12">
          <h1 className="font-arial font-bold text-3xl lg:text-4xl text-redprimary">
            Conoce al Candidato
          </h1>
        </div>

        <Video></Video>
      </div>
      <div className="w-100 justify-center flex mt-12 lg:mt-44">
        <h1 className="font-arial font-bold text-3xl lg:text-4xl mt-16 text-blueprimary">
          Trayectoria de Sebastián
        </h1>
      </div>

      <TrayectoriaCards></TrayectoriaCards>

      <div className="w-100 justify-center flex mt-12 lg:mt-44">
        <h1 className="font-arial font-bold text-3xl lg:text-4xl text-redprimary">
          Propuestas Principales
        </h1>
      </div>
      <PropuestasCards></PropuestasCards>
      <div className="">
        <div className="w-100 justify-center flex mt-24 lg:mt-44 ">
          <h1 className="font-arial font-bold text-3xl lg:text-4xl text-blueprimary">
            ¡Ponte en contacto!
          </h1>
          <p></p>
        </div>
        <Formulario />
      </div>
      <Footer></Footer>
    </>
  );
}
