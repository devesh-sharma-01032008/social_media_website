import React from 'react'
import Image from "next/image";


export default function Post(props) {
    return (
        <><div className="left center flex-column my-5 post">
            <h2 className="heading-2 body-color">{props.title}</h2>
            <p className="body-color">{props.desc}</p>
        </div><div className="right image-container my-5">
                <img priority={true} src={props.image_url} alt={props.image_url} layout="fill" objectFit="contain" className="image" />
            </div></>
    )
}
