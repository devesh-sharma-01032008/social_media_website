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
        try { 
          const response = await fetch("http://localhost:2500/getfriends",{
            method:"POST",
            mode:"cors",
            headers:{
              "Content-Type" : "application/json"
            },
            body: JSON.stringify(info)
          });
          const data = await response.json();
          setFriends(data.friends);
          console.log(data.friends);
        } catch (error) {
          console.log(error);
          
        }
    }
    useEffect(() => {
        LoadFriends();
    }, [])
        return (
        <section className='container m-auto text-white'>
            {
              friends.map((friend)=>{
                console.log(friend.avatar);
                return <Friend friendName={friend.username} friendEmail={friend.email} avatar={friend.avatar} key={friend.email} />
              })
            }
        </section>
    )
}
