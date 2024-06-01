import Image from 'next/image';
import Link from 'next/link';
import Video from './VIdeo';

export default function Hero() {
  return (
    <div className="lg:mx-20   ">
      <div className="flex justify-center">
        <Image
          src="/images/fotosebastian.png"
          width={500}
          height={500}
          alt="Picture of the author"
          className="pt-10 lg:w-5/12 animate-fade-up animate-once animate-duration-[2000ms]"
        />
      </div>

      <div className="flex justify-center">
        <Link
          href="#linkscroll"
          className="p-2 rounded-lg px-14 mt-12  border-4 font-bold hover:bg-redprimary hover:text-white  border-redprimary font-arial text-blueprimary animate-fade-up animate-once animate-duration-[2000ms]"
        >
          {'> '} Más Información
        </Link>
      </div>
    </div>
  );
}
