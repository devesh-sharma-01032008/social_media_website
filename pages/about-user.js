import React from 'react'
import Router from "next/router"
import { useState, useEffect } from 'react';
import Image from 'next/image';


export default function AboutUser() {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");
  useEffect(() => {
    const Api_Key = localStorage.getItem("Api_Key");
    const username = localStorage.getItem("Name");
    const email = localStorage.getItem("Email");
    const Avatar = localStorage.getItem("Avatar");
    if (Api_Key == undefined || Api_Key == "undefined" || Api_Key == null) {
      Router.push("/signup")
    } else {
      setUserName(username);
      setEmail(email);
      setAvatar(Avatar);
    }
  }, []);

  return (
    <main className='flex'>
      <section className="flex center flex-column py-5 authorize-basis">
        <div className="right image-container">
          <Image priority={true} src={`http://localhost:2500/get_image_file?email=${email}&file_name=${avatar}&image_category=avatar`} alt={`http://localhost:2500/get_image_file?email=${email}&file_name=${avatar}&image_category=avatar`} layout="fill" objectFit="contain" className="image" />
        </div>
        <h2 className="heading-2 body-color">{username}</h2>
      <div className='flex center flex-column py-1'>
        <h5 className='heading-5 body-color'>{email}</h5>
      </div>
      </section>
    </main>
  )
}
