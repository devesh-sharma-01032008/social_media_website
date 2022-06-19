import AuthorizeLogo from "../components/AuthorizeLogo";
import { useState,useEffect } from "react";
import FriendsContainer from "../components/FriendsContainer";
export default function Friends() {
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
        {isLogin ? <FriendsContainer /> : <AuthorizeLogo />}
      </main>
    )
  }
  