'use client';
import { Fade } from 'react-awesome-reveal';

import { Propuesta } from './Propuesta';

export function CardPropuestaV2({
  propuesta: { id, texto, titulo },
}: {
  propuesta: Propuesta;
}) {
  return (
    <Fade duration={500} delay={500}>
      <div aria-label="cardtrayectoria " className="mb-7">
        <div className="">
          <h2 className="font-bold text-2xl mt-2 ">{titulo}</h2>
          <p className="text-slate-800 text-base mt-2">{texto}</p>
        </div>
      </div>
    </Fade>
  );
}
