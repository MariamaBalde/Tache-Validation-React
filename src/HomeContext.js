import { createContext, useState, useEffect } from "react";

export const PostsContext = createContext();
export const PostProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/posts/')
                .then(res => {
                    // if res is false
                    if (!res.ok) {
                        throw Error('could not fetch the data for that resssources')
                    }
                    return res.json();
                })
                .then(data => {
                    setLoading(false);
                    setPosts(data);
                })
                .catch(err => {
                    setLoading(false)
                })
        }, 1000);
    }, [])
    return (
        <div className="container col-lg-6 m-auto">
            <PostsContext.Provider value={{ posts, loading }}>
                {children}
            </PostsContext.Provider>
        </div>

    );
}
