export interface BlogProps {
    html: string;
    setHtml: (html: string) => void;
  }
  
  export  interface BlogData {
    id: number,
    title: string;
    category: string;
    author: string;
    image: string | null; // Image as base64
    description: string;
  }
export interface BlogCard {
  id: number
  title: string;
  category: string;
  author: string;
  image: string | null; // Image as base64
  description: string;
}

// Card bileşeninin props'larını tanımlıyoruz
export interface CardProps {
  blog: BlogCard; // blog prop'u BlogCard türünde olmalı
}
