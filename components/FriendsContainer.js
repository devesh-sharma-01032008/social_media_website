import React from 'react'
import { useEffect ,useState} from "react";
import Friend from './Friend'


export default function FriendsContainer() {
  const [friends,setFriends] = useState([])
  const LoadFriends = async ()=>{
        const name = localStorage.getItem("Name");
        const api_key = localStorage.getItem("Api_Key");
        const email = localStorage.getItem("Email");
        console.log(name,api_key);
        const count = 150;
        const info = {name,api_key,count,email};
        console.log(process.env);
          const response = await fetch("http://localhost:2500/getfriends",{
            method:"POST",
            mode:"cors",
            headers:{
              "Content-Type" : "application/json"
            },
            body: JSON.stringify(info)
          });
          const data = await response.json();
          console.log(data.friends);
          setFriends(data.friends);
    }
    useEffect(() => {
        LoadFriends();
    }, [])
        return (
        <section className='container m-auto text-white'>
            {
              friends.map((friend)=>{
                return <Friend key={friend.email} friendName={friend.username} friendEmail={friend.email} imageName={"post-1.png"} />
              })
            }
        </section>
    )
}
