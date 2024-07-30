import Blog from './Blog';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('./blog.json')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setBlogs(data);
      });
  }, []);
  return (
    <div className="md:w-2/3">
      <h1 className="text-4xl">Blogs: {blogs.length}</h1>
      {blogs.map(blog => (
        <Blog key={blog.id} blog={blog}></Blog>
      ))}
    </div>
  );
};

export default Blogs;
