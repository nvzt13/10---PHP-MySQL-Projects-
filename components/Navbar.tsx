import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="flex fixed w-full top-0 items-center z-[50]  justify-between bg-gray-800 text-white p-4 shadow-md">
      <div>
        <Link href="/">
        <h1 className="text-white sm-text-2xl font-bold">Personal Blog App</h1>
        </Link>
      </div>
      <div>
        <Link href="/" className="text-white mx-4 hover:text-blue-300 transition duration-200">Home</Link>
        <Link href="/create-blog" className="text-white mx-4 hover:text-blue-300 transition duration-200">Create Blog</Link>
      </div>
    </div>
  );
}