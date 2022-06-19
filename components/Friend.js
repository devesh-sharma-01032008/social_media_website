import Image from "next/image";
import { useRef } from "react";
import { GrAdd} from "react-icons/gr"

export default function Friend(props) {
    const email = useRef()
    const AddFriend = async (event)=>{
        console.log(email);
        const friend_email = await event.target.parentNode.parentNode.childNodes[1].childNodes[1].innerText;
        console.log(friend_email);
        const email = localStorage.getItem("Email");
        const Api_Key = localStorage.getItem("Api_Key");
        const info = {
            "email":email,
            "api_key":Api_Key,
            "friend_email":friend_email
        }
        const respone = await fetch("http://localhost:2500/add-friend",{
            method:"POST",
            mode:"cors",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(info)
        })
        console.log(respone);
    }
    return (
        <div className='flex my-5 p-relative friend-list-item'>
            <div className='mx-2 friends-avatar'>
                <Image src={`/images/${props.imageName}`} alt="Avatar" layout='fill' />
            </div>
            <div>
                <h5 className='heading-5 body-color'>{props.friendName}</h5>
                <p ref={email} className="body-color">{props.friendEmail}</p>
            </div>
            <div className="p-absolute right p-justify-center">
                <button className="btn"  onClick={AddFriend}><i></i><GrAdd /></button>
            </div>
        </div>
    )
}
