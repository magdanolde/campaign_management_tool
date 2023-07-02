
import Welcome from "./Welcome";
import TrackRecord from "./TrackRecord";
import Image from "next/image";

function RightCol() {
  return (
    <div className="flex flex-col items-center text-lg max-md:hidden">
      <Image src='/assets/images/MainAvatar.jpg' alt="avatar" width={140} height={180} className="mb-4"/>
      <Welcome />
      <TrackRecord />
    </div>
  );
}

export default RightCol;