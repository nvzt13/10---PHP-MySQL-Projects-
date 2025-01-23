'use client'
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { blogData } from '@/data/data';
import { BlogCard } from '@/types/types';

export default function BlogDetails() {
  const param = useSearchParams();
  const id = param.get('id');
  const [blog, setBlog] = useState<BlogCard>();

  // localStorage ve blog datadan blogları al ve id'ye göre blogu bul
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const localData = localStorage.getItem('blogs');
      const storedBlogs = localData ? JSON.parse(localData) : []; // localStorage'dan veriyi al ve parse et
      const allBlogs = [...blogData, ...storedBlogs]; // blogData ve localStorage'daki blogları birleştir
      
      const selectedBlog = allBlogs.find((item: BlogCard) => item.id === Number(id));
      if (selectedBlog) {
        setBlog(selectedBlog);
      }
    }
  }, [id]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-3xl mx-auto mt-16 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <p className="text-sm text-gray-500 mb-2">
        <strong>Category:</strong> {blog.category} | <strong>Author:</strong> {blog.author}
      </p>
      {blog.image && (
        <div className="w-full h-64 mb-6">
          <img src={blog.image} alt={blog.title} className="w-full h-full object-cover rounded-lg" />
        </div>
      )}
      <div className="prose">
        <p>{blog.description}</p>
      </div>
    </div>
  );
}
