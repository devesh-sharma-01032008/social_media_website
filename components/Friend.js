import Image from "next/image"
export default function Friend(props) {

    return (
        <div className='flex my-5 p-relative'>
            <div className='mx-2 friends-avatar'>
                <Image src={`/images/${props.imageName}`} alt="Avatar" layout='fill' />
            </div>
            <div>
                <h5 className='heading-5'>{props.friendName}</h5>
                <p>{props.friendEmail}</p>
            </div>
            <div className="p-absolute right p-justify-center">
                <button className="btn"><i className="fa-solid fa-plus"></i></button>
            </div>
        </div>
    )
}
