import Link from 'next/link';

export default function Button() {
  return (
    <Link
      href="#linkscroll"
      className=" hover:bg-orange-200 hover:text-slate-950 text-yellow-50 rounded-md py-3 px-12 w-40 bg-green-500 sm:w-full md:w-40 md:bg-orange-800"
    >
      anashe
    </Link>
  );
}
