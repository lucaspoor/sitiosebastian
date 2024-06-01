import info from '../../json/propuestas.json';
import { CardPropuesta } from './CardPropuesta';
import { CardPropuestaV2 } from './CardPropuestaV2';
import { Propuesta } from './Propuesta';

export default function PropuestasCards() {
  const propuestas = info as Array<Propuesta>;
  return (
    <div>
      <div className="mt-1 lg:grid lg:px-10 xl:px-40 md:mx-20 px-6 grid-cols-3 gap-4">
        {propuestas.map((p) => (
          <CardPropuestaV2 propuesta={p} key={p.id} />
        ))}
      </div>
    </div>
  );
}
