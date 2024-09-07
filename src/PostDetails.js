import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PostDetails = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Could not fetch the data for that resource');
                }
                return response.json();
            })
            .then(data => {
                setPost(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Failed to fetch post:', error);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!post) {
        return <div>Post not found</div>;
    }

    return (
        <div className="post-details border shadow-lg  rounded my-3 px-2">
            <article>
                <h5><span className='text-danger'>title:</span> {post.title}</h5>
                <div><span className='text-danger'>body:</span> {post.body}</div>
            </article>
        </div>
    );
};

export default PostDetails;


