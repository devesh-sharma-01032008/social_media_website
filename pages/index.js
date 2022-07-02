import { useEffect, useState } from "react";
import AuthorizeLogo from "../components/AuthorizeLogo";
import PostsContainer from "../components/PostsContainer";

export default function Home() {
  const [isLogin, setLogin] = useState(false);
  useEffect(async () => {
    const Api_Key = localStorage.getItem("Api_Key");
    if (Api_Key == undefined || Api_Key == "undefined" || Api_Key == null) {
      setLogin(false);
    } else {
      setLogin(true);
    }
  }, []);
  return (
    <main>
      {
        isLogin == true ? <PostsContainer /> : <AuthorizeLogo />
      }
    </main>
  )
}
