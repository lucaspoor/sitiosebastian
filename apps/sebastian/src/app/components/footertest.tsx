import Image from 'next/image';
import json from '../components/hero/hero.json';

export default function FooterTest() {
  return (
    <footer className="w-full py-14 bg-redprimary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Image
          src="/images/sebastianlogopucon.png"
          width={500}
          height={500}
          alt="Picture of the author"
          className="px-10 mx-auto "
        />
        <div className="max-w-3xl mx-auto">
          <a href="https://pagedone.io/" className="flex justify-center "></a>
          {/* <ul className=" text-lg flex items-center justify-center flex-col gap-7 md:flex-row md:gap-12 transition-all duration-500 py-16 mb-10 border-b border-gray-200">
            <li>
              <a href="#" className="text-white hover:text-gray-900">
                Pagedone
              </a>
            </li>
            <li>
              <a href="#" className=" text-white hover:text-gray-900">
                Products
              </a>
            </li>
            <li>
              <a href="#" className=" text-white hover:text-gray-900">
                Resources
              </a>
            </li>
            <li>
              <a href="#" className=" text-white hover:text-gray-900">
                Blogs
              </a>
            </li>
            <li>
              <a href="#" className=" text-white hover:text-gray-900">
                Support
              </a>
            </li>
          </ul> */}
          <div className="mt-10 lg:mt-16 flex space-x-10 justify-center items-center mb-14">
            {json.iconos.map((i, it) => {
              return (
                <a
                  href={i.href}
                  className="block lg:px-5 transition-all duration-500  "
                >
                  <svg
                    className="w-11 h-11 lg:w-14 lg:h-14 text-white hover:text-blueprimary "
                    viewBox={i.view}
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d={i.path} fill="currentColor" />
                  </svg>
                </a>
              );
            })}
          </div>
          <span className="text-lg mt-6 text-white text-center block">
            Desarrollado por ©<a href="https://www.pooweb.cl/">Pooweb</a> 2024
          </span>
        </div>
      </div>
    </footer>
  );
}
