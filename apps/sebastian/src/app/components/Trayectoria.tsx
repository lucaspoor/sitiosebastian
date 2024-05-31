import Image from 'next/image';
import info from '../json/trayectoria.json';

interface Seccion {
  titulo: string;
  texto: string;
  image: string;
}

export default function TrayectoriaCards() {
  return (
    <div className="mt-1">
      {info.map((s) => {
        return (
          <div
            aria-label="cardtrayectoria "
            className="mt-7 border-2 lg:flex lg:inline-block rounded-lg border-gray-200 shadow-xl"
          >
            <Image
              src={s.image}
              width={500}
              height={280}
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
