import AuthorizeLogo from "../components/AuthorizeLogo";
import { useState, useEffect } from "react";

export default function Messages() {
  const [isLogin, setLogin] = useState(false);
  useEffect(() => {
    const Api_Key = localStorage.getItem("Api_Key");
    if(Api_Key == undefined || Api_Key == "undefined" || Api_Key == null){
      setLogin(false);
    }else{
      setLogin(true);
    }
  }, []);

    return (
      <main>
        {isLogin ? "" : <AuthorizeLogo />}
      </main>
    )
  }
  