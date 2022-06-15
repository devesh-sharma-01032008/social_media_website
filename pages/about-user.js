import React from 'react'
import Router from "next/router"
import { useState,useEffect } from 'react';

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
        <section className='flex'>
            <section className="flex center flex-column py-5 authorize-basis">
                <i className="fa fa-user my-2 authorize-icon" aria-hidden="true"></i>
                <h2 className="heading-2 body-color">{username}</h2>
            </section>
            <div className='flex center flex-column py-1'>
                <h5 className='heading-5 body-color'>{email}</h5>
            </div>
        </section>
    )
}
