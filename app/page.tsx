
import Hero from "./components/landing/hero";
import NftColSec from "./components/landing/nft";
import ERCToken from "./components/landing/ERC";
import FooterMain from "./components/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col text-white justify-between ">

      {/* hero */}
      <Hero />

      {/* nft */}
      <NftColSec />

      {/* ERC */}
      <ERCToken />

      {/* Footer */}

      <FooterMain />
      

    </main>
  );
}
