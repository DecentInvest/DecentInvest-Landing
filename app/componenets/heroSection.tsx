'use client'
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className="mt-8 h-[65vh] sm:h-screen w-full relative flex items-center justify-center flex-col mb-8 sm:mb-0">
      <div className="absolute inset-0 z-0">
        <Image
          src="./homebg.svg"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div className="min-h-screen w-full overflow-hidden flex items-center justify-center flex-col z-10">
        <div className="absolute inset-0 z-0 hidden md:flex sm:h-screen lg:h-auto bg-cover bg-center"
          style={{
            backgroundImage: 'url("rectbg.svg")',
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "85% 85%",
          }}
        />
        <div className="absolute inset-0 z-0 flex md:hidden sm:h-screen lg:h-auto bg-cover bg-center"
          style={{
            backgroundImage: 'url("rectmob.svg")',
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "90% 90%",
          }}
        />
        <h1 className="text-white text-[40px] sm:text-[60px] md:text-[100px] xl:text-[130px] font-bold mb-2 sm:mt-0">
          DecentInvest
        </h1>
        <h2 className="text-white text-[18px] md:text-[25px] xl:text-[40px] mb-2 sm:mb-0">
          Invest Decently, Invest Decentrally
        </h2>
        <h2 className="text-white text-[12px] md:text-[15px] xl:text-[30px] mb-2 sm:mb-0">
          Secure, transparent, and fair investments
        </h2>
        <button className="bg-[#FFB200] text-black font-medium w-[155px] h-[42px] sm:h-[54px] sm:w-[220px] rounded-2xl hover:bg-yellow-500 transition-colors duration-300 text-[25px] mt-8 ">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
