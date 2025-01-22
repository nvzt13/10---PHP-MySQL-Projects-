'use client'
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function EditBlog() {
  const param = useSearchParams();
  const id = param.get('id');
  console.log('Blog ID:', id); // Debugging line to check the id value
  const [blog, setBlog] = useState<any>(null);
  const [html, setHtml] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [author, setAuthor] = useState<string>('');
  const [image, setImage] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    const blogs = JSON.parse(localStorage.getItem("blogs") || '[]');
    const selectedBlog = blogs.find((item: any) => item.id === Number(id));
    if (selectedBlog) {
      setBlog(selectedBlog);
      setTitle(selectedBlog.title);
      setCategory(selectedBlog.category);
      setAuthor(selectedBlog.author);
      setHtml(selectedBlog.html);
    }
  }, [id]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedBlog = { ...blog, title, category, author, html, image };
    const blogs = JSON.parse(localStorage.getItem("blogs") || '[]');
    const updatedBlogs = blogs.map((item: any) =>
      item.id === blog.id ? updatedBlog : item
    );
    localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
    alert('Blog updated!');

    // Reset form values
    setTitle('');
    setCategory('');
    setAuthor('');
    setHtml('');
    setImage(null);
  };

  const handleDelete = () => {
    const blogs = JSON.parse(localStorage.getItem("blogs") || '[]');
    const updatedBlogs = blogs.filter((item: any) => item.id !== blog.id);
    localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
    alert('Blog deleted!');

    // Reset form values after deletion
    setTitle('');
    setCategory('');
    setAuthor('');
    setHtml('');
    setImage(null);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white shadow-md p-6 rounded-lg mt-8 space-y-6">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-300"
          placeholder="Enter title"
          required
        />
      </div>

      <div className="space-y-4">
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
          <input
            id="category"
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-300"
            placeholder="Enter category"
            required
          />
        </div>

        <div>
          <label htmlFor="author" className="block text-sm font-medium text-gray-700">Author</label>
          <input
            id="author"
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-300"
            placeholder="Enter author"
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="blog" className="block text-sm font-medium text-gray-700">Blog</label>
        <textarea
          id="blog"
          value={html}
          onChange={(e) => setHtml(e.target.value)}
          className="w-full mt-1 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-300 h-[400px]"
          placeholder="Enter blog content"
          required
        />
      </div>

      <div>
        <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image</label>
        <input
          id="image"
          type="file"
          onChange={handleImageChange}
          className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-300"
        />
      </div>

      {/* Preview of the uploaded image */}
      {image && (
        <div className="mt-4 w-[250px] mx-auto">
          <p className="text-sm font-medium text-gray-700">Uploaded Image Preview:</p>
          <img src={image} alt="Uploaded Preview" className="mt-2 max-w-full h-auto" />
        </div>
      )}
      <div className="flex ">
        <button
          type="submit"
          className="m-4 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-300"
        >
          Update
        </button>
        <button
          type="button" // Use 'button' type to avoid form submission
          onClick={handleDelete}
          className="m-4 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
        >
          Delete
        </button>
      </div>
    </form>
  );
}