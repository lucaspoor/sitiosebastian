import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import json from './hero.json';

export default function Hero() {
  return (
    <div className="bg-[#282b6a]  ">
      <div className="flex justify-center">
        <Image
          src="/images/fotosebastian.png"
          width={500}
          height={500}
          alt="Picture of the author"
          className="p-6 pt-2 pb-0 lg:w-4/12 animate-fade-up animate-once animate-duration-[2000ms]"
        />
      </div>

      <div className="flex justify-center flex-col">
        <div className="flex space-x-10  justify-between lg:justify-center mc-a mt-4 px-6 pb-4  lg:mt-6 animate-fade animate-once animate-duration-[2000ms]">
          {json.iconos.map((i, it) => {
            return (
              <a
                href={i.href}
                className="block lg:px-5 transition-all duration-500  "
              >
                <svg
                  className="w-11 h-11 lg:w-20 lg:h-20 text-white hover:text-redprimary "
                  viewBox={i.view}
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d={i.path} fill="currentColor" />
                </svg>
              </a>
            );
          })}
        </div>

        <div className="flex flex-col lg:flex-row mx-auto lg:pb-8">
          <Link
            href="#linkcontacto"
            className="transition group ease-in-out delay-75 text-base  px-12 lg:text-xl lg:mx-4   hover:scale-110  duration-300 w-50 p-4 lg:px-8 lg:my-14 lg:my-12 mt-4 border-4 rounded-3xl xl font-bold bg-white border-redprimary flex  text-redprimary font-arial  hover:bg-redprimary justify-center hover:border-redprimary  hover:text-white  animate-fade-up animate-once animate-duration-[2000ms]"
          >
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-7 h-6 lg:w-20 lg:h-20 mr-2 text-redprimary group-hover:text-white duration-300 "
              viewBox="0 0 16 16"
            >
              <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
              <path d="M8 3.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132" />
            </svg> */}
            ¿Como te Ayudamos? Contáctanos
          </Link>
          <Link
            href="/programafinal.pdf"
            className="transition ease-in-out delay-75 group px-12 mb-16  lg:text-xl lg:mx-4   hover:scale-110  duration-300 p-4  lg:px-8 lg:my-14 mt-4  border-4 bg-black bg-opacity-30 rounded-3xl xl font-bold hover:bg-redprimary hover:border-redprimary  hover:text-white flex justify-center border-white font-arial text-white animate-fade-up animate-once animate-duration-[2000ms]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-7 h-6  mr-2 text-blueprimary group-hover:text-white duration-300 "
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM1.6 11.85H0v3.999h.791v-1.342h.803q.43 0 .732-.173.305-.175.463-.474a1.4 1.4 0 0 0 .161-.677q0-.375-.158-.677a1.2 1.2 0 0 0-.46-.477q-.3-.18-.732-.179m.545 1.333a.8.8 0 0 1-.085.38.57.57 0 0 1-.238.241.8.8 0 0 1-.375.082H.788V12.48h.66q.327 0 .512.181.185.183.185.522m1.217-1.333v3.999h1.46q.602 0 .998-.237a1.45 1.45 0 0 0 .595-.689q.196-.45.196-1.084 0-.63-.196-1.075a1.43 1.43 0 0 0-.589-.68q-.396-.234-1.005-.234zm.791.645h.563q.371 0 .609.152a.9.9 0 0 1 .354.454q.118.302.118.753a2.3 2.3 0 0 1-.068.592 1.1 1.1 0 0 1-.196.422.8.8 0 0 1-.334.252 1.3 1.3 0 0 1-.483.082h-.563zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638z"
              />
            </svg>
            Ver Programa de Gobierno
          </Link>
        </div>
      </div>
    </div>
  );
}
