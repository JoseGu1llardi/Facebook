import React from 'react';

import { posts } from '../data/posts';

import PostCard from './PostCard';

const Feed = () => {
    return (
        <>
            {posts.map(post => (
                <PostCard key={post.id} post={post} />
            ))}
        </>
    );
};

export default Feed;
