'use client';
import { Fade } from 'react-awesome-reveal';
import Image from 'next/image';

import { Propuesta } from './Propuesta';

export function CardPropuestaV2({
  propuesta: { id, texto, titulo, image },
}: {
  propuesta: Propuesta;
}) {
  return (
    <Fade duration={500} delay={500}>
      <div aria-label="cardtrayectoria " className="mb-8">
        <div className="">
          <h2 className="font-bold text-2xl mb-6 ">{titulo}</h2>

          <Image
            src={`/images/${image}`}
            width={500}
            height={500}
            alt={titulo}
            className="mb-6"
          />
          <p className="text-slate-500 text-base mt-2">{texto}</p>
        </div>
      </div>
    </Fade>
  );
}
