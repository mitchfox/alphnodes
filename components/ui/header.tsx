'use client';

import React, { useEffect, useState } from "react";
import Link from "next/link";
import ThemeToggle from "./theme-toggle";
import { HiOutlineMenu } from "react-icons/hi";
import { useTheme } from "next-themes";
import Image from 'next/image'
import Logo from '../../public/logo.png';
import LogoDark from '../../public/logo-dark.png';

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [windowWidth, setWindowWidth] = useState<number | undefined>(undefined);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

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

  return (
    <>
      {windowWidth ? (
        <header className="sticky top-4 md:top-6 w-full z-30 pb-4 md:pb-6 [border-image:linear-gradient(to_right,transparent,theme(colors.green.300/.4),transparent)1] dark:[border-image:linear-gradient(to_right,transparent,theme(colors.green.300/.16),transparent)1] dark:shadow-none">
          <div className="px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <div
                className="relative flex items-center justify-between gap-x-2 h-12 rounded-lg px-3
               shadow bg-neutral-50/50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800"
                style={{ backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' }}
              >
                {/* Border with dots in corners */}
                <div
                  className="absolute bg-green-500/15 dark:bg-neutral-800/50 rounded-sm -z-10 before:absolute before:inset-y-0 before:left-0 before:w-[10px] 
                  before:bg-[length:10px_10px] before:[background-position:top_center,bottom_center] before:bg-no-repeat 
                  before:[background-image:radial-gradient(circle_at_center,theme(colors.green.500/.56)_1px,transparent_1px),radial-gradient(circle_at_center,theme(colors.green.500/.56)_1px,transparent_1px)] 
                  dark:before:[background-image:radial-gradient(circle_at_center,theme(colors.neutral.600/.56)_1px,transparent_1px),radial-gradient(circle_at_center,theme(colors.neutral.600/.56)_1px,transparent_1px)] 
                  after:absolute after:inset-y-0 after:right-0 after:w-[10px] after:bg-[length:10px_10px] after:[background-position:top_center,bottom_center] after:bg-no-repeat 
                  after:[background-image:radial-gradient(circle_at_center,theme(colors.green.500/.56)_1px,transparent_1px),radial-gradient(circle_at_center,theme(colors.green.500/.56)_1px,transparent_1px)] 
                  dark:after:[background-image:radial-gradient(circle_at_center,theme(colors.neutral.600/.56)_1px,transparent_1px),radial-gradient(circle_at_center,theme(colors.neutral.600/.56)_1px,transparent_1px)]"
                  aria-hidden="true"
                />
                {/* Site branding */}
                <div className="flex-1">
                  {/* Logo */}
                  <Link
                    href="/"
                    style={{
                      fontWeight: '700',
                      fontSize: '15px',
                    }}
                    className="text-neutral-800 dark:text-neutral-200 rounded-lg py-1.5 px-3"
                    onClick={handleLinkClick}
                  >
                    <Image 
                    src={theme === 'dark' ? Logo : LogoDark} alt="Alephium World"
                    // src={theme === 'dark' ? "https://raw.githubusercontent.com/alephium/alephium-brand-guide/master/logos/light/Logo-Icon.png" : "https://raw.githubusercontent.com/alephium/alephium-brand-guide/master/logos/dark/Logo-Icon.png"}  
                    style={{ height: '28px', width: '28px' }} />
                    {/* <span style={{ fontSize: '18px' }}></span>ALPH<span className="text-green-400 italic">NODES</span> */}
                  </Link>
                </div>
                {/* Navigation links */}
                {windowWidth && windowWidth < 800 ? (
                  <>
                    {isMenuOpen ? (
                      <nav
                        className="flex justify-center absolute top-16 right-0"
                        style={{
                          backdropFilter: 'blur(8px)',
                          WebkitBackdropFilter: 'blur(8px)',
                          zIndex: '9999',
                        }}
                      >
                        <div
                          style={{
                            backdropFilter: 'blur(8px)',
                            filter: 'blue(8px)',
                            WebkitBackdropFilter: 'blur(8px)',
                            zIndex: '9999',
                            height: 'auto',
                          }}
                          className="block items-center sm:gap-x-3 text-sm font-medium relative items-center justify-between gap-x-2 h-12 rounded-lg px-3
                            shadow bg-neutral-100/90 backdrop-blur dark:bg-neutral-900/90 border border-neutral-200 dark:border-neutral-800"
                        >
                          <ul>
                            <li className="items-center py-4">
                              <Link
                                style={{
                                  width: '100%',
                                  backdropFilter: 'blur(8px)',
                                  WebkitBackdropFilter: 'blur(8px)',
                                  zIndex: '9999',
                                }}
                                className="text-neutral-800 dark:text-neutral-200 rounded-lg hover:bg-green-100 dark:hover:bg-neutral-800/30 py-1.5 px-3"
                                href="/"
                                onClick={handleLinkClick}
                              >
                                Map
                              </Link>
                            </li>
                            <li className="items-center py-4">
                              <Link
                                style={{
                                  width: '100%',
                                  backdropFilter: 'blur(8px)',
                                  WebkitBackdropFilter: 'blur(8px)',
                                  zIndex: '9999',
                                }}
                                className="text-neutral-800 dark:text-neutral-200 rounded-lg hover:bg-green-100 dark:hover:bg-neutral-800/30 py-1.5 px-3"
                                href="/nodes"
                                onClick={handleLinkClick}
                              >
                                Nodes
                              </Link>
                            </li>
                            <li className="items-center py-4">
                              <Link
                                className="text-neutral-800 dark:text-neutral-200 rounded-lg hover:bg-green-100 dark:hover:bg-neutral-800/30 py-1.5 px-3"
                                href="/stats"
                                onClick={handleLinkClick}
                              >
                                Stats
                              </Link>
                            </li>
                            <li className="items-center py-4">
                              <Link
                                href="https://docs.alephium.org/full-node/getting-started/"
                                rel="noopener noreferrer"
                                target="_blank"
                                className="text-neutral-800 dark:text-neutral-200 rounded-lg hover:bg-green-100 dark:hover:bg-neutral-800/30 py-1.5 px-3"
                                onClick={handleLinkClick}
                              >
                                Launch a Node
                              </Link>
                            </li>
                            <li className="items-center py-4">
                              <div
                                onClick={toggleMenu}
                                className="text-neutral-800 dark:text-neutral-200 rounded-lg hover:bg-green-100 dark:hover:bg-neutral-800/30 transition-colors py-1.5 px-3"
                              >
                                Close
                              </div>
                            </li>
                          </ul>
                        </div>
                      </nav>
                    ) : null}
                  </>
                ) : (
                  <nav className="flex justify-center">
                    <ul className="flex items-center sm:gap-x-3 text-sm font-medium">
                    <li>
                        <Link
                          className="text-neutral-800 dark:text-neutral-200 rounded-lg hover:bg-green-100 dark:hover:bg-neutral-800/30 py-1.5 px-3"
                          href="/"
                          onClick={handleLinkClick}
                        >
                          Map
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="text-neutral-800 dark:text-neutral-200 rounded-lg hover:bg-green-100 dark:hover:bg-neutral-800/30 py-1.5 px-3"
                          href="/nodes"
                          onClick={handleLinkClick}
                        >
                          Nodes
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="text-neutral-800 dark:text-neutral-200 rounded-lg hover:bg-green-100 dark:hover:bg-neutral-800/30 py-1.5 px-3"
                          href="/stats"
                          onClick={handleLinkClick}
                        >
                          Stats
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="text-neutral-800 dark:text-neutral-200 rounded-lg hover:bg-green-100 dark:hover:bg-neutral-800/30 py-1.5 px-3"
                          href="https://docs.alephium.org/full-node/getting-started/"
                          rel="noopener noreferrer"
                          target="_blank"
                          onClick={handleLinkClick}
                        >
                          Launch a Node
                        </Link>
                      </li>
                    </ul>
                  </nav>
                )}

                {/* Light switch */}
                <ThemeToggle />

                {windowWidth && windowWidth < 800 ? (
                  <HiOutlineMenu
                    onClick={toggleMenu}
                    style={{ fontSize: '20px', cursor: 'pointer' }}
                  />
                ) : null}
              </div>
            </div>
          </div>
        </header>
      ) : null}
    </>
  );
}
