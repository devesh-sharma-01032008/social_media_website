import React from 'react'
import Router from "next/router"
import { useState,useEffect } from 'react';
import { FaUser } from "react-icons/fa"


export default function AboutUser() {
    const [username,setUserName] = useState("");
    const [email,setEmail] = useState("");
    useEffect(() => {
        const Api_Key = localStorage.getItem("Api_Key");
        const username = localStorage.getItem("Name");
        const email = localStorage.getItem("Email");
        if(Api_Key == undefined || Api_Key == "undefined" || Api_Key == null){
          Router.push("/signup")
        }else{
          setUserName(username);
          setEmail(email);
        }
      }, []);

    return (
        <main className='flex'>
            <section className="flex center flex-column py-5 authorize-basis">
                <i className="authorize-icon" aria-hidden="true"><FaUser /></i>
                <h2 className="heading-2 body-color">{username}</h2>
            </section>
            <div className='flex center flex-column py-1'>
                <h5 className='heading-5 body-color'>{email}</h5>
            </div>
        </main>
    )
}
