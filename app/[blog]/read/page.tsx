'use client';
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { BlogCard } from '@/types/types';
import { blogData } from '@/data/data';

const Page = () => {
  const [blog, setBlog] = useState<BlogCard | undefined>(undefined);
  const searchParams = useSearchParams();
  const blogId = searchParams.get('id');

  useEffect(() => {
    const localData = localStorage.getItem('blogs');
    const storedBlogs = localData ? JSON.parse(localData) : []; // localStorage'dan veriyi al ve parse et
    const allBlogs = [...blogData, ...storedBlogs]; // blogData ve localStorage'dan gelen verileri birleştir

    if (blogId) {
      const foundBlog = allBlogs.find((b: BlogCard) => b.id === Number(blogId)); // blogId'yi sayıya dönüştür
      setBlog(foundBlog);
    }
  }, [blogId]);

  if (!blog) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-24 max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <div className="flex flex-col md:flex-row items-center mb-6">
        {blog.image && (
          <div className="w-48 h-48 relative mb-4 md:mb-0 md:mr-6">
            <Image
              src={blog.image}
              alt={blog.title}
              layout="fill"
              objectFit="cover"
              className="rounded-full shadow-md"
            />
          </div>
        )}
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold text-gray-900">{blog.title}</h1>
          <p className="text-lg text-blue-500 mt-2">{blog.category}</p>
          <p className="text-sm text-gray-500 mt-1">Written by: {blog.author}</p>
        </div>
      </div>

      <div className="prose max-w-none mb-6">
        <div dangerouslySetInnerHTML={{ __html: blog.description }} />
      </div>

      <div className="text-right">
        <p className="text-sm text-gray-400">Published on: {new Date(blog.id).toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default Page;