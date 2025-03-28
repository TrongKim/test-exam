'use client';
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { NavigateUrl } from '../NavigateUrl/navigate_url';
import { INavigate } from '@/models/navigate';

export const Nav = () => {
    const pathName = usePathname();
    const [pathSplit, setPathSplit] = useState<string[]>([]);

    const [navigates, setNavigates] = useState<INavigate[]>([]);

    useEffect(() => {
        const cachedData = localStorage.getItem("navigates");

        if (cachedData) {
            setNavigates(JSON.parse(cachedData));
        } else {
            const initialData: INavigate[] = [
                { url: "about-us", name: "Về chúng tôi", child: [] },
                { url: "solution", name: "Giải pháp", child: [{ url: "blog", name: "Blog" }] },
                { url: "resource", name: "Tài nguyên", child: [{ url: "blog", name: "Blog" }] },
                { url: "contact", name: "Liên hệ", child: [] },
            ];

            setNavigates(initialData);
            localStorage.setItem("navigates", JSON.stringify(initialData));
        }
    }, []);

    useEffect(() => {
        if (pathName) {
            const path = pathName.split('/');
            setPathSplit(path);
        }
    }, []);

    const colorSelectedRouteHandler = (url: string): string => {
        if (pathSplit[0] && pathSplit[0] === url) return 'text-[#1AD598]';
        return '';
    }

    return (
        <header className="bg-white mt-6 mb-6">
            <div className="container flex mx-auto py-3 justify-center items-center rounded-full shadow-md gap-16">
                <div className="flex items-center space-x-2">
                    <Image src="/logo.png" alt="logo" width={134} height={55} />
                </div>
                <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
                    {
                        navigates.map((navigate, index) => {
                            return (
                                <Link key={navigate.url + index} className={"text-gray-800 hover:text-[#1AD598] text-sm flex items-center justify-between gap-2 " + colorSelectedRouteHandler(navigate.url)} href={"/" + navigate.url}>
                                    {navigate.name}
                                    {
                                        navigate.child.length > 0 ? (
                                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13.854 7.05876L8.85403 12.0588C8.80759 12.1052 8.75245 12.1421 8.69175 12.1673C8.63105 12.1924 8.56599 12.2054 8.50028 12.2054C8.43457 12.2054 8.36951 12.1924 8.30881 12.1673C8.24811 12.1421 8.19296 12.1052 8.14653 12.0588L3.14653 7.05876C3.05271 6.96494 3 6.83769 3 6.70501C3 6.57232 3.05271 6.44508 3.14653 6.35125C3.24035 6.25743 3.3676 6.20473 3.50028 6.20473C3.63296 6.20473 3.76021 6.25743 3.85403 6.35125L8.50028 10.9981L13.1465 6.35125C13.193 6.3048 13.2481 6.26795 13.3088 6.24281C13.3695 6.21767 13.4346 6.20473 13.5003 6.20473C13.566 6.20473 13.631 6.21767 13.6917 6.24281C13.7524 6.26795 13.8076 6.3048 13.854 6.35125C13.9005 6.39771 13.9373 6.45286 13.9625 6.51356C13.9876 6.57425 14.0006 6.63931 14.0006 6.70501C14.0006 6.7707 13.9876 6.83576 13.9625 6.89645C13.9373 6.95715 13.9005 7.0123 13.854 7.05876Z" fill="#25272A" />
                                            </svg>
                                        ) : ''
                                    }
                                </Link>
                            )
                        })
                    }
                </nav>
                <div className="flex gap-2 items-center">
                    <button className="gap-3 flex items-center px-3 py-2 bg-gray-100 rounded-full cursor-pointer pointer-events-auto">
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_37_353)">
                                <path d="M12.5 24.705C19.1274 24.705 24.5 19.3324 24.5 12.705C24.5 6.07758 19.1274 0.705002 12.5 0.705002C5.87258 0.705002 0.5 6.07758 0.5 12.705C0.5 19.3324 5.87258 24.705 12.5 24.705Z" fill="#D80027" />
                                <path d="M12.4995 6.96587L13.7946 10.9516H17.9855L14.595 13.4149L15.89 17.4007L12.4995 14.9373L9.10908 17.4007L10.4041 13.4149L7.01367 10.9516H11.2045L12.4995 6.96587Z" fill="#FFDA44" />
                            </g>
                            <defs>
                                <clipPath id="clip0_37_353">
                                    <rect width="24" height="24" fill="white" transform="translate(0.5 0.705002)" />
                                </clipPath>
                            </defs>
                        </svg>
                        <div className="gap-1 flex items-center text-sm font-medium">
                            VI
                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.854 7.05876L8.85403 12.0588C8.80759 12.1052 8.75245 12.1421 8.69175 12.1673C8.63105 12.1924 8.56599 12.2054 8.50028 12.2054C8.43457 12.2054 8.36951 12.1924 8.30881 12.1673C8.24811 12.1421 8.19296 12.1052 8.14653 12.0588L3.14653 7.05876C3.05271 6.96494 3 6.83769 3 6.70501C3 6.57232 3.05271 6.44508 3.14653 6.35125C3.24035 6.25743 3.3676 6.20473 3.50028 6.20473C3.63296 6.20473 3.76021 6.25743 3.85403 6.35125L8.50028 10.9981L13.1465 6.35125C13.193 6.3048 13.2481 6.26795 13.3088 6.24281C13.3695 6.21767 13.4346 6.20473 13.5003 6.20473C13.566 6.20473 13.631 6.21767 13.6917 6.24281C13.7524 6.26795 13.8076 6.3048 13.854 6.35125C13.9005 6.39771 13.9373 6.45286 13.9625 6.51356C13.9876 6.57425 14.0006 6.63931 14.0006 6.70501C14.0006 6.7707 13.9876 6.83576 13.9625 6.89645C13.9373 6.95715 13.9005 7.0123 13.854 7.05876Z" fill="#25272A" />
                            </svg>
                        </div>
                    </button>
                    <button className="bg-[#1AD598] font-bold text-sm px-3 py-[8.5px] rounded-full flex items-center gap-3 text-[#052B1E] cursor-pointer pointer-events-auto">
                        Trở Thành Khách Hàng
                        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.705002" width="22" height="22" rx="11" fill="black" />
                            <path d="M15.4377 8.205V13.8925C15.4377 14.0085 15.3916 14.1198 15.3096 14.2019C15.2276 14.2839 15.1163 14.33 15.0002 14.33C14.8842 14.33 14.7729 14.2839 14.6909 14.2019C14.6088 14.1198 14.5627 14.0085 14.5627 13.8925V9.26102L8.30977 15.5145C8.22768 15.5966 8.11634 15.6427 8.00024 15.6427C7.88415 15.6427 7.7728 15.5966 7.69071 15.5145C7.60862 15.4324 7.5625 15.3211 7.5625 15.205C7.5625 15.0889 7.60862 14.9776 7.69071 14.8955L13.9442 8.6425H9.31274C9.19671 8.6425 9.08543 8.59641 9.00338 8.51436C8.92134 8.43231 8.87524 8.32103 8.87524 8.205C8.87524 8.08897 8.92134 7.97769 9.00338 7.89564C9.08543 7.8136 9.19671 7.7675 9.31274 7.7675H15.0002C15.1163 7.7675 15.2276 7.8136 15.3096 7.89564C15.3916 7.97769 15.4377 8.08897 15.4377 8.205Z" fill="white" />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    )
}
