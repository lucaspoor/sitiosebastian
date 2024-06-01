import info from '../../json/propuestas.json';
import { CardPropuesta } from './CardPropuesta';
import { CardPropuestaV2 } from './CardPropuestaV2';
import { Propuesta } from './Propuesta';

export default function PropuestasCards() {
  const propuestas = info as Array<Propuesta>;
  return (
    <div className="m-4">
      <div className="flex mt-12 lg:mt-44">
        <h1 className="font-arial font-bold text-3xl lg:text-4xl text-redprimary">
          Propuestas Principales
        </h1>
      </div>
      <div className="grid lg:grid-cols-3 gap-4">
        {propuestas.map((p) => (
          <CardPropuestaV2 propuesta={p} key={p.id} />
        ))}
      </div>
    </div>
  );
}
