import Post from "./Post";

export default function PostsContainer(props) {
    return (
        <section className="flex center text-white post-container">
            <Post title={"POST TITLE"} desc={"POST DESCRIPTION"} />
            <Post title={"POST TITLE"} desc={"POST DESCRIPTION"} />
            <Post title={"POST TITLE"} desc={"POST DESCRIPTION"} />
        </section>
    )
}
