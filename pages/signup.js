import Router from "next/router";
import { useState, useEffect } from "react";
import PopUp from "../components/PopUp";
import { FaUser } from "react-icons/fa";

export default function SignUp() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [hidden, setHidden] = useState(true);
  const [isLogin, setLogin] = useState(false);
  useEffect(() => {
    const Api_Key = localStorage.getItem("Api_Key");
    if (Api_Key == undefined || Api_Key == "undefined" || Api_Key == null) {
      setLogin(false);
    } else {
      setLogin(true);
    }
    if (isLogin) {
      Router.push("/");
    }
  }, []);

  const CreateAccount = async (event) => {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const mobile_number = document.getElementById("mobile_number").value;
    const password = document.getElementById("password").value;
    const userimage = document.getElementById("userimage").files;
    console.log(userimage);
    const data = new FormData()
    data.append('userimage', userimage[0])
    data.append('name', userimage[0].name)
    data.append('email', email)
    data.append('mobile_number', mobile_number)
    data.append('password', password)
    data.append('username', username)
    console.log(data.get('userimage'))
    console.log(data.get('name'))
    console.log(data);
    const response = await fetch("http://localhost:2500/signup", {
      method: "POST",
      mode: "cors",
      body: data
    });
    const info = await response.json();
    if (data.sucess) {
      localStorage.setItem("Api_Key", info.Api_Key)
      localStorage.setItem("Name", info.User_Name)
      localStorage.setItem("Email", info.email)
      // Router.push("/");

    } else {
      setTitle("Fill the form correctly");
      setDesc("Please fill all the required fields correctly.");
      setHidden(false);
      setTimeout(() => {
        setHidden(true);
      }, 2000);
    }
    setTitle("Fill the form correctly");
    setDesc("Please fill all the required fields correctly.");
    setHidden(false);
    setTimeout(() => {
      setHidden(true);
    }, 2000);
  }
  return (
    <main className="flex">
      <PopUp title={title} desc={desc} hidden={hidden} />
      <section className="flex center flex-column py-5 authorize-basis">
        <i className="authorize-icon" aria-hidden="true"><FaUser /></i>
        <h3 className="heading-2 body-color">Sign Up to continue</h3>
      </section>
      <form method="post" className="container m-auto px-3 py-3 col-equal-2 mx-2" onSubmit={CreateAccount}>
        <input type="text" className="input-field" name="username" id="username" placeholder="Enter your name here" required />
        <input type="email" className="input-field" name="email" id="email" placeholder="Enter your email here" required />
        <input type="tel" className="input-field" name="mobile_number" id="mobile_number" placeholder="Enter your mobile number here" required />
        <input type="password" className="input-field" name="password" id="password" placeholder="Enter your password here" required />
        <label htmlFor="userimage">Choose a image</label>
        <input type="file" className="input-field" accept="image/*" name="userimage" id="userimage" placeholder="Choose a Image" />
        <input type="submit" value="Sign Up" className="btn m-auto d-block" />
      </form>
    </main>
  )
}
