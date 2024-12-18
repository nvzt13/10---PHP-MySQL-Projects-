import React from 'react';
import BlogCard from './Card.jsx'
const Blogs = () => {
  return(
<div>
    <div className="container mb-4">
            <div className="d-flex justify-content-between pt-5">
                <h4>Blogs</h4>
                <a href="/create" className="btn btn-dark">Create</a>
            </div>
     </div>
            <div className="row">
                  <BlogCard />
                  <BlogCard />
                  <BlogCard />
                  <BlogCard />
                  <BlogCard />
                  <BlogCard />
                  <BlogCard />
                  <BlogCard />
                  <BlogCard />
                  <BlogCard />
                  <BlogCard />
                  <BlogCard />
            </div>
   </div>
    )
}

export default Blogs