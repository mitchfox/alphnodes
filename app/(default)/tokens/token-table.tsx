"use client";

import React, { useState, useEffect } from "react";
import TokenList from "@/components/tokenlist";
import { GetAlphPrice } from "../functions/getAlphPrice";

import tokens from "@alephium/token-list";

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
    pricePerAlph: string;
    priceUsd: string;
    supply: number;
    maxSupply: number;
}

export default function TokenTable() {

    // const [rawTokenData, setRawTokenData] = useState(tokens.mainnet);
    console.log(tokens.mainnet);
    const [tokenData, setTokenData] = useState<TokenPriceInfo[]>([]);
    const [rawTokenData, setRawTokenData] = useState([
        {
            "tokenid": "1a281053ba8601a658368594da034c2e99a0fb951b86498d05e76aedfe666800",
            "contractid": "25ywM8iGxKpZWuGA5z6DXKGcZCXtPBmnbQyJEsjvjjWTy",
            "symbol": "AYIN",
            "decimals": 18,
            "logoURI": "https://raw.githubusercontent.com/alephium/token-list/master/logos/AYIN.png"
        },
        {
            "tokenid": "66da610efb5129c062e88e5fd65fe810f31efd1597021b2edf887a4360fa0800",
            "contractid": "22PUN5TpytzGRXZnzkHViRaWioiGNzdufJH1CxFyQF5Sf",
            "symbol": "ALF",
            "supply": 161803,
            "decimals": 9,
            "logoURI": "https://raw.githubusercontent.com/alephium/token-list/master/logos/ALF.png"
        },
        {
            "tokenid": "b522184377a33e376e997a950288fa76c1f48e97bc29cd10779adc7cfb673200",
            "contractid": "w5ZU1rV34YJryDCXCXJBXA77Wbx5L4DCmunDG3Pn5GWb",
            "symbol": "BERRY",
            "decimals": 0,
            "supply": 10000,
            "logoURI": "https://raw.githubusercontent.com/alephium/token-list/master/logos/BERRY.png"
        },
        {
            "tokenid": "7da28936499f56ffed497fe7eba856aa85eeb943bab2478e36f7020d89cd2400",
            "contractid": "28kZejt34N8nDWT76bDTo3w7j2PZrPrnPMcsMGh6KsTDH",
            "symbol": "VLAD",
            "decimals": 9,
            "circulating_supply_address": "1GDegYLQDXFwDBwMnjTzZXGXW4vYoxxwPKEHNAf8smquV",
            "supply": 999999,
            "logoURI": "https://raw.githubusercontent.com/alephium/token-list/master/logos/VLAD.png"
        },
        {
            "tokenid": "b2d71c116408ae47b931482a440f675dc9ea64453db24ee931dacd578cae9002",
            "contractid": "27wpryy3RtEYLnkuF2xgPKQfcYAxWY4mFxaM8XHpXndfD",
            "symbol": "PACA",
            "decimals": 0,
            "logoURI": "https://raw.githubusercontent.com/alephium/token-list/master/logos/PACA.png"
        },
        {
            "tokenid": "1516c410b54470d667e1315ce2faa81870c76c5c7a491e3e86eeec8366495502",
            "contractid": "tx1Uck1idLzfyjAbyqrFkNWrxz1MfKCV5FELnJdtbVUs",
            "symbol": "TAIL",
            "decimals": 0,
            "supply": 200000,
            "logoURI": "https://raw.githubusercontent.com/alephium/token-list/master/logos/TAIL.png"
        },
        {
            "tokenid": "df3008f43a7cc1d4a37eef71bf581fc4b9c3be4e2d58ed6d1df483bbb83bd200",
            "contractid": "21nj6sBTtQfTwCErYAHF3CNBaDRAc1E1Q3aUCcbsuG8mu",
            "symbol": "NGU",
            "decimals": 7,
            "supply": 7777777,
            "logoURI": "https://raw.githubusercontent.com/alephium/token-list/master/logos/NGU.png"
        },
        {
            "tokenid": "3f0139e1b0aa2cf0a9400ccdb73d00750bcfc8c7be0e858052d794491c8a5900",
            "contractid": "23hGMBJv83y1r9fEvzYYzi6y2Eofg4wd7VWJ1fPRNwDYB",
            "symbol": "SHIN",
            "decimals": 5,
            "circulating_supply_address": "1pyEwJ576wnMh2acyednFq4p8f16QqWK5TJ5zsDCYLQp",
            "supply": 100000000,
            "logoURI": "https://raw.githubusercontent.com/alephium/token-list/master/logos/SHIN.png"
        },
        {
            "tokenid": "c1aeea313e36454f35beaf40130c9219faa40ba645aff93e16429146039f8202",
            "contractid": "uReV154fNdL1fNbvw8qghk67ERGbuPkLToNMCwYjiaXh",
            "symbol": "WANG",
            "decimals": 5,
            "circulating_supply_address": "1GKH3r2ZG9M8R1TRFFxrf5gq6Ww7MgdrLYt7cptiG4Vrx",
            "supply": 6000000,
            "logoURI": "https://raw.githubusercontent.com/alephium/token-list/master/logos/WANG.png"
        },
        {
            "tokenid": "4e0eb20afb173cd534ae29acd013861115482c1e3d8ed626294bbe1008a3f900",
            "contractid": "xXzsxzdwx2vWvA5opvfnzjBCZRgHk1rP4sq4RjExZGNK",
            "symbol": "MIX",
            "decimals": 8,
            "circulating_supply_address": "X2Wp1VoypFSASzqhUoockvTPt6vcNaEyi7KKSetUHq6TZ21DaXP8dKAsirwH7YBjBba2pCkd2khaMfWUjrDQgvWFvjwC5oSi3xJBCkWpnHLQNwngSAnmS6RmT9Qad9SD1V2aJW",
            "supply": 10000000,
            "logoURI": "https://raw.githubusercontent.com/alephium/token-list/master/logos/MIX.png"
        },
        {
            "tokenid": "b49031320af0ff6fd2764ec7176687257efe1d491eff1baf315db21f10412c00",
            "contractid": "24N2ytovpgBtVwiqLjd89c2fvFe2qD7HzhnLY6RrivAbH",
            "symbol": "MIRA",
            "decimals": 9,
            "circulating_supply_address": "1AxpRjnEpXgbbqKLeH4ZxU14gzzW6Jr87TZKPR5Nmmran",
            "supply": 100000000,
            "logoURI": "https://raw.githubusercontent.com/alephium/token-list/master/logos/MIRA.png"
        }
    ]
    );
    const [alphPrice, setAlphPrice] = useState(0);
    const [tokenPrices, setTokenPrices] = useState<TokenPriceInfo[]>([]);


    function numberWithCommas(x: number) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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
                const marketCapA = a.priceInUSD * (a.circulatingSupply || a.supply);
                const marketCapB = b.priceInUSD * (b.circulatingSupply || b.supply);
                return marketCapB - marketCapA; // Sort in descending order
            });

                // Set the token prices in state
                setTokenPrices(sortedTokenPrices);
                // console.log(tokenPrices);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);






    // Render the table using tokenPrices state
    return (
        <div style={{ width: '100%', display: 'flex' }}>
            <div style={{ margin: 'auto', width: 'auto' }}>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-800 uppercase bg-slate-50 dark:bg-gray-700 dark:text-gray-300">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Token
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    USD
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Price ALPH
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Market Cap
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Circulating Supply
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Total Supply
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Website
                                </th>
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
                                        ${token.priceInUSD.toFixed(3)}
                                    </th>
                                    <th scope="row" className="px-6 py-3 text-gray-600 dark:text-gray-400">
                                        ℵ{token.pricePerAlph.toFixed(4)}
                                    </th>
                                    <th scope="row" className="px-6 py-3 text-gray-600 dark:text-gray-400">
                                        {
                                            token.circulating_supply_address ?
                                                `$${numberWithCommas((token.priceInUSD * token.circulatingSupply).toFixed(0))}`
                                                :
                                                'TBA'
                                        }
                                    </th>
                                    <th scope="row" className="px-6 py-3 text-gray-600 dark:text-gray-400">
                                        {
                                            token.circulating_supply_address ?
                                                <>
                                                    {numberWithCommas(Number(token.circulatingSupply.toFixed(0)))}
                                                </>
                                                :
                                                'TBA'
                                        }
                                    </th>
                                    <th scope="row" className="px-6 py-3 text-gray-600 dark:text-gray-400">
                                        {numberWithCommas(token.supply.toFixed(0))} {/* Assuming supply is a valid number */}
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                    Website
                                </th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );

}