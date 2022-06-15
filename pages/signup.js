import Router from "next/router";
import { useState,useEffect } from "react";
import PopUp from "../components/PopUp";
export default function SignUp() {
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

  const CreateAccount = async (event)=>{
    event.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const mobile_number = document.getElementById("mobile_number").value;
    const password = document.getElementById("password").value;
    const userimage = document.getElementById("userimage").files;
    console.log(userimage);
    const image_data = new FormData()
    image_data.append('userimage', userimage[0])
    image_data.append('name', userimage[0].name)
    image_data.append('email', email)
    console.log(image_data.get('userimage'))
    console.log(image_data.get('name'))
    console.log(image_data);
    await fetch(process.env.server_address+ "/upload-avatar",{
        method:"POST",
        mode:"cors",
        body: image_data
      });
    if(password.length >= 8 && mobile_number.length == 10){
      const info = {username,email,mobile_number,password,userimage};
      const response = await fetch(process.env.server_address+"/signup",{
        method:"POST",
        mode:"cors",
        headers:{
          "Content-Type" : "application/json"
        },
        body: JSON.stringify(info)
      });
      const data = await response.json();
      if (data.sucess) {
        localStorage.setItem("Api_Key",data.Api_Key)
        localStorage.setItem("Name",data.User_Name)
        localStorage.setItem("Email",data.email)
        // Router.push("/");
        
      } else {
        setTitle("Fill the form correctly");
        setDesc("Please fill all the required fields correctly.");
        setHidden(false);
        setTimeout(()=>{
          setHidden(true);
        },2000);
      }
    }else{
      setTitle("Fill the form correctly");
      setDesc("Please fill all the required fields correctly.");
      setHidden(false);
      setTimeout(()=>{
        setHidden(true);
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
      <form method="post" className="container m-auto px-3 py-3 col-equal-2 mx-2" onSubmit={CreateAccount}>
        <input type="text" className="input-field" name="username" id="username" placeholder="Enter your name here" required />
        <input type="email" className="input-field" name="email" id="email" placeholder="Enter your email here" required />
        <input type="tel" className="input-field" name="mobile_number" id="mobile_number" placeholder="Enter your mobile number here" required />
        <input type="password" className="input-field" name="password" id="password" placeholder="Enter your password here" required />
        <label htmlFor="user-image">Choose a image</label>
        <input type="file" className="input-field" accept="image/*" name="userimage" id="userimage" placeholder="Choose a Image" />
        <input type="submit" value="Sign Up" className="btn m-auto d-block" />
      </form>
    </main>
  )
}
