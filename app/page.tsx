'use client'
import { useState, useEffect } from "react";
import Card from '@/components/Card';

export default function Home() {
  const [blogs, setBlogs] = useState([]);
console.log(blogs)
  useEffect(() => {
    const storedBlogs = localStorage.getItem('blogs');
    if (storedBlogs) {
      setBlogs(JSON.parse(storedBlogs));
    }
  }, []); 
  return (
    <div className="flex flex-wrap justify-center">  
      {blogs.length > 0 ? (
        blogs.map((blog, index) => (
          <Card key={index} blog={blog} />
        ))
      ) : (
        <p>No blogs available.</p>
      )}
    </div>
  );
}