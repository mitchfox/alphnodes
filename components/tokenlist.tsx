interface TokenProps {
    className?: string;
    tokenContract: string;
    tokenName: string;
    tokenPrice: string;
    tokenSymbol?: string;
    tokenImg: string;
    tokenDecimals?: string;
    tokenDescription?: string;
    tokenMarketCap?: string;
    tokenTotalSupply?: string;
    tokenCirculatingSupply?: string;
}

export default function TokenList({
    className,
    tokenContract,
    tokenName,
    tokenPrice,
    tokenSymbol,
    tokenImg,
    tokenDecimals,
    tokenDescription,

}: TokenProps) {
    return (
        <div className={"max-w-6xl"}>
            <div className="text-left">




                {/*  TODO */}
                {/*  Get JSON data  */}
                {/* map through one table element for all items */}
                {/*  Add switch to view in alph ℵ0.03 */}


                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">

                    <table className="w-full text-sm text-left rtl:text-right text-neutral-500 dark:text-neutral-400"
                    >
                        <thead className="text-xs text-neutral-800 uppercase bg-slate-50 dark:bg-neutral-700 dark:text-neutral-400">
                            <tr>

                                <th scope="col" className="px-6 py-3">
                                    Token
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Price
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    1HR
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    24HR
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
                                    Description
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Link
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b dark:bg-neutral-800 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-600">


                                <th className="px-6 py-4 text-neutral-600">
                                    <div style={{ display: 'flex' }}>

                                    <img className="w-6 h-6 rounded-full flex me-2" src="https://cdn.dribbble.com/userupload/11075159/file/original-c68efac6d492a50df069ad819f828c76.png?resize=2048x2048" alt="sym" />
                                        $ALPH
                                    </div>
                                    
                                </th>
                                <th scope="row" className="px-6 py-3 text-neutral-00">
                                    $1.93
                                </th>
                                <th scope="row" className="px-6 py-3 text-green-600">
                                    -2%
                                </th>
                                <th scope="row" className="px-6 py-3 text-green-600 ">
                                    23%
                                </th>
                                <th scope="row" className="px-6 py-3 text-neutral-600 ">
                                    $120,080,042	
                                </th>
                                <th scope="row" className="px-6 py-3 text-neutral-600 ">
                                70,000,000	
                                </th>
                                <th scope="row" className="px-6 py-3 text-neutral-600 ">
                                    100,000,000
                                </th>
                                <th scope="row" className="px-6 py-3 text-neutral-400" style={{ fontWeight: '500' }}>
                                    Description
                                </th>


                                <th scope="row" className="px-6 py-3 text-neutral-600 ">
                                        <span style={{ display: 'inline-block' }}>Link</span>
                                </th>
                            </tr>


                            

                        </tbody>
                    </table>
                </div>



            </div>
        </div>
    );
}
