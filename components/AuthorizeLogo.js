import {  AiOutlineUserAdd} from "react-icons/ai"

export default function AuthorizeLogo() {
  return (
    <section className="flex center flex-column py-5">
      <i className="authorize-icon"><AiOutlineUserAdd /></i>
      <h3 className="heading-2 body-color">Login or Sign Up to continue</h3>
    </section>
  )
}
