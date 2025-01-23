
import { BlogCard } from "@/types/types";

export const blogData: BlogCard[] = [
    {
      id: 1,
      title: "JavaScript: The Good Parts",
      author: "Nevzat Atalay",
      description:` 
Getting Started with Programming: A Quick Guide
In today’s tech-driven world, programming is an essential skill. If you're just starting out, it might feel overwhelming, but breaking it down into manageable steps can make the process easier.
1. Which Language to Learn?
For beginners, choosing the right language is key:
Python: Great for beginners with simple syntax. Used in data science, AI, and web development.
JavaScript: Essential for web development, both front-end and back-end.
Java: Common in large projects, mobile apps, and enterprise software.
2. Learn the Basics

Understanding key concepts early on will make learning easier:

Variables: Store and change data.
Control Structures: Manage program flow with conditions and loops.
Functions: Organize code into reusable blocks.
Data Structures: Learn lists, arrays, and dictionaries to handle data.
3. Practice, Practice, Practice

The best way to learn programming is by doing. Start with small projects like a calculator or personal blog to apply your knowledge.

4. Debugging

Errors will happen. Learn to read error messages, and troubleshoot step by step to fix them.

5. Use Available Resources

Don’t hesitate to seek help. Platforms like Stack Overflow, GitHub, and educational websites (Udemy, YouTube) can provide valuable insights and solutions.

6. Be Patient

Programming requires time and persistence. Every mistake is an opportunity to improve.

Conclusion

Start with languages like Python or JavaScript, grasp the basic concepts, and practice with small projects. With patience and persistence, programming can become a valuable skill in your career.`,
      image: "/programing.jpg",
      category: "Programming",
    },
    {
      id: 2,
      title: "Understanding React Hooks",
      author: "Jane Doe",
      description: `
      Why Should You Use Hooks?
Cleaner, Simpler Code: Hooks enable you to write cleaner and more readable functional components.
Reusable Logic: Custom hooks allow you to reuse stateful logic across different components.
No More Classes: You no longer need class components to manage state or lifecycle methods. Hooks offer a more modern and functional approach to React.
React Hooks are all about making your code more efficient, modular, and easier to maintain. If you haven’t switched over yet, now is the perfect time to dive in and explore what they can do for you!

`,
      image: "/web.jpg",
      category: "Web Development",
    },
    {
      id: 3,
      title: "CSS Grid: A Comprehensive Guide",
      author: "John Smith",
      description: `
      I discovered CSS about a decade ago while trying to modify the look of a blog I had created. Pretty soon, I was able to code cool things with more mathematical and, therefore, easier-to-understand features like transforms. However, other areas of CSS, such as layout, have remained a constant source of pain.

This post is about a problem I encountered about a decade ago and, until recently, did not know how to solve in a smart way. Specifically, it’s about how I found a solution to a long-running problem using a modern CSS grid technique that, in the process, gave me even cooler results than I originally imagined.`,
      image: "/design.jpg",
      category: "Design",
    },
  ];
  