import React from 'react';
import { useState } from 'react';
import Editor from 'react-simple-wysiwyg';

const CreateBlog = () => {
  const [html, setHtml] = useState('my <b>HTML</b>');
  
  function onChange(e) {
    setHtml(e.target.value);
  }
  return(
    <>
     <div className="container mb-4">
            <div className="d-flex justify-content-between pt-5">
                <h4>Edit</h4>
                <a href="/" className="btn btn-dark">Back</a>
            </div>
     </div>
     
     <div className="card border-0 shadow-lg">
      <div className="card-body">
        <div className="mb-3">
          <label htmlFor="" className="form-label">Title</label>
          <input type="text" value="" className="form-control"/>
        </div>
        <div className="mb-3">
          <label htmlFor="" className="form-label">Description</label>
          <Editor value={html} 
          containerProps={{ style: {height: '400px' } }}

          onChange={onChange} />
        </div>
        <div className="mb-3">
            <label htmlFor="" className="form-label">image</label>
            <input type="file" value="" className="form-control" />
          </div>
         <div className="mb-3">
          <label htmlFor="" className="form-label">Title</label>
          <input type="text" value="" className="form-control"/>
        </div>
                <button className="btn btn-dark">create</button>

         </div>
    </div>
    </>
    )
}
export default CreateBlog