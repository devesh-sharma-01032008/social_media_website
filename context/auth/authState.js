import authContext from "./authContext";

const state = {
    isLogin : function(){
        const Api_Key = localStorage.getItem("Api_Key");
        if(Api_Key){
          setLogin(true);
        }else{
          setLogin(false);
        }
    }
}
export default authContext(state);