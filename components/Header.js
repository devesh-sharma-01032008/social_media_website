import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header(props) {
    const [isLogin, setLogin] = useState(false);
  useEffect(() => {
    const Api_Key = localStorage.getItem("Api_Key");
    if(Api_Key === undefined || Api_Key == null){
      setLogin(false);
    }else{
      setLogin(true);
    }
  }, []);

    return (
        <header>
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            </Head>
            <nav className='flex center'>
                <div className="logo center">
                    <h1 className="heading-3 logo-font">{props.website_name}</h1>
                </div>
                <div className="search-box center">
                    <i className='fa fa-search'></i>
                    <input type="search" name="search_friends" id="search_friends" placeholder='Search your friend here' />
                </div>
                <div className="links flex">
                    <div className="link-container center">
                        <Link href={"/"}>
                            <a><i className="fa fa-home" aria-hidden="true"></i></a>
                        </Link>
                    </div>
                    <div className="link-container center">
                        <Link href={"/friends"}>
                            <a><i className="fa fa-users" aria-hidden="true"></i></a>
                        </Link>
                    </div>
                    <div className="link-container center">
                        <Link href={"/messages"}>
                            <a><i className="fa fa-comment" aria-hidden="true"></i></a>
                        </Link>
                    </div>
                    <div className="link-container center">
                        <Link href={isLogin ? "/add-post" : "/signup"}>
                            <a><i className="fa fa-plus" aria-hidden="true"></i></a>
                        </Link>
                    </div>
                    <div className="link-container center">
                        <Link href={isLogin ? "/about-user" : "/login"}>
                            <a><i className={isLogin ? "fa-solid fa-user" : "fa fa-sign-in" }aria-hidden="true"></i></a>
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}
