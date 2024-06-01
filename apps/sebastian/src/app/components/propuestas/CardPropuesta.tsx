import { Propuesta } from './Propuesta';

export function CardPropuesta({
  propuesta: { id, texto, titulo },
}: {
  propuesta: Propuesta;
}) {
  const esPar = id % 2 === 0;

  const bgClass = esPar ? 'bg-redprimary' : 'border-2 border-redprimary';
  const fgClass = esPar ? 'text-white' : 'text-redprimary';

  return (
    <div
      aria-label="cardtrayectoria"
      className={`mt-12 rounded-2xl  shadow-md ${bgClass}`}
    >
      <div className="p-7 pt-1 lg:pt-2 pb-8">
        <h2 className={`font-bold text-2xl mt-4  ${fgClass}`}>{titulo}</h2>
        <p className={`text-base mt-4  ${fgClass}`}>{texto}</p>
      </div>
    </div>
  );
}
