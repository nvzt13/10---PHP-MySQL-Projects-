'use client';
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';

const page = () => {
  const [blog, setBlog] = useState(null);
  const searchParams = useSearchParams();
  const blogId = searchParams.get('id');

  useEffect(() => {
    const storedBlogs = localStorage.getItem('blogs');
    if (storedBlogs) {
      const blogs = storedBlogs ? JSON.parse(storedBlogs) : [];
      const foundBlog = blogs.find((b) => b.id === Number(blogId)); // blogId'yi sayıya dönüştür
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
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
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
        <div dangerouslySetInnerHTML={{ __html: blog.html }} />
      </div>

      <div className="text-right">
        <p className="text-sm text-gray-400">Published on: {new Date(blog.id).toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default page;