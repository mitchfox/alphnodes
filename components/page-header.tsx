"use client";

import React, {useEffect} from "react";
import { GetAlphPrice } from "@/app/(default)/functions/getAlphPrice";

interface PageHeaderProps {
  className?: string;
  children: React.ReactNode;
  title: string;
  firstText: string;
  alph?: string;
  secondText: string;
  description?: string;
}




export default function PageHeader({
  className,
  children,
  firstText,
  alph,
  secondText,
  description,
}: PageHeaderProps) {

  const [price, setPrice] = React.useState(0);


  useEffect(() => {
    const fetchPrice = async () => {
      let price = await GetAlphPrice(); // Assuming GetTokenData is an async function
      setPrice(price);
    };

    fetchPrice();
  }, []);




  return (
    <div className={`max-w-3xl mx-auto ${className || ""}`}>
      <div className="text-center">
        <div className="relative flex items-center justify-center gap-4 mb-5 before:h-px before:w-24 before:border-b before:[border-image:linear-gradient(to_left,theme(colors.green.300),transparent)1] dark:before:[border-image:linear-gradient(to_left,theme(colors.green.300/.16),transparent)1] before:shadow-sm before:shadow-white/20 dark:before:shadow-none after:h-px after:w-24 after:border-b after:[border-image:linear-gradient(to_right,theme(colors.green.300),transparent)1] dark:after:[border-image:linear-gradient(to_right,theme(colors.green.300/.16),transparent)1] after:shadow-sm after:shadow-white/20 dark:after:shadow-none">
          <div className="relative text-sm font-medium text-neutral-700 bg-white dark:bg-neutral-700 inline-flex rounded-lg whitespace-nowrap px-3 py-[3px] tracking-normal before:absolute before:inset-0 before:rounded-lg before:[background-image:linear-gradient(120deg,transparent_0%,theme(colors.green.400/.12)_33%,theme(colors.pink.400/.12)_66%,theme(colors.amber.200/.12)_100%)] dark:before:[background-image:linear-gradient(120deg,theme(colors.green.400/.16),theme(colors.green.600/.16)_50%,transparent_100%)] shadow">
            {/* Border with dots in corners */}
            <div
              className="absolute bg-green-500/15 dark:bg-neutral-800/65 rounded-sm -z-10 before:absolute before:inset-y-0 before:left-0 before:w-[7px] before:bg-[length:7px_7px] before:[background-position:top_center,bottom_center] before:bg-no-repeat before:[background-image:radial-gradient(circle_at_center,theme(colors.green.500/.56)_0.5px,transparent_0.5px),radial-gradient(circle_at_center,theme(colors.green.500/.56)_0.5px,transparent_0.5px)] dark:before:[background-image:radial-gradient(circle_at_center,theme(colors.neutral.600/.56)_0.5px,transparent_0.5px),radial-gradient(circle_at_center,theme(colors.neutral.600/.56)_0.5px,transparent_0.5px)] after:absolute after:inset-y-0 after:right-0 after:w-[7px] after:bg-[length:7px_7px] after:[background-position:top_center,bottom_center] after:bg-no-repeat after:[background-image:radial-gradient(circle_at_center,theme(colors.green.500/.56)_0.5px,transparent_0.5px),radial-gradient(circle_at_center,theme(colors.green.500/.56)_0.5px,transparent_0.5px)] dark:after:[background-image:radial-gradient(circle_at_center,theme(colors.neutral.600/.56)_0.5px,transparent_0.5px),radial-gradient(circle_at_center,theme(colors.neutral.600/.56)_0.5px,transparent_0.5px)]"
              aria-hidden="true"
            />
            <span className="relative text-neutral-800 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-b dark:from-green-500 dark:to-green-50">
              {children}${price}
              
            </span>
          </div>
        </div>
        <div>
          <h1 className="font-inter-tight text-5xl md:text-6xl font-bold text-neutral-800 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-b dark:from-green-200 dark:to-neutral-200 pb-4">
            {firstText}  
            <span 
    style={{
      background: 'linear-gradient(to right, #eb8690, #edb677, #dbdb5e, #88f29f, #8ecbfa)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    }}
    className="bg-clip-text dark:bg-clip-text dark:text-transparent"
  >
    {alph}
  </span>  {secondText}
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
