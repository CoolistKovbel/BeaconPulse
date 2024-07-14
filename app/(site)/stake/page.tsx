// This is a client comopinet maybe change it to a server component 
// thankkkkkksssssss


"use client";

import { ContractOfStake, PulseContractStake, PulseContractunClaim } from "@/app/lib/web3";
import Link from "next/link";
import React, { useEffect } from "react";

const Page = () => {

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const pulseContract = await PulseContractStake(
        e.target.tokenAmount.value
      );

      console.log(pulseContract);
    } catch (error) {
      console.log("Error", error);
    }
  };

  const vaults = [
    // {
    //   type: "AUTO-COMPOOUND",
    //   tokenAddress: "0x",
    //   totalStake: 123,
    //   multiplier: 40,
    //   apy: 123,
    // },
    {
      type: "COMPOUND",
      tokenAddress: "0x",
      totalStake: 123,
      multiplier: 40,
      apy: "NaN",
    },
  ];

  const userData = [
    {
      currentlyStake: 123,
    },
  ];


  const claimREward = async () => {
    const contract = await PulseContractunClaim()
    console.log(contract)
  }



  const UserData = async () => {
    return (
      <div className="text-sm p-4">
        <p>
          Currently Staked: <span>00</span>
        </p>
        <p>
          Current Earning: <span>00</span>
        </p>
        <div className="flex gap-4">
          <button className="p-2 bg-[#222] mt-2 hover:bg-[#444]" onClick={claimREward}>claim</button>

          <button className="p-2 bg-[#222] mt-2 hover:bg-[#444]">unclaim</button>
        </div>
      </div>
    );
  };



  const contractData = async () => {
    await ContractOfStake()
  }

  useEffect(() => {
    contractData()
  },[])

  return (
    <main className="text-2xl font-bold">
      <header className="w-full bg-[#222] p-5">
        <Link
          href="/"
          className="text-sm bg-[#111] p-2 rounded-lg font-bold  hover:bg-[#444]"
        >
          Go Back
        </Link>
        <h2 className="text-4xl mb-2 mt-2">Pulsing Staking</h2>
        <p className="text-[14px]">
          Come and stake your tokens and earn rewards.
        </p>
      </header>

      <section className="text-2xl font-bold text-center p-10 ">
        <h2>Staking comin soon</h2>
      </section>

      <section>
        <h2 className="text-2xl p-4">Loot comp</h2>

        <div className="flex items-center justify-around p-10 flex-wrap">
          {vaults.map((item: any) => (
            <div
              key={crypto.randomUUID()}
              className="w-[300px] h-[300px] bg-[#333]  rounded flex flex-col justify-between"
            >
              <header className="flex items-center justify-between relative p-4">
                <h2 className="text-xl">{item.type}</h2>
                <p className="text-xl">
                  {item.multiplier}{" "}
                  <span className="text-sm p-1 text-emerald-500 bg-[#222] rounded-lg">
                    multiplier
                  </span>
                </p>
                <p className="absolute -top-10 -right-10 p-2 bg-[#222] rounded">
                  {item.apy}%
                </p>
              </header>

              {item.type === "AUTO-COMPOOUND" && (
                <div>
                  <h2 className="text-sm">Sorry we are worling onit</h2>
                </div>
              )}

              <UserData />

              <footer className="p-4">
                <form
                  className="flex items-center justify-between mb-4"
                  onSubmit={handleSubmit}
                >
                  <input
                    type="text"
                    placeholder="stake "
                    className="w-[50%] bg-[#222] text-[12px] p-2"
                    id="tokenAmount"
                    name="tokenAmount"
                  />
                  <button className="bg-[#222] p-2">send</button>
                </form>
                <p>Total Staked: {item.totalStake}</p>
              </footer>
            </div>
          ))}
        </div>





      </section>
    </main>
  );
};

export default Page;
