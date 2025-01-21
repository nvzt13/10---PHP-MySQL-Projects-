import Image from 'next/image';
import { FaRegEdit } from "react-icons/fa";

export default function Card({blog}) {
  const { title, description, author, category, image } = blog;
console.log(blog)
  return (
    <div className="bg-white border-0 shadow-lg rounded-lg overflow-hidden max-w-sm transform hover:scale-105 transition-transform duration-300 m-5 w-[250px]">
      <div className="relative">
          <Image 
            src={image} 
            alt="Card image" 
            width={500} 
            height={300}
            className="w-full h-auto object-cover"
          />
      </div>
      <div className="p-4">
        <h6 className="text-sm text-gray-500">{category}</h6>
        <h1 className="text-xl font-bold text-gray-800 mt-1">{title}</h1>
        <p className="text-gray-600 mt-2">{description}</p>
        <div className="flex justify-between items-center mt-4">
          <button className="text-white bg-black hover:bg-blue-600 font-medium py-2 px-5 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors">
            Details
          </button>
          <FaRegEdit className="hover:text-gray-700 cursor-pointer transition-colors text-3xl" />
        </div>
      </div>
      <div className="p-4 border-t">
        <h5 className="text-md font-medium text-gray-700">{author}</h5>
      </div>
    </div>
  );
}