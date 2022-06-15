import Router from "next/router";
import { useState,useEffect } from "react";
import PopUp from "../components/PopUp";

export default function Login() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [hidden, setHidden] = useState(true);
  const [isLogin, setLogin] = useState(false);
  useEffect(() => {
    const Api_Key = localStorage.getItem("Api_Key");
    if(Api_Key == undefined || Api_Key == "undefined" || Api_Key == null){
      setLogin(false);
    }else{
      setLogin(true);
    }
    if(isLogin){
      Router.push("/");
    }
  }, []);

  const Login = async (event)=>{
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const info = {email,password};
      const response = await fetch(process.env.server_address+"/login",{
        method:"POST",
        mode:"cors",
        headers:{
          "Content-Type" : "application/json"
        },
        body: JSON.stringify(info)
      });
      const data = await response.json();
      if(data.sucess){
        localStorage.setItem("Api_Key",data.Api_Key)
        localStorage.setItem("Name",data.User_Name)
        localStorage.setItem("Email",data.email)
        Router.push("/")
      }else{
        setTitle("Invalid Creditionals");
        setDesc("Please Enter Creditionals correctly");
        setHidden(false);
        setTimeout(()=>{
          setHidden(true)
        },2000);
      }
  }
  return (
    <main className="flex">
      <PopUp title={title} desc={desc} hidden={hidden}/>
      <section className="flex center flex-column py-5 authorize-basis">
        <i className="fa fa-user my-2 authorize-icon" aria-hidden="true"></i>
        <h3 className="heading-2 body-color">Sign Up to continue</h3>
      </section>
      <form method="post" className="container m-auto px-3 py-3 col-equal-2 mx-2" onSubmit={Login}>
        <input type="email" className="input-field" name="email" id="email" placeholder="Enter your email here" required />
        <input type="password" className="input-field" name="password" id="password" placeholder="Enter your password here" required />
        <input type="submit" value="Log In" className="btn m-auto d-block" />
      </form>
    </main>
  )
}
