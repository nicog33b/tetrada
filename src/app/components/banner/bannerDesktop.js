import Image from 'next/image';

export default function TetradaBanner() {
  return (
    <div className="relative h-screen w-full flex overflow-hidden">
      {/* Left orange section */}
      <div className="w-2/5 bg-[#FF8800] rounded-br-full flex flex-col justify-center items-center relative z-10 h-full">
        <Image
          src="/logo-f.png"
          alt="Tetrada Marketing"
          width={400}
          height={400}
          className=" lg:h-44 lg:w-90"
        />
      </div>

      {/* Right image section */}
      <div className="absolute inset-0 w-full h-full flex justify-center items-center z-0">
        {/* Main Image */}
        <Image
          src="/crowd.webp"
          alt="Crowd with smartphones"
          layout="fill"
          objectFit="cover"
          className="filter brightness-50"
        />

  
      </div>
    </div>
  );
}
