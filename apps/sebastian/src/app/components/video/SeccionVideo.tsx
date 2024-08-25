import Video from './VIdeo';

export default function SeccionVideo() {
  return (
    <div className="flex justify-center w-full">
      <div className=" mt-16 xl:mt-24 gap-6 p-8 pb-0 md:flex justify-center max-w-[1400px]">
        <div className="w-full md:w-1/2">
          <h1 className="mb-6 font-arial font-bold text-3xl lg:text-4xl text-redprimary">
            ¿Quien es Sebastian Alvarez?
          </h1>
          <p className="text-slate-500 mb-10 text-base xl:pr-8 mt-2">
            Vecinas y vecinos, soy Sebastián Alvarez Ramirez, tengo 53 años y el
            pasado 9 de Junio en las elecciones primarias muchos de ustedes me
            eligieron para representarlos en esta elección municipal. Tengo años
            de experiencia en el mundo político, he sido docente y también
            emprendedor y quiero que sepan que hoy estoy mas preparado que nunca
            para afrontar el desafío de ser quien lidere nuestra comuna por los
            próximos 4 años. Me he preparado, tengo la experiencia, las ganas y
            los conocimientos para ser el Alcalde de Pucón.
          </p>
        </div>
        <Video />
      </div>
    </div>
  );
}
