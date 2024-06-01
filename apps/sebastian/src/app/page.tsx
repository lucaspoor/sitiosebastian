import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
</svg>;
import Footer from './components/Footer';
import { Formulario } from './components/Formulario';
import PropuestasCards from './components/propuestas/Propuestas';
import TrayectoriaCards from './components/Trayectoria';
import Video from './components/VIdeo';
import Hero from './components/hero';
import Image from 'next/image';

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

      <div className="w-100 bg-blueprimary flex m-0  justify-center mt-16 ">
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
