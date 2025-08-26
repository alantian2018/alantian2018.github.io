import React from 'react';
import BlogPost from '../components/BlogPost';
import { Post } from '../types';

const blogPosts: Post[] = [
  {
    id: 1,
    title: 'First Blog Post',
    date: '2023-10-01',
    content: 'This is the content of the first blog post.',
  },
  {
    id: 2,
    title: 'Second Blog Post',
    date: '2023-10-02',
    content: 'This is the content of the second blog post.',
  },
  // Add more blog posts as needed
];

const Blog: React.FC = () => {
  return (
    <div>
      <h1>Blog</h1>
      {blogPosts.map(post => (
        <BlogPost key={post.id} title={post.title} date={post.date} content={post.content} />
      ))}
    </div>
  );
};

export default Blog;