import Link from 'next/link';

export default function ButtonHero({ link, css, texto }: any) {
  return (
    <Link
      href={link}
      className={`w-full px-10  sm:px-20 xl:px-32 lg:py-5 py-3 md:px-10  transition ease-in-out delay-75 group  xl:text-xl md:text-base   hover:scale-110  duration-300   border-4  rounded-2xl xl font-bold   hover:text-white flex justify-center border-white font-arial text-white animate-fade-up animate-once animate-duration-[2000ms] ${css}`}
    >
      {texto}
    </Link>
  );
}
