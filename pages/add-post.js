import Router from "next/router";
import { useState } from "react";

export default function AddPost() {
  const [filename, setFileName] = useState("Choose a file");

  const SetFileName = (event) => {
    const files = event.target.files;
    console.log(files);
    const filename = files[0].name;
    console.log(filename);
    setFileName(filename);
  }
  const CreatePost = async (event) => {
    event.preventDefault();
    try{
      const post_file = document.getElementById("post-file").files;
      const post_title = document.getElementById("post-title").value;
      const post_desc = document.getElementById("post-desc").value;
      const data = new FormData();
      data.append("post_title", post_title)
      data.append("post_desc", post_desc)
      data.append("post_file", post_file[0])
      data.append("email", localStorage.getItem("Email"))
      data.append("api_key", localStorage.getItem("Api_Key"))
      data.append("post_file_name", post_file[0].name);
      const response = await fetch("http://localhost:2500/add-post", {
        method: "POST",
        mode: "cors",
        body: data
      })
      const result = response.json();
      console.log(result.sucess);
      if(result.sucess){
        Router.push("/");
      }
    }catch(error){
      console.log(error);
    }
  }
  return (
    <main className="flex">
      <form method="post" className="container m-auto px-3 py-3 col-equal-2 mx-2 add-post-form" onSubmit={CreatePost}>
        <label htmlFor="post-file">{filename}</label>
        <input type="file" className="input-field" name="post-file" id="post-file" placeholder="Drag your post here" onChange={SetFileName} accept="image/*" required />
        <input type="text" className="input-field" name="post-title" id="post-title" placeholder="Enter post-title here" required />
        <textarea className="input-field" name="post-desc" id="post-desc" placeholder="Enter post-desc here" required rows={10}>
        </textarea>
        <input type="submit" value="Post" className="btn m-auto d-block" />
      </form>
    </main>
  )
}
