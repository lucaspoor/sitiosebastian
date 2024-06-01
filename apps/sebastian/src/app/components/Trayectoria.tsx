import Image from 'next/image';
import info from '../json/trayectoria.json';

interface Seccion {
  titulo: string;
  texto: string;
  image: string;
}

export default function TrayectoriaCards() {
  return (
    <div className="mt-9 lg:grid lg:px-10 xl:px-40 md:mx-20 px-6 grid-cols-3 gap-4">
      {info.map((s) => {
        return (
          <div
            aria-label="cardtrayectoria "
            className="mt-7 border-2 rounded-lg border-gray-200 shadow-xl animate-fade-up animate-once animate-duration-[4000ms]"
          >
            <Image
              src={s.image}
              width={500}
              height={280}
              style={{
                width: '100%',
                display: 'block',
                maxHeight: '100vh',
                objectFit: 'cover',
              }}
              alt="Picture of the author"
              className="rounded-t-lg"
            />
            <div className="p-6 pt-3 pb-10 ">
              <h2 className="font-bold text-2xl mt-2 text-blueprimary ">
                {s.titulo}
              </h2>
              <p className="text-blueprimary text-base mt-2">{s.texto}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
