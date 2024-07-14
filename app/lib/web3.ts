import { ethers } from "ethers";
import nftJasn from "./nftab.json";
import tokenAbi from "./tokenAbi.json";

export const nftSmartContract = "0x42A0E4b798B1E823884DA0675994E113159F6184";
export const tokenSmartContract = "0xBBaefB4ec65bb8Bd9d0e81aB0Bc8bA2Bb9723278";

export const getEthereumObject = () => {
  return typeof window !== "undefined" ? window.ethereum : null;
};

export const getEthereumAccount = async () => {
  try {
    const ethereum: Window = getEthereumObject();

    if (!ethereum) {
      console.error("Make sure you have Metamask!");
      return null;
    }

    const accounts = await ethereum.request({ method: "eth_requestAccounts" });

    if (accounts.length !== 0) {
      const account = accounts[0];
      return account;
    } else {
      alert("connect your metamask account....");

      // Setup another alert
      console.error("No authorized account found");
      return null;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const mintNFT = async (_amount: any) => {
  try {
    const amountInWei = ethers.utils.parseEther((0.024 * _amount).toString());

    const provider = new ethers.providers.Web3Provider(window.ethereum);

    // Get the signer
    const signer = provider.getSigner();

    // Contract main
    const contractInstance = new ethers.Contract(
      nftSmartContract,
      nftJasn,
      signer
    );

    await contractInstance.mint(_amount, {
      value: amountInWei,
      gasLimit: 600000,
    });
  } catch (error) {
    console.log(error);
  }
};

export const swapToken = async (_amount: any) => {
  try {
    // Convert the input amount to a BigNumber object
    const amountInWei = ethers.utils.parseEther(_amount.toString());

    const provider = new ethers.providers.Web3Provider(window.ethereum);

    // Get the signer
    const signer = provider.getSigner();

    // Contract main
    const contractInstance = new ethers.Contract(
      tokenSmartContract,
      tokenAbi,
      signer
    );

    await contractInstance.swapEtherForTokens({
      value: amountInWei,
      gasLimit: 600000,
    });
  } catch (error) {
    console.log(error);
  }
};

export const PulseContractStake = async (amount: number) => {
  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    // Get the signer
    const signer = provider.getSigner();

    // Contract main
    const contractInstance = new ethers.Contract(
      tokenSmartContract,
      tokenAbi,
      signer
    );

    console.log(contractInstance);
    await contractInstance.stake(amount);
  } catch (error) {
    console.log("error", error);
  }
};

export const PulseContractunStake = async (_amount: any) => {
  try {
    console.log("stakee");
    const amountInWei = ethers.utils.parseEther(_amount.toString())
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    // Get the signer
    const signer = provider.getSigner();

    // Contract main
    const contractInstance = new ethers.Contract(
      tokenSmartContract,
      tokenAbi,
      signer
    );
    console.log(contractInstance);
    await contractInstance.unStake(amountInWei);

    return  "success"


  } catch (error) {
    console.log("error", error);
  }
};


export const PulseContractunClaim = async () => {
  try {
    console.log("claiming");
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    // Get the signer
    const signer = provider.getSigner();
    const address = await signer.getAddress()

    // Contract main
    const contractInstance = new ethers.Contract(
      tokenSmartContract,
      tokenAbi,
      signer
    );

    console.log(contractInstance);

    await contractInstance.claimRewards(address);

    return  "success"


  } catch (error) {
    console.log("error", error);
  }
};

export const UsreStakingBal = async () => {
  try {
    console.log("claiming");
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    // Get the signer
    const signer = provider.getSigner();
    const address = await signer.getAddress()

    // Contract main
    const contractInstance = new ethers.Contract(
      tokenSmartContract,
      tokenAbi,
      signer
    );

    console.log(contractInstance);

     const bal = await contractInstance.stakedBalances(address);

    return  bal.toString()


  } catch (error) {
    console.log("error", error);
  }
};

export const ContractOfStake = async () => {
  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    // Get the signer
    const signer = provider.getSigner();
    const address = await signer.getAddress()

    // Contract main
    const contractInstance = new ethers.Contract(
      tokenSmartContract,
      tokenAbi,
      signer
    );

    console.log(await contractInstance.annualInterest());
    console.log(contractInstance.annualInterest);
    console.log(contractInstance);

    //  const bal = await contractInstance;

    // return  bal.toString()

  } catch (error) {
    console.log("error", error)
  }
}