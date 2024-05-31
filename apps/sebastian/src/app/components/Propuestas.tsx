import Image from 'next/image';
import info from '../json/propuestas.json';

export default function PropuestasCards() {
  return (
    <div>
      <div className="mt-1 lg:grid lg:px-10 xl:px-40 md:mx-20 px-6 grid-cols-3 gap-4">
        {info.map((s) => {
          return (
            <div
              aria-label="cardtrayectoria"
              className={`mt-12 rounded-2xl  shadow-md ${
                s.id % 2 ? 'bg-redprimary' : 'border-2 border-redprimary'
              }`}
            >
              <div className="p-7 pt-1 lg:pt-2 pb-8">
                <h2
                  className={`font-bold text-2xl mt-4  ${
                    s.id % 2 ? 'text-white' : 'text-redprimary'
                  }`}
                >
                  {s.titulo}
                </h2>
                <p
                  className={`text-base mt-4  ${
                    s.id % 2 ? 'text-white' : 'text-redprimary'
                  }`}
                >
                  {s.texto}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
