import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <div className="sticky w-full  top-0 z-40 ">
      <div className="sticky font-semibold flex items-center justify-between lg:text-xl bg-redprimary w-100 shadow-slate-800 shadow-md text-white lg:pl-20  lg:p-2 p-2 px-6  h-16 lg:h-20">
        <Link href="/">
          <Image
            src="/images/sebastianlogopucon.png"
            width={1336}
            height={1336}
            className=" xl:w-44 lg:w-40 sm:w-32 w-32   lg:right-40"
            alt="Picture of the author"
          />
        </Link>
        <Link
          className="rounded-md hover:border-blueprimary hover:bg-blueprimary border-2 border-w flex items-center py-2 lg:py-3  px-4 lg:mr-14 mr-1  animation"
          href="/contacto"
        >
          Contáctanos
        </Link>

        <Image
          src={'/images/hero/z52.png'}
          width={400}
          height={500}
          alt={''}
          className="w-20 absolute top-14 right-10 lg:w-28 lg:top-20 lg:right-14 xl:right-16 "
        ></Image>
      </div>
    </div>
  );
}
