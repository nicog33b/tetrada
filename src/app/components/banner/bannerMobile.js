import Image from 'next/image';

export default function TetradaBannerMobile() {
  return (
    <div className="relative h-screen w-full flex flex-col overflow-hidden">
      {/* Top logo section */}
   

      {/* Bottom image section */}
      <div className="w-full h-2/3 relative flex justify-center items-center z-0">
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
