"use client";

import { mintNFT } from "@/app/lib/web3";
import Image from "next/image";
import Link from "next/link";


const NftColSec = () => {

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await mintNFT(e.target.tokenAmount.value);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-[#000] rounded-lg drop-shadow-lg">

      <div className="w-full flex items-center justify-around p-4 flex-col md:flex-row">
        
        <div className="w-full md:w-[45%] mb-4 p-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-2 text-center">
            PulseShockWave Collection
          </h2>
          <p className="text-sm md:text-[1.1rem] leading-7">
            There are over 333 nft tokens uniqualy generated. Own one of these
            NFTs before they are all out, this is a beutiful art piece of a
            light tower showing their light day to day, perfect for those who
            want to be the light in the dark for those who walk by
          </p>
        </div>

        <div className="w-[300px] h-[300px] relative">
          <Image
            src="/3.png"
            alt="nft-image"
            className="rounded-lg drop-shadow-lg"
            fill
          />
        </div>
      </div>

      <div className="w-full p-10">

        <div className="w-[80%] mx-auto">

          <h2 className="text-2xl font-bold mb-2 bg-[#000] text-yellow-500 p-4 border-b-2">
            Minted: 0/222
          </h2>

          <div className="flex items-center justify-between flex-col ">

            <form
              className="flex items-center gap-4 w-full justify-center gap-4 p-5 w-[40%]"
              onSubmit={handleSubmit}
            >
              <input
                type="number"
                placeholder="enter amount "
                className="p-2 text-black"
                id="tokenAmount"
                name="tokenAmount"
              />
              <button className="bg-[#222] p-2 rounded-lg font-bold hover:bg-red-400">
                submit
              </button>
            </form>

            <div className="w-full  bg-[#222] p-2 text-center rounded-lg">

              <Link href="/about" className="text-2xl font-bold">
                learn more
              </Link>

            </div>

          </div>
            

        </div>

      </div>

    </div>
  );
};

export default NftColSec;
