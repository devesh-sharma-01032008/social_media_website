import Link from 'next/link';
import { useState, useEffect } from 'react';
import { AiFillHome,AiFillMessage,AiOutlineUser,AiOutlineUserAdd,AiFillFileAdd,AiOutlineSearch } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import { GrLogin } from "react-icons/gr";

export default function Header(props) {
    const [isLogin, setLogin] = useState(false);
    useEffect(() => {
        const Api_Key = localStorage.getItem("Api_Key");
        if (Api_Key === undefined || Api_Key == null) {
            setLogin(false);
        } else {
            setLogin(true);
        }
    }, []);

    return (
        <header>
            <nav className='flex center'>
                <div className="logo center">
                    <h1 className="heading-3 logo-font">{props.website_name}</h1>
                </div>
                <div className="search-box center">
                    <i><AiOutlineSearch /></i>
                    <input type="search" name="search_friends" id="search_friends" placeholder='Search your friend here' />
                </div>
                <div className="links flex">
                    <div className="link-container center">
                        <Link href={"/"}>
                            <a> 
                                <i> <AiFillHome /></i>
                            </a>
                        </Link>
                    </div>
                    <div className="link-container center">
                        <Link href={"/friends"}>
                            <a>
                                <i><FaUserFriends /></i>
                            </a>
                        </Link>
                    </div>
                    <div className="link-container center">
                        <Link href={"/messages"}>
                            <a>
                                <i><AiFillMessage /></i>
                            </a>
                        </Link>
                    </div>
                    <div className="link-container center">
                        <Link href={isLogin ? "/add-post" : "/signup"}>
                        <a>
                                <i>{isLogin ?<AiFillFileAdd /> : <AiOutlineUserAdd />}</i>
                            </a>
                        </Link>
                    </div>
                    <div className="link-container center">
                        <Link href={isLogin ? "/about-user" : "/login"}>
                            <a><i>{isLogin ?<AiOutlineUser /> : <GrLogin />}</i></a>
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}
