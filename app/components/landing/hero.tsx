import Image from "next/image";


const Hero = () => {
  return (
    <div className="bg-[#111] p-5 flex items-center justify-around w-full flex-col">

      <div className="w-full md:w-[85%] mb-4">

        <h2 className="text-3xl md:text-2xl font-bold mb-3 text-center flex items-center justify-between md:flex-row">

          <span className="">Beacon Pulse</span>

          <div className="w-[100px] h-[100px] relative">
            <Image
              src="/3.png"
              alt="nft-image"
              fill
              className="animate-pulse rounded-full"
            />
          </div>
          
        </h2>

        <p className="text-sm md:text-[1rem] w-[90%] mx-auto text-center">
          Welcome to BeaconPulse the place to be if you want to get yourself
          started with crypto. From minting the PulseShockWave NFT to getting
          your hands on our token. We offer staking and introduce other ways to
          earn. Be sure to check out our twitter and telegram.
        </p>

      </div>
      

    </div>
  );
};

export default Hero;
