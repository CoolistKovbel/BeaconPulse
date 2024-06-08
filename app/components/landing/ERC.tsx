"use client";

import { swapToken } from "@/app/lib/web3";
import { ethers } from "ethers";
import Image from "next/image";
import React, { useState } from "react";

const ERCToken = () => {
  const [ETHAmount, setETHAmount] = useState<any>("");
  const [NCTAmount, setNCTAmount] = useState<any>("");
  const tokenPerEth = 10000;

  // Function to handle ETH amount change
  const handleETHChange = (e: any) => {
    const amount = parseFloat(e.target.value);

    setETHAmount(amount);

    const calculatedNCTAmount =
      Number(ethers.utils.parseEther(amount.toString())) * tokenPerEth;

    setETHAmount(amount * tokenPerEth);

    setNCTAmount(ethers.utils.formatEther(calculatedNCTAmount.toString()));
    
  };

  const tokenSwap = async (e: any) => {
    e.preventDefault();

    try {
      
      const gg = await swapToken(e.target.tokenAmount.value);
      console.log(gg)

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-[#111] p-10 flex items-center justify-around ">

      <div className="w-full flex items-center justify-around flex-col md:flex-row">

        <div className="w-full md:w-[45%] bg-[#444] p-4 rounded-lg drop-shadow-lg">

          <h2 className="text-5xl font-bold mb-2 text-center">Wool Token</h2>

          <p className="text-[15px] p-2">
            Get yourself some wool, you will be able to use eth to get yourself
            the token that will be a small stepping stone that will power the
            dApp in future. You will be able to mint to earn this token or stake
            your NFT and others to earn as well.
          </p>

        </div>

        <div className="bg-[#222] p-10 rounded-lg mt-10 drop-shadow-lg">

          <h2 className="text-2xl font-bold mb-2">Total Supply: 100 mil</h2>

          <p className="text-md text-center font-bold">
            Current Price: 1 eth per 10000 token
          </p>

          <div className="w-[200px] h-[200px] relative mx-auto">
            <Image src="/cottentToken.png" alt="nft-image" fill />
          </div>

          <form onSubmit={tokenSwap}>
            <p className="mb-2">Total token recieving: {ETHAmount}</p>

            <input
              type="number"
              placeholder="Enter eth amount"
              step="0.00001"
              min="0.00015"
              max="100000"
              className="p-2 rounded-lg bg-[#111] w-full"
              id="tokenAmount"
              name="tokenAmount"
              onChange={handleETHChange}
            />
                                                                                                                      
            <button className="bg-[#444] p-2 rounded-lg mt-2 w-full hover:bg-[#111]">
              swap
            </button>
          </form>

        </div>

      </div>

    </div>
  );
};

export default ERCToken;
