'use client';
import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { BlogData } from '@/types/types';
import Wysiwyg from '@/components/Wysivyg';

export default function BlogForm() {
  const [description, setDescription] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [author, setAuthor] = useState<string>('');
  const [id] = useState<number>(Date.now());
  const [image, setImage] = useState<string | null>(null); // Image as base64
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [blogs, setBlogs] = useState<BlogData[]>([]);

  // localStorage işlemlerini sadece istemci tarafında gerçekleştirmek için useEffect kullanıyoruz
  useEffect(() => {
    const storedBlogs = localStorage.getItem('blogs');
    if (storedBlogs) {
      setBlogs(JSON.parse(storedBlogs));
    }
  }, []);

  // Image file to base64 conversion
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string); // Set image as base64 string
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!description.trim()) {
      setErrorMessage('Blog içeriği zorunludur.');
      return;
    }

    // Generate a unique ID for the new blog post
    const newBlog: BlogData = { id, title, category, author, image, description };

    // Blog dizisini güncelle ve localStorage'a kaydet
    const updatedBlogs = [...blogs, newBlog];
    setBlogs(updatedBlogs);
    localStorage.setItem('blogs', JSON.stringify(updatedBlogs));

    // Input alanlarını temizle
    setTitle('');
    setCategory('');
    setAuthor('');
    setImage(null);
    setDescription('');
    setErrorMessage('');

    alert('Blog oluşturuldu!');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mt-28 mx-auto bg-white shadow-md p-6 rounded-lg space-y-6 mb-24">
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
        <Wysiwyg html={description} setHtml={setDescription} />
        {errorMessage && <p className="text-red-500 text-sm mt-2">{errorMessage}</p>}
      </div>

      <div>
        <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image</label>
        <input
          id="image"
          type="file"
          onChange={handleImageChange}
          className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-300"
          required
        />
      </div>

      {/* Preview of the uploaded image */}
      {image && (
        <div className="mt-4 w-[250px] mx-auto">
          <p className="text-sm font-medium text-gray-700">Uploaded Image Preview:</p>
          <img src={image} alt="Uploaded Preview" className="mt-2 max-w-full h-auto" />
        </div>
      )}

      <button
        type="submit"
        className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
      >
        Submit
      </button>
    </form>
  );
}
