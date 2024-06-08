import Link from "next/link";
import React from "react";

const Page = () => {
  const vaults = [
    {
      type: "AUTO-COMPOOUND",
      tokenAddress: "0x",
      totalStake: 123,
      multiplier: 40,
      apy: 123,
    },
    {
      type: "COMPOUND",
      tokenAddress: "0x",
      totalStake: 123,
      multiplier: 40,
      apy: 123,
    },
  ];

  const userData = [
    {
      currentlyStake: 123,
    },
  ];

  return (
    <main className="text-2xl font-bold">
      <header className="w-full bg-[#222] p-5">
        <Link href="/" className="text-sm bg-[#111] p-2 rounded-lg font-bold  hover:bg-[#444]">Go Back</Link>
        <h2 className="text-4xl mb-2 mt-2">Staking</h2>
        <p className="text-[14px]">
          Come and stake your tokens and earn rewards.
        </p>
      </header>

      <section className="text-2xl font-bold text-center p-10 ">
        <h2>Staking comin soon</h2>
      </section>
    </main>
  );
};

export default Page;
