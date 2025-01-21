import Image from 'next/image';

export default function ImageNamePlate({ image, name, id, title }) {
  return (
    <>
      <div className="flex flex-col items-start px-4 py-4 relative">
        {/* Profile Picture */}
        <div className="relative -mb-16 z-10">
          <Image
            src={image}
            width={120}
            height={120}
            className="rounded-full border-4 border-bg2"
            alt="picture of user"
          />
          <div className="absolute bottom-0 right-0 bg-white text-black text-xs px-2 py-1 rounded-full drop-shadow-customBlack">
            {title}
          </div>
        </div>

        {/* Name and ID Plate */}
        <div className="bg-bg2 w-full max-w-md rounded-lg mt-12 p-6 px-5 relative">
          <h1 className="text-white font-barlow text-3xl text-start drop-shadow-customBlack">
            {name}
          </h1>
          <h2 className="text-gray-400 font-barlow text-start drop-shadow-customBlack">
            @{id}
          </h2>
        </div>
      </div>
    </>
  );
}
