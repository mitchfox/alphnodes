"use client";

import React, { useState, useEffect } from "react";
// import {
//     TokenInfo,
//     TokenList,
//     mainnetTokensMetadata,
//     testnetTokensMetadata,
//   } from '@alephium/token-list'

import { GetAlphPrice } from "../functions/getAlphPrice";

// import {tokens} from "@alephium/token-list";

const ALPH_DECIMALS = 18;
const EXPLORER_BASEURL = "https://explorer.mainnet.alephium.org"
const BACKEND_BASEURL = "https://alephium-backend.ono.re"


interface Token {
    contractid: string;
    tokenid: string;
    decimals: number;
    supply?: number;
    circulating_supply_address?: string;
    symbol: string;
    // Add other properties as needed
}

interface TokenPriceInfo extends Token {
    pricePerAlph: number;
    priceUsd: number;
    supply: number;
    maxSupply: number;
    circulatingSupply: number;
    logoURI: string;
    priceInUSD?: number;
}


export default function TokenTable() {

    // const [rawTokenData, setRawTokenData] = useState(tokens.mainnet);
    // console.log(tokens.mainnet);
    // console.log(mainnetTokensMetadata)
    const [tokenData, setTokenData] = useState<TokenPriceInfo[]>([]);
    const [rawTokenData, setRawTokenData] = useState(
        [
            {
                "tokenid": "1a281053ba8601a658368594da034c2e99a0fb951b86498d05e76aedfe666800",
                "contractid": "25ywM8iGxKpZWuGA5z6DXKGcZCXtPBmnbQyJEsjvjjWTy",
                "symbol": "AYIN",
                "token_address": "239NpfNCR6mVyJKrm171YaNkDfwAe6kQnBr6Kg8gXV5CK",
                "decimals": 18,
                "logoURI": "https://raw.githubusercontent.com/alephium/token-list/master/logos/AYIN.png",
                "socials": 'ayincoin'
            },
            {
                "tokenid": "66da610efb5129c062e88e5fd65fe810f31efd1597021b2edf887a4360fa0800",
                "contractid": "22PUN5TpytzGRXZnzkHViRaWioiGNzdufJH1CxFyQF5Sf",
                "symbol": "ALF",
                "supply": 161803,
                "decimals": 9,
                "logoURI": "https://raw.githubusercontent.com/alephium/token-list/master/logos/ALF.png",
                "socials": 'N/A'
            },
            {
                "tokenid": "b522184377a33e376e997a950288fa76c1f48e97bc29cd10779adc7cfb673200",
                "contractid": "w5ZU1rV34YJryDCXCXJBXA77Wbx5L4DCmunDG3Pn5GWb",
                "symbol": "BERRY",
                "decimals": 0,
                "supply": 10000,
                "logoURI": "https://raw.githubusercontent.com/alephium/token-list/master/logos/BERRY.png",
                "socials": 'N/A'
            },
            {
                "tokenid": "7da28936499f56ffed497fe7eba856aa85eeb943bab2478e36f7020d89cd2400",
                "contractid": "28kZejt34N8nDWT76bDTo3w7j2PZrPrnPMcsMGh6KsTDH",
                "symbol": "VLAD",
                "decimals": 9,
                "circulating_supply_address": "1GDegYLQDXFwDBwMnjTzZXGXW4vYoxxwPKEHNAf8smquV",
                "supply": 999999,
                "logoURI": "https://raw.githubusercontent.com/alephium/token-list/master/logos/VLAD.png",
                "socials": 'N/A'
            },
            {
                "tokenid": "b2d71c116408ae47b931482a440f675dc9ea64453db24ee931dacd578cae9002",
                "contractid": "27wpryy3RtEYLnkuF2xgPKQfcYAxWY4mFxaM8XHpXndfD",
                "symbol": "PACA",
                "decimals": 0,
                "supply": 100000000,
                "logoURI": "https://raw.githubusercontent.com/alephium/token-list/master/logos/PACA.png",
                "socials": 'alphpacas'
            },
            {
                "tokenid": "1516c410b54470d667e1315ce2faa81870c76c5c7a491e3e86eeec8366495502",
                "contractid": "tx1Uck1idLzfyjAbyqrFkNWrxz1MfKCV5FELnJdtbVUs",
                "symbol": "TAIL",
                "decimals": 0,
                "supply": 69000000,
                "logoURI": "https://raw.githubusercontent.com/alephium/token-list/master/logos/TAIL.png",
                "socials": 'N/A'
            },
            {
                "tokenid": "df3008f43a7cc1d4a37eef71bf581fc4b9c3be4e2d58ed6d1df483bbb83bd200",
                "contractid": "21nj6sBTtQfTwCErYAHF3CNBaDRAc1E1Q3aUCcbsuG8mu",
                "symbol": "NGU",
                "decimals": 7,
                "supply": 7777777,
                "logoURI": "https://raw.githubusercontent.com/alephium/token-list/master/logos/NGU.png",
                "socials": 'numbergoup_ngu'
            },
            {
                "tokenid": "3f0139e1b0aa2cf0a9400ccdb73d00750bcfc8c7be0e858052d794491c8a5900",
                "contractid": "23hGMBJv83y1r9fEvzYYzi6y2Eofg4wd7VWJ1fPRNwDYB",
                "symbol": "SHIN",
                "decimals": 5,
                "circulating_supply_address": "1pyEwJ576wnMh2acyednFq4p8f16QqWK5TJ5zsDCYLQp",
                "supply": 100000000,
                "logoURI": "https://raw.githubusercontent.com/alephium/token-list/master/logos/SHIN.png",
                "socials": 'Shin_Inu_Aleph'
            },
            {
                "tokenid": "c1aeea313e36454f35beaf40130c9219faa40ba645aff93e16429146039f8202",
                "contractid": "uReV154fNdL1fNbvw8qghk67ERGbuPkLToNMCwYjiaXh",
                "symbol": "WANG",
                "decimals": 5,
                "circulating_supply_address": "1GKH3r2ZG9M8R1TRFFxrf5gq6Ww7MgdrLYt7cptiG4Vrx",
                "supply": 6000000,
                "logoURI": "https://raw.githubusercontent.com/alephium/token-list/master/logos/WANG.png",
                "socials": 'ChengisWang'
            },
            {
                "tokenid": "4e0eb20afb173cd534ae29acd013861115482c1e3d8ed626294bbe1008a3f900",
                "contractid": "xXzsxzdwx2vWvA5opvfnzjBCZRgHk1rP4sq4RjExZGNK",
                "symbol": "MIX",
                "decimals": 8,
                "circulating_supply_address": "X2Wp1VoypFSASzqhUoockvTPt6vcNaEyi7KKSetUHq6TZ21DaXP8dKAsirwH7YBjBba2pCkd2khaMfWUjrDQgvWFvjwC5oSi3xJBCkWpnHLQNwngSAnmS6RmT9Qad9SD1V2aJW",
                "supply": 10000000,
                "logoURI": "https://raw.githubusercontent.com/alephium/token-list/master/logos/MIX.png",
                "socials": 'KleoMixer'
            },
            {
                "tokenid": "b49031320af0ff6fd2764ec7176687257efe1d491eff1baf315db21f10412c00",
                "contractid": "24N2ytovpgBtVwiqLjd89c2fvFe2qD7HzhnLY6RrivAbH",
                "symbol": "MIRA",
                "decimals": 9,
                "circulating_supply_address": "1AxpRjnEpXgbbqKLeH4ZxU14gzzW6Jr87TZKPR5Nmmran",
                "supply": 100000000,
                "logoURI": "https://raw.githubusercontent.com/alephium/token-list/master/logos/MIRA.png",
                "socials": 'mira_alephium'
            },
            // {
            //     "tokenid": "11379064c747f89753d493b562130a63caf1a1fc448fcb161e507d2e542c0b00",
            //     "contractid": "urABfW9SN3bniTmQ83chJCuBMvsbu9rFasictu1pc2qM",
            //     "symbol": "VIRL",
            //     "decimals": 4,
            //     "supply": 100000000,
            //     "logoURI": "https://raw.githubusercontent.com/alephium/token-list/master/logos/VIRL.png"
            // },
            // {
            //     "tokenid": "06bc1a82909c566eb6b00a3dc2dfca0d0564f43f3e8357114a0a59b182792a00",
            //     "contractid": "dCN5U4a8o6xVJm4xHKWzW5eqYDvWTMwPZ7AzKftfechp",
            //     "symbol": "LOVE",
            //     "decimals": 7,
            //     "supply": 10000000000000000000,
            //     "logoURI": "https://raw.githubusercontent.com/alephium/token-list/master/logos/LOVE.png"
            // },
            // {
            //     "tokenid": "e565d11d6d5194dc2a65c7d67c324d341bc55f1e7131a9ef5577e8e75e199000",
            //     "contractid": "tHgb6FMEB1hrB5TmF4CrmQy8zEs4JiVzbWQ8qzBeUJoW",
            //     "symbol": "SQRL",
            //     "decimals": 4,
            //     "supply": 100000000,
            //     "logoURI": "https://raw.githubusercontent.com/alephium/token-list/master/logos/SQRL.png"
            // },
            // {
            //     "tokenid": "f251784031eaea09e4521ecab9dcda5ba8f94d62ce1ab71a952086f2c5d19c00",
            //     "contractid": "259q68hDzqx5czbFXd4GrPEBLH5A1AfcD3pKBJJg9gHjh",
            //     "symbol": "ALPHSQRL",
            //     "decimals": 18,
            //     "supply": 100000000,
            //     "logoURI": "https://raw.githubusercontent.com/alephium/token-list/master/logos/ALPHSQRL.png"
            // },
            // {
            //     "tokenid": "1db28d7bf24e0e6dcd600d3ece2c3ac70947af8c115aa4d32670608c0e49f900",
            //     "contractid": "24N2ytovpgBtVwiqLjd89c2fvFe2qD7HzhnLY6RrivAbH",
            //     "symbol": "NUTS",
            //     "decimals": 10,
            //     "supply": 100000000,
            //     "logoURI": "https://raw.githubusercontent.com/alephium/token-list/master/logos/NUTS.png"
            // },
            // {
            //     "tokenid": "93cc555d3dfc0a81aa6f3127c0108e529a32c87c595c1b89f1855e698c2bc700",
            //     "contractid": "22D5PvhBv3UXg51XHgujUY8oazSt8Jjj3vWe5yZdvyJLb",
            //     "symbol": "SUCC",
            //     "decimals": 10,
            //     "supply": 100000000,
            //     "logoURI": "https://raw.githubusercontent.com/alephium/token-list/master/logos/SUCC.png"
            // },
            // {
            //     "tokenid": "147a7acd3fe8804c37ac6012a8c72660551473d641abb9bd6ff5b1f2545bb200",
            //     "contractid": "pRQ8ZQ5aZa7JCB6NYQw8nW6TBz7C1W1FFXVnDYnru4Rh",
            //     "symbol": "COFFEE",
            //     "decimals": 4,
            //     "supply": 100000000,
            //     "logoURI": "https://raw.githubusercontent.com/alephium/token-list/master/logos/COFFEE.png"
            // },
            // {
            //     "tokenid": "3d0a1895108782acfa875c2829b0bf76cb586d95ffa4ea9855982667cc73b700",
            //     "contractid": "TCKV48nUfu4E55bMxwN5ZTyRtNfNof3d1tEWNX6xvwVN",
            //     "symbol": "DAI",
            //     "decimals": 18,
            //     "logoURI": "https://raw.githubusercontent.com/alephium/token-list/master/logos/DAI.png"
            // },
            // {
            //     "tokenid": "383bc735a4de6722af80546ec9eeb3cff508f2f68e97da19489ce69f3e703200",
            //     "contractid": "27y9iPfXtR2hPVUWz7DDhzmF84JFw75r2MW3Kme1pZwMz",
            //     "symbol": "WBTC",
            //     "decimals": 8,
            //     "logoURI": "https://raw.githubusercontent.com/alephium/token-list/master/logos/WBTC.png"
            // },
            // {
            //     "tokenid": "556d9582463fe44fbd108aedc9f409f69086dc78d994b88ea6c9e65f8bf98e00",
            //     "contractid": "2Af5z5dQpD5scfDPfdKW1BjUMo8Nc3wnrLGh58GFvoNq",
            //     "symbol": "USDT",
            //     "decimals": 6,
            //     "logoURI": "https://raw.githubusercontent.com/alephium/token-list/master/logos/USDT.png"
            // },
            // {
            //     "tokenid": "722954d9067c5a5ad532746a024f2a9d7a18ed9b90e27d0a3a504962160b5600",
            //     "contractid": "2FTcCTToSyBf3rYttzFe2oRH2a6VzU1YxqEN8p7XZ8YFy",
            //     "symbol": "USDC",
            //     "decimals": 6,
            //     "logoURI": "https://raw.githubusercontent.com/alephium/token-list/master/logos/USDC.png"
            // },
            // {
            //     "tokenid": "19246e8c2899bc258a1156e08466e3cdd3323da756d8a543c7fc911847b96f00",
            //     "contractid": "T48NxnjZf96LgBnePnUfw3wY3t9BXAd3c1y9jR9xshG1",
            //     "symbol": "WETH",
            //     "decimals": 18,
            //     "logoURI": "https://raw.githubusercontent.com/alephium/token-list/master/logos/WETH.png"
            // }
        ]

    );
    const [alphPrice, setAlphPrice] = useState(0);
    const [tokenPrices, setTokenPrices] = useState<TokenPriceInfo[]>([]);
    const [windowWidth, setWindowWidth] = useState<number | undefined>(undefined);
    const [simplePricingChecked, setSimplePricingChecked] = useState(false);
    const [alphPricingChecked, setalphPricingChecked] = useState(false);
    useEffect(() => {
        setWindowWidth(window.innerWidth);
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    function numberWithCommas(x: number) {
        const parts = x.toString().split('.');
        return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    // GET CIRCULATING SUPPLY IF PROVIDED
    async function getCirculatingSupply(supply: number, address: string, tokenid: string, decimals: number) {
        try {
            const remainingSupply = await fetch(
                `${BACKEND_BASEURL}/addresses/${address}/tokens/${tokenid}/balance`
            )
                .then((resp) => resp.json())
                .then((data) => {
                    return data["balance"];
                })
                .catch((error) => {
                    console.error(error);
                    return 0;
                });

            return supply - remainingSupply / Math.pow(10, decimals);
        } catch (error) {
            console.error(error);
            return 0;
        }
    }

    //  GET TOKEN PRICES & CALCULATE MARKET CAP ETC..
    const getTokenPrices = async (contractid: string, tokenid: string, decimals: number, alphPrice: number, symbol: string,) => {
        try {
            const [tokenResponse, alphResponse] = await Promise.all([
                fetch(`${BACKEND_BASEURL}/addresses/${contractid}/tokens/${tokenid}/balance`).then(resp => resp.json()),
                fetch(`${BACKEND_BASEURL}/addresses/${contractid}/balance`).then(resp => resp.json())
            ]);

            // 
            const tokenBalance = parseFloat(tokenResponse.balance) / Math.pow(10, decimals);
            const alphBalance = parseFloat(alphResponse.balance) / Math.pow(10, ALPH_DECIMALS);
            // console.log(symbol, tokenBalance, alphBalance);

            // Calc alph price & usd
            const pricePerAlph = alphBalance / tokenBalance;
            const priceInUSD = pricePerAlph * alphPrice;

            return [pricePerAlph, priceInUSD];
        } catch (error) {
            console.error(error);
            throw new Error('Failed to fetch price for token');
        }
    }



    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch ALPH price
                const alphPrice = await GetAlphPrice();

                // Fetch token prices for each token in rawTokenData
                const tokenPrices = await Promise.all(rawTokenData.map(async (token) => {
                    const { contractid, tokenid, decimals, symbol, circulating_supply_address } = token;
                    const [pricePerAlph, priceInUSD] = await getTokenPrices(contractid, tokenid, decimals, alphPrice, symbol);
                    let circulatingSupply = undefined;
                    let supply = token.supply || 0;
                    if (circulating_supply_address) {
                        circulatingSupply = await getCirculatingSupply(token.supply, circulating_supply_address, tokenid, decimals);
                    }
                    return { ...token, pricePerAlph, priceInUSD, circulatingSupply, supply };
                }));

                // Sort tokens by market cap
                const sortedTokenPrices = tokenPrices.slice().sort((a, b) => {
                    const marketCapA = (a.priceInUSD || 0) * (a.circulatingSupply || a.supply || 0);
                    const marketCapB = (b.priceInUSD || 0) * (b.circulatingSupply || b.supply || 0);

                    // If both tokens have missing circulating supply, maintain original order
                    if (!a.circulatingSupply && !b.circulatingSupply) {
                        return 0;
                    }
                    // If only token A has missing circulating supply, move it to the bottom
                    else if (!a.circulatingSupply) {
                        return 1;
                    }
                    // If only token B has missing circulating supply, move it to the bottom
                    else if (!b.circulatingSupply) {
                        return -1;
                    }
                    // Otherwise, sort by market cap in descending order
                    else {
                        return marketCapB - marketCapA;
                    }
                });

                // Add missing properties to each object in the array
                const updatedTokenPrices = sortedTokenPrices.map((token) => ({
                    ...token,
                    priceUsd: 0, // Add the missing property priceUsd
                    maxSupply: 0, // Add the missing property maxSupply
                }));

                // Set the token prices in state
                setTokenPrices(updatedTokenPrices as TokenPriceInfo[]);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);




    // Render the table using tokenPrices state
    return (
        <>

            <div className="max-w-4xl px-4 sm:px-6 mx-auto" style={{ display: 'flex', width: '100%', textAlign: 'center', margin: 'auto', }}>

                <div style={{ margin: 'auto 0px auto auto' }}>
                    {/* <label className="inline-flex items-center mb-5 cursor-pointer mr-12">
                <input type="checkbox" value={simplePricingChecked} onChange={() => setSimplePricingChecked(!simplePricingChecked)} className="sr-only peer" />
                <div className="relative w-9 h-5 bg-gray-300/50  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-orange-300"></div>
                <span className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Simple</span>
            </label>  */}

                    <label className="inline-flex items-center mb-5 cursor-pointer">
                        <input type="checkbox" value={alphPricingChecked.toString()} onChange={() => setalphPricingChecked(!alphPricingChecked)} className="sr-only peer"

                        />
                        <p className="me-2 text-sm font-medium text-gray-900 dark:text-gray-300 font-semibold">{alphPricingChecked ? "ℵALPH" : '$USD'}</p>

                        <div className="relative w-9 h-5 bg-gray-200  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-orange-300"></div>
                    </label>
                </div>
            </div>

            <div className="max-w-4xl px-4 sm:px-6 mx-auto" style={{ margin: 'auto', width: 'auto' }}>
                <div className="relative overflow-x-auto shadow-md rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-800 uppercase bg-slate-50 dark:bg-gray-700 dark:text-gray-300">
                            <tr>
                                <th scope="col" className="px-6 py-3 sticky">
                                    Token
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    USD
                                </th>
                                {/* <th scope="col" className="px-6 py-3">
                        Price ALPH
                    </th> */}
                                <th scope="col" className="px-6 py-3">
                                    Market Cap
                                </th>


                                <>
                                    <th scope="col" className="px-6 py-3">
                                        Circulating Supply
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Total Supply
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Social
                                    </th>
                                </>

                            </tr>
                        </thead>
                        <tbody>
                            {tokenPrices.map((token, index) => (
                                <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th className="px-6 py-4 text-gray-600 dark:text-gray-400">
                                        <div style={{ display: 'flex' }}>
                                            <img className="w-6 h-6 rounded-full flex me-2" src={token.logoURI} alt="sym" />
                                            {token.symbol}
                                        </div>
                                    </th>
                                    <th scope="row" className="px-6 py-3 text-gray-600 dark:text-gray-400">

                                        {
                                            alphPricingChecked ?
                                                `ℵ${token.pricePerAlph.toFixed(4)}`
                                                :
                                                `$${token.priceInUSD?.toFixed(3) ?? 'N/A'}`
                                        }


                                    </th>
                                    {/* <th scope="row" className="px-6 py-3 text-gray-600 dark:text-gray-400">
                            ℵ{token.pricePerAlph.toFixed(4)}
                        </th> */}
                                    <th scope="row" className="px-6 py-3 text-gray-600 dark:text-gray-400">
                                        {
                                            token.circulating_supply_address ?
                                                `$${numberWithCommas(((Number(token.priceInUSD) || 0) * (Number(token.circulatingSupply) || 0)))}`
                                                :
                                                'TBA'
                                        }
                                    </th>


                                    <>

                                        <th scope="row" className="px-6 py-3 text-gray-600 dark:text-gray-400">
                                            {
                                                token.circulating_supply_address ?
                                                    <>
                                                        {numberWithCommas(token.circulatingSupply)}
                                                    </>
                                                    :
                                                    'TBA'
                                            }
                                        </th>
                                        <th scope="row" className="px-6 py-3 text-gray-600 dark:text-gray-400">
                                            {token.supply ? numberWithCommas(token.supply) : 'N/A'}
                                        </th>

                                        <th scope="col" className="px-6 py-3 text-cyan-600 dark:text-cyan-400">

                                            {
                                                token.socials === 'N/A' ?
                                                    'N/A'
                                                    :
                                                    <a href={"https://twitter.com/" + token.socials} target="_blank">@{token.socials}</a>
                                            }

                                           
                                        </th>
                                    </>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>

        </>

    );

}