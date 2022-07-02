import Image from "next/image";
import { GrAdd } from "react-icons/gr"

export default function Friend(props) {
    const AddFriend = async (event) => {
        console.log(email);
        const friend_email = await event.target.parentNode.parentNode.childNodes[1].childNodes[1].innerText;
        console.log(friend_email);
        const email = localStorage.getItem("Email");
        const Api_Key = localStorage.getItem("Api_Key");
        const info = {
            "email": email,
            "api_key": Api_Key,
            "friend_email": friend_email
        }
        try {
            const respone = await fetch("http://localhost:2500/add-friend", {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(info)
            })
            console.log(respone);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className='flex my-5 p-relative friend-list-item'>
            <div className='mx-2 friends-avatar'>
                <img src={props.avatar != undefined ?  `http://localhost:2500/get_image_file?email=${props.friendEmail}&file_name=${props.avatar}&image_category=avatar` : "/images/post-1.png"} alt={props.avatar != undefined ?  `http://localhost:2500/get_image_file?email=${props.friendEmail}&file_name=${props.avatar}&image_category=avatar` : "/images/post-1.png"} layout='fill' />
            </div>
            <div>
                <h5 className='heading-5 body-color'>{props.friendName}</h5>
                <p className="body-color">{props.friendEmail}</p>
            </div>
            <div className="p-absolute p-justify-center" style={{ top: "50%", right: "10px" }}>
                <button className="btn" onClick={AddFriend}><i></i><GrAdd /></button>
            </div>
        </div>
    )
}
