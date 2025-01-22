export interface BlogProps {
    html: string;
    setHtml: (html: string) => void;
  }
  
  export  interface BlogData {
    title: string;
    category: string;
    author: string;
    image: string | null; // Image as base64
    html: string;
  }
export interface BlogCard {
  title: string;
  category: string;
  author: string;
  image: string | null; // Image as base64
  html: string;
  id: number
}

// Card bileşeninin props'larını tanımlıyoruz
export interface CardProps {
  blog: BlogCard; // blog prop'u BlogCard türünde olmalı
}
