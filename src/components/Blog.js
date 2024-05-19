import React, { useEffect, useState } from 'react';

const Blog = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('http://localhost/backend/api/blog.php')
            .then(response => response.json())
            .then(data => setPosts(data));
    }, []);

    return (
        <div>
            <h1>Blog</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Blog;