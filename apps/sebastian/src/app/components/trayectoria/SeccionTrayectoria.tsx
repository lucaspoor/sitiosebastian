'use client';
import { Trayectoria } from '../../types/Trayectoria';
import { ItemsSection } from '../items/ItemsSection';
import info from './trayectoria.json';

export default function SeccionTrayectoria() {
  const trayectorias = info as Array<Trayectoria>;
  return (
    <div className="max-w-[1200px] m-4 lg:m-auto">
      <div className="flex mt-12 lg:mt-44">
        <h1 className="mb-6 font-arial font-bold text-3xl lg:text-4xl text-redprimary">
          Trayectoria
        </h1>
      </div>
      <ItemsSection items={trayectorias} />
    </div>
  );
}
