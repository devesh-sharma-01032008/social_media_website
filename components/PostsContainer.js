import { useEffect, useState } from "react";
import Post from "./Post";

export default function PostsContainer() {
    const [posts, setPosts] = useState([]);
    const [isLogin, setLogin] = useState(false);

    useEffect(async () => {
        const Api_Key = localStorage.getItem("Api_Key");
        if (Api_Key == undefined || Api_Key == "undefined" || Api_Key == null) {
            setLogin(false);
        } else {
            setLogin(true);
            const info = {
                "email": localStorage.getItem("Email"),
                "api_key": localStorage.getItem("Api_Key")
            }
            console.log(JSON.stringify(info));
            try {
                const response = await fetch("http://localhost:2500/get_posts", {
                    method: "POST",
                    mode: "cors",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(info)
                });
                const data = await response.json();
                let all_posts = data.posts;
                setPosts(all_posts);
            }
            catch (e) {
                console.log(e);
            }
        }
    }, []);
    return (
        <section className="flex center text-white post-container">
            {
                isLogin ? posts.map((post) => <Post title={post.post_title} desc={post.post_desc} key={`http://localhost:2500/get_image_file?email=${post.email}&file_name=${post.post_file}&image_category=post_files`} image_url={`http://localhost:2500/get_image_file?email=${post.email}&file_name=${post.post_file}&image_category=post_files`}/>) : ""
            }
        </section>
    )
}
