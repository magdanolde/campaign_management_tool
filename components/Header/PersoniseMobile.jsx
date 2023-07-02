
import Welcome from "../Main/Welcome";
import Image from "next/image";

function PersoniseMobile() {
  return (
    <div className ="hidden max-md:flex justify-between items-center">
      <Image src='/assets/images/MainAvatar.jpg' alt="avatar" className="w-20" width={20} height={30}/>
      <Welcome />
    </div>
  );
}

export default PersoniseMobile;
