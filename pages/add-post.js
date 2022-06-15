import { useState } from "react";

export default function AddPost() {
  const [filename,setFileName] = useState("Choose a file");

  const SetFileName = (event)=>{
    const files = event.target.files;
    console.log(files);
    const filename = files[0].name;
    console.log(filename);
    setFileName(filename);
  }
  const CreatePost = async (event)=>{
    event.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const mobile_number = document.getElementById("mobile_number").value;
    const password = document.getElementById("password").value;
    if(password.length >= 8 && mobile_number.length == 10){
      const info = {username,email,mobile_number,password};
      const response = await fetch("http://localhost:2500/signup",{
        method:"POST",
        mode:"cors",
        headers:{
          "Content-Type" : "application/json"
        },
        body: JSON.stringify(info)
      });
      const data = await response.json();
      console.log(data);
      if (data.sucess) {
        document.cookie = `API_KEY=${data.Api_key}`;
        document.cookie = `NAME=${data.User_Name}`;
        localStorage.setItem("API_KEY",data.Api_key)
        localStorage.setItem("NAME",data.User_Name)
        localStorage.setItem("NAME",data.User_Name)
        Router.push("/");
        
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
      <form action="login.php" method="post" className="container m-auto px-3 py-3 col-equal-2 mx-2" onSubmit={CreatePost}>
        <label htmlFor="post-file">{filename}</label>
        <input type="file" className="input-field" name="post-file" id="post-file" placeholder="Drag your post here" onChange={SetFileName} required />
        <input type="text" className="input-field" name="post-title" id="post-title" placeholder="Enter post-title here" required />
        <input type="email" className="input-field" name="post-desc" id="post-desc" placeholder="Enter post-desc here" required />
        <input type="submit" value="Post" className="btn m-auto d-block" />
      </form>
    </main>
  )
}
