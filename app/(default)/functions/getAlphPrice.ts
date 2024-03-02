const ALPH_DECIMALS = 18;
const EXPLORER_BASEURL = "https://explorer.mainnet.alephium.org"
//const BACKEND_BASEURL = "https://backend.mainnet.alephium.org"
const BACKEND_BASEURL = "https://alephium-backend.ono.re"


export const GetAlphPrice = async (): Promise<number> => {
    try {
      const response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=alephium&vs_currencies=usd");
      const data = await response.json();
      return data.alephium.usd;
    } catch (error) {
      console.error(error);
      return 0;
    }
  };