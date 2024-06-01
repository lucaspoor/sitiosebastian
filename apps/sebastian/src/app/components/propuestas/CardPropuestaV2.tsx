import Image from 'next/image';
import { Propuesta } from './Propuesta';

export function CardPropuestaV2({
  propuesta: { id, texto, titulo },
}: {
  propuesta: Propuesta;
}) {
  return (
    <div aria-label="cardtrayectoria " className="mt-7 ">
      <div className="p-6 pt-3 pb-10 ">
        <h2 className="font-bold text-2xl mt-2 ">{titulo}</h2>
        <p className="text-slate-800 text-base mt-2">{texto}</p>
      </div>
    </div>
  );
}
