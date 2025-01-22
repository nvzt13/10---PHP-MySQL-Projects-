import Image from 'next/image';
import { FaRegEdit } from "react-icons/fa";
import { CardProps } from '@/types/types';
import Link from 'next/link';

export default function Card({ blog }: CardProps) {
  const { id, title, html, author, category, image } = blog;

  return (
    <div className="bg-white border-0 shadow-lg rounded-lg overflow-hidden max-w-sm h-[450px] transform hover:scale-105 transition-transform duration-300 m-5 w-[250px]">
      <div className="relative h-[200px] overflow-hidden">
        {image && (
          <Image 
            src={image} 
            alt="Card image" 
            width={500} 
            height={300}
            className="w-full h-full object-cover"
          />
        )}
      </div>
      <div className="p-4 h-[200px] flex flex-col justify-between">
        <div>
          <h6 className="text-sm text-gray-500">{category}</h6>
          <h1 className="text-xl font-bold text-gray-800 mt-1 line-clamp-1">{title}</h1>
          <p className="text-gray-600 mt-2 line-clamp-2">{html}</p>
        </div>
        <div className="flex justify-between items-center mt-4">
          <Link 
            href={`/blog-details?id=${id}`}
            className="text-white bg-black hover:bg-blue-600 font-medium py-2 px-5 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors"
          >
            Read
          </Link>
          <Link
            href={`/blog-details/edit?id=${id}`}
              >
             <FaRegEdit className="hover:text-gray-700 cursor-pointer transition-colors text-3xl" />
</Link>
        </div>
      </div>
      <div className="p-4 bg-gray-100">
        <h5 className="text-sm font-medium text-gray-700">{author}</h5>
      </div>
    </div>
  );
}