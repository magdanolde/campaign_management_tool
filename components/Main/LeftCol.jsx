import Image from "next/image";

function LeftCol() {
  return (
    <div className='flex flex-col items-center max-md:hidden'>
      <Image src='/assets/images/icon-delete.svg' alt="bin" width={6} height={6} className="mb-4"/>
    </div>
  );
}

export default LeftCol;
