import Image from "next/image";

export default function PostsContainer(props) {
    return (
        <section className="flex center text-white post">
            <div className="left center flex-column my-5">
                <h2 className="heading-2">Post Title</h2>
                <p>Post description</p>
            </div>
            <div className="right image-container my-5">
                <Image src={"/images/post-1.png"} alt={"Hello"} layout="fill" objectFit="contain" className="image"/>
            </div>
            <div className="left center flex-column">
                <h2 className="heading-2">Post Title</h2>
                <p>Post description</p>
            </div>
            <div className="right image-container">
                <Image src={"/images/post-2.png"} alt={"Hello"} layout="fill" objectFit="contain" className="image"/>
            </div>
        </section>
    )
}
