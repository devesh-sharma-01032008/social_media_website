import Image from "next/image";

export default function Message(props) {
    return (
        <div className='flex my-5 p-relative friend-list-item'>
            <div className='mx-2 friends-avatar'>
                <Image src={`/images/${props.imageName}`} alt="Avatar" layout='fill' />
            </div>
            <div>
                <h5 className='heading-5 body-color'>{props.friendName}</h5>
                <p className="body-color">{props.friendEmail}</p>
            </div>
            <div className="message-count p-absolute">
                <span className="heading-5">50</span>
            </div>
        </div>
    )
}
