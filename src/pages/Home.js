// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import { posts } from '../data/test';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to My Blog</h1>
        <p>Discover the latest articles, insights, and stories.</p>
      </header>
      <div className="post-list">
        {posts.map((post) => (
          <div key={post.id} className="post-preview">
            <h2>
              <Link to={`/post/${post.id}`} className="post-title-link">{post.title}</Link>
            </h2>
            <p className="post-date">{post.date}</p>
            <p className="post-excerpt">{post.content.substring(0, 100)}...</p>
            <Link to={`/post/${post.id}`} className="read-more-link">Read more</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
