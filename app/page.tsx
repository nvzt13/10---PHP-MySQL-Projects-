'use client';
import { useState, useEffect } from "react";
import Card from '@/components/Card';
import { blogData } from '@/data/data';
import { BlogCard } from '@/types/types';

export default function Home() {
  const [blogs, setBlogs] = useState<BlogCard[]>([]); // Başlangıçta boş bir dizi

  useEffect(() => {
    if (typeof window !== 'undefined') { // Tarayıcıda olduğumuzdan emin olun
      const localData = localStorage.getItem('blogs');
      const storedBlogs = localData ? JSON.parse(localData) : []; // localStorage'dan veriyi al ve parse et
      const allBlogs = [...blogData, ...storedBlogs]; // blogData ve localStorage'daki blogları birleştir
      setBlogs(allBlogs); // Blogları state'e set et
    }
  }, []); // useEffect sadece ilk renderda çalışacak

  return (
    <div className="flex flex-wrap justify-center mt-24">
      {blogs.length > 0 ? (
        blogs.map((blog) => (
          <Card key={blog.id} blog={blog} />
        ))
      ) : (
        <p>No blogs available.</p>
      )}
    </div>
  );
}
