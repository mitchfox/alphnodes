'use client'

import { Fragment, useEffect, useState } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { HiOutlineMenuAlt4,  } from "react-icons/hi";
import { HiOutlineX } from "react-icons/hi";

import { useRouter } from "next/navigation";
import Link from "next/link";


import { HiOutlineChatAlt2 } from "react-icons/hi";
import { HiOutlineBell } from "react-icons/hi";
import ThemeToggle from '@/components/ui/theme-toggle'


// Mobile Navigation
// TODO: Add mobile navigation 

const navigation = [
    { name: 'Home', href: '/home', current: true },
    { name: 'Trials', href: '/trials', current: false },
    { name: 'Chats', href: '/chats', current: false },
    // { name: 'Upgrade', href: '/upgrade', current: false },
    // { name: 'Chats', href: '/chats', current: true },
    // { name: 'Explore', href: '/explore', current: false },

    // { name: 'Calendar', href: '#', current: false },
];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

export default function HeaderTest() {
    const router = useRouter();


    const [name, setName] = useState<string | null>(null);
    const [profileImage, setProfileImage] = useState<string | null>(null);
    const [playerEmail, setPlayerEmail] = useState<string | null>(null);
    const [playerId, setPlayerId] = useState<string | null>(null)
    const [playerIsPremium, setPlayerIsPremium] = useState<boolean>(false);
    const [playerProfileLink, setPlayerProfileLink] = useState<string | null>(null);





    return (

        <>
      
              
                    <div className="bg-opacity-70 backdrop-filter border-b border-slate-800 backdrop-blur-lg fixed top-0 left-0 right-0 z-50">
                        <Disclosure as="nav" className="bg-slate-950 bg-opacity-70">
                            {({ open }) => (
                                <>
                                    <div className="max-w-6xl mx-auto px-4 sm:px-6">
                                        <div className="relative flex h-16 items-center justify-between">
                                            <div className="flex flex-1 items-center justify-left sm:items-stretch sm:justify-start">
                                                <div className="flex flex-shrink-0 items-center">
                                                    {/* <HomeLogo userLoggedIn={true} /> */}
                                                </div>

                                                <div className="hidden sm:ml-6 sm:block">
                                                    <div className="flex space-x-4">
                                                        {navigation.map((item) => (
                                                            <a
                                                                key={item.name}
                                                                href={item.href}
                                                                className={classNames(
                                                                    item.current
                                                                        ? 'bg-slate-950 text-white'
                                                                        : 'text-slate-300 hover:bg-slate-700 hover:text-white',
                                                                    'rounded-md px-3 py-2 text-sm font-medium'
                                                                )}
                                                                aria-current={item.current ? 'page' : undefined}
                                                            >
                                                                {item.name}
                                                            </a>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="grow flex" >

                                                    {/*  Make small icon version for anything lower than 1280px */}


                                                </div>
                                            </div>

                                            <div className="absolute inset-y-0 left-10 flex items-center sm:hidden">
                                                {/* Mobile menu button */}
                                                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-slate-400 hover:bg-slate-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                                    <span className="absolute -inset-0.5" />
                                                    <span className="sr-only">Open main menu</span>
                                                    {open ? (
                                                        <HiOutlineX className="block h-6 w-6" aria-hidden="true" />
                                                    ) : (
                                                        <HiOutlineMenuAlt4 className="block h-6 w-6" aria-hidden="true" />
                                                    )}
                                                </Disclosure.Button>
                                            </div>

                                            <div className="absolute inset-y-0 right-0 flex items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                                                <div className="flex items-center m-auto">

                                                    {/* <ThemeToggle />
                                                    <SearchIcon />
                                                    <Notifications /> */}

                                                    

                                                </div>



                                                {/* {
                                                    !playerIsPremium &&
                                                    <ul className="flex grow justify-end flex-wrap items-center" style={{ cursor: 'pointer' }}>
                                                        <li className="ml-6" onClick={upgradeToPro}>
                                                            <div className="btn-sm text-slate-300 hover:text-white transition duration-150 ease-in-out w-full group [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-full before:pointer-events-none">
                                                                <span className="relative inline-flex items-center">
                                                                    Upgrade<span className="tracking-normal text-sky-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                                                                </span>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                } */}




                                                <Menu as="div" className="relative ml-2">

                                                    <Transition
                                                        as={Fragment}
                                                        enter="transition ease-out duration-100"
                                                        enterFrom="transform opacity-0 scale-95"
                                                        enterTo="transform opacity-100 scale-100"
                                                        leave="transition ease-in duration-75"
                                                        leaveFrom="transform opacity-100 scale-100"
                                                        leaveTo="transform opacity-0 scale-95"
                                                    >
                                                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                            <Menu.Item>
                                                                {({ active }) => (
                                                                    <a
                                                                        href={playerProfileLink ? '/player/' + playerProfileLink : ''}
                                                                        className={classNames(active ? 'bg-slate-100' : '', 'block px-4 py-2 text-sm text-slate-700')}
                                                                    >
                                                                        Your Profile
                                                                    </a>
                                                                )}
                                                            </Menu.Item>
                                                            <Menu.Item>
                                                                {({ active }) => (
                                                                    <a
                                                                        style={{ cursor: 'pointer' }}
                                                                        className={classNames(active ? 'bg-slate-100' : '', 'block px-4 py-2 text-sm text-slate-700')}
                                                                    >
                                                                        Settings
                                                                    </a>
                                                                )}
                                                            </Menu.Item>
                                                            <Menu.Item>
                                                                {({ active }) => (
                                                                    <a
                                                                        // href=""
                                                                        style={{ cursor: 'pointer' }}
                                                                
                                                                        className={classNames(active ? 'bg-slate-100' : '', 'block px-4 py-2 text-sm text-slate-700')}
                                                                    >
                                                                        Manage Subscription
                                                                    </a>
                                                                )}
                                                            </Menu.Item>
                                                            <Menu.Item>
                                                                {({ active }) => (
                                                                    <a
                                                                        style={{ cursor: 'pointer' }}
                                                              
                                                                        className={classNames(active ? 'bg-slate-100' : '', 'block px-4 py-2 text-sm text-slate-700')}
                                                                    >
                                                                        Sign out
                                                                    </a>
                                                                )}
                                                            </Menu.Item>
                                                        </Menu.Items>
                                                    </Transition>
                                                </Menu>

                                                {/* Profile dropdown */}
                                                <Menu as="div" className="relative ml-1">
                                                    <div>
                                                        <Menu.Button className="relative flex rounded-full bg-slate-800 text-sm focus:outline-none">
                                                            <span className="absolute -inset-1.5" />
                                                            <span className="sr-only">Open user menu</span>
                                                            <img
                                                                className="h-8 w-8 rounded-full"
                                                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                                alt=""
                                                            />
                                                        </Menu.Button>
                                                    </div>
                                                    <Transition
                                                        as={Fragment}
                                                        enter="transition ease-out duration-100"
                                                        enterFrom="transform opacity-0 scale-95"
                                                        enterTo="transform opacity-100 scale-100"
                                                        leave="transition ease-in duration-75"
                                                        leaveFrom="transform opacity-100 scale-100"
                                                        leaveTo="transform opacity-0 scale-95"
                                                    >
                                                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                            <Menu.Item>
                                                                {({ active }) => {
                                                                    return (
                                                                        <a
                                                                            href={playerProfileLink ? '/player/' + playerProfileLink : ''}
                                                                            className={classNames(active ? 'bg-slate-100' : '', 'block px-4 py-2 text-sm text-slate-700')}
                                                                        >
                                                                            Your Profile
                                                                        </a>
                                                                    );
                                                                }}
                                                            </Menu.Item>
                                                            <Menu.Item>
                                                                {({ active }) => (
                                                                    <a
                                                                        style={{ cursor: 'pointer' }}
                                                                        className={classNames(active ? 'bg-slate-100' : '', 'block px-4 py-2 text-sm text-slate-700')}
                                                                    >
                                                                        Settings
                                                                    </a>
                                                                )}
                                                            </Menu.Item>
                                                            <Menu.Item>
                                                                {({ active }) => (
                                                                    <a
                                                                        // href=""
                                                                        style={{ cursor: 'pointer' }}
                                                           
                                                                        className={classNames(active ? 'bg-slate-100' : '', 'block px-4 py-2 text-sm text-slate-700')}
                                                                    >
                                                                        Manage Subscription
                                                                    </a>
                                                                )}
                                                            </Menu.Item>
                                                            <Menu.Item>
                                                                {({ active }) => (
                                                                    <a
                                                                        style={{ cursor: 'pointer' }}
                                                             
                                                                        className={classNames(active ? 'bg-slate-100' : '', 'block px-4 py-2 text-sm text-slate-700')}
                                                                    >
                                                                        Sign out
                                                                    </a>
                                                                )}
                                                            </Menu.Item>
                                                        </Menu.Items>
                                                    </Transition>
                                                </Menu>
                                            </div>
                                        </div>
                                    </div>

                                    <Disclosure.Panel className="sm:hidden">
                                        <div className="space-y-1 px-2 pb-3 pt-2">
                                            {navigation.map((item) => (
                                                <Disclosure.Button
                                                    key={item.name}
                                                    as="a"
                                                    href={item.href}
                                                    className={classNames(
                                                        item.current ? 'bg-slate-900 text-white' : 'text-slate-300 hover:bg-slate-700 hover:text-white',
                                                        'block rounded-md px-3 py-2 text-base font-medium'
                                                    )}
                                                    aria-current={item.current ? 'page' : undefined}
                                                >
                                                    {item.name}
                                                </Disclosure.Button>
                                            ))}
                                        </div>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                    </div>
               
        </>


    );
}
