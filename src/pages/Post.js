// src/pages/Post.js
import React from 'react';
import { useParams } from 'react-router-dom';
// import { posts } from '../data/posts';
import { posts } from '../data/test';
import './Post.css';

function Post() {
  const { id } = useParams();
  const post = posts.find((p) => p.id.toString() === id);

  if (!post) {
    return <p className="post-not-found">Post not found</p>;
  }

  return (
    <div className="post-container">
      <h1 className="post-title">{post.title}</h1>
      <p className="post-date">{post.date}</p>
      <div className="post-content">{post.content}</div>
    </div>
  );
}

export default Post;