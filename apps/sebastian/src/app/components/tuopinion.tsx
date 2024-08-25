import Image from 'next/image';
import ButtonHero from './hero/utils/button';

export default function Tuopinion() {
  return (
    <div className="max-w-[1400px] mx-4 p-4 lg:pb-32 pb-20 lg:m-auto">
      <h3 className="text-redprimary"></h3>
      <div className="grid md:grid-cols-2 grid-cols-1 ">
        <div>
          <Image
            alt="foto"
            src="/images/tuopinion(1).png"
            width={1080}
            height={1080}
            className="animate-fade-right w-[600px]"
          ></Image>
        </div>
        <div className=" animate-fade-left md:pl-6 xl:pr-0 lg:pr-4">
          {' '}
          <h1 className="mb-6 font-arial mt-8 md:mt-0 font-bold text-3xl lg:text-4xl text-redprimary">
            Opiniones y sugerencias
          </h1>
          <p className="text-slate-500 mb-10 text-base xl:pr-8 mt-2">
            Tus opiniones y tus sugerencias son importantes para nosotros,en el
            siguiente formulario podras comunicarte con nosotros para así poder
            resolver tu duda, inquietud, y ademas que nos puedas decir que es lo
            que tu crees que hace falta para volver nuestra comuna mejor.{' '}
            <br></br>
            <br></br>¡Que esperas! ve a nuestro formulario y conecta con
            nosotros
          </p>
          <ButtonHero
            link="/contacto"
            className=""
            css="bg-blueprimary w-7/12 xl:px-5 hover:brightness-150"
            texto="Ir al Formulario"
          ></ButtonHero>
        </div>
      </div>
    </div>
  );
}
