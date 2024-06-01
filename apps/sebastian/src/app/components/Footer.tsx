import Image from 'next/image';

export default function Footer() {
  return (
    <div className=" mt-20 bg-redprimary">
      <Image
        src="/images/sebastianlogopucon.png"
        width={500}
        height={500}
        alt="Picture of the author"
        className="p-10 m-auto "
      />

      <div className="flex justify-center border-t-2 border-white p-5">
        {' '}
        <p className="text-white text-lg font-semibold">
          desarrollado por
        </p>{' '}
        <a
          className="text-white text-lg pl-2 underline font-semibold"
          href="https://www.pooweb.cl/"
        >
          {' '}
          Pooweb.cl
        </a>
      </div>
    </div>
  );
}
