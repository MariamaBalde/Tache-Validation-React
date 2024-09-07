import { useContext } from "react";
import { PostsContext } from "./HomeContext";
import { Link } from "react-router-dom";

const PostList = () => {
    const { posts, loading} = useContext(PostsContext);
    const title = "list des posts";

    if (loading) {
        return <div>Loading...</div>;
    }

    return ( 
            <div className="blog-list">
            <h2 className="text-info text-center">{title}</h2>
            <ul className="blog-preview border list-unstyled  shadow-lg  rounded px-2" >
                {posts.map((post) => (
                     <li key={post.id}>
                        <Link to={`/post/${post.id}`}>
                            <strong className="text-info">Title:</strong> {post.title}
                         </Link>
                    </li>
                ))
                }
            </ul>  

            </div>
     );
}

export default PostList;