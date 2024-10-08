import info from './propuestas.json';
import { Propuesta } from '../../types/Propuesta';
import { ItemsSection } from '../items/ItemsSection';

export default function SeccionPropuestas() {
  const propuestas = info as Array<Propuesta>;
  return (
    <div className="max-w-[1400px] mx-4 p-4 lg:m-auto">
      <div className="flex lg:mt-22 mt-10">
        <h1 className="mb-6 font-arial font-bold text-3xl lg:text-4xl text-redprimary">
          Ejes Principales
        </h1>
      </div>

      <ItemsSection items={propuestas} />
      <div id="linkcontacto" className="h-12" />
    </div>
  );
}
