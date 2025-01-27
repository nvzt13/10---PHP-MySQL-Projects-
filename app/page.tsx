'use client';
import { useState, useEffect } from "react";
import Card from '@/components/Card';
import { blogData } from '@/data/data';
import { BlogCard } from '@/types/types';

export default function Home() {
  const [blogs, setBlogs] = useState<BlogCard[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // Add loading state

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const localData = localStorage.getItem('blogs');
      const storedBlogs = localData ? JSON.parse(localData) : [];
      const allBlogs = [...blogData, ...storedBlogs];
      setBlogs(allBlogs);
      setLoading(false); // Set loading to false once the blogs are fetched
    }
  }, []);

  return (
    <div className="flex justify-center items-center w-full mt-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {loading ? (
          <p>Loading blogs...</p> // Show loading message
        ) : (
          blogs.map((blog) => (
            <Card key={blog.id} blog={blog} />
          ))
        )}
      </div>
    </div>
  );
}