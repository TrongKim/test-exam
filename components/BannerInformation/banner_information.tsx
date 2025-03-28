'use client';
import React, { useEffect, useState } from 'react';
import { NavigateUrl } from '../NavigateUrl/navigate_url';
import { INavigate } from '@/models/navigate';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export const BannerInformation = () => {
    const pathName = usePathname();
    const [pathSplit, setPathSplit] = useState<string[]>([]);
    const [cacheNavigates, setCacheNavigates] = useState<INavigate[]>([]);

    useEffect(() => {
        const cachedNavigates = localStorage.getItem("navigates");

        if (cachedNavigates) {
            setCacheNavigates(JSON.parse(cachedNavigates));
        }
    }, []);

    useEffect(() => {
        if (pathName) {
            const path = pathName.split('/');
            setPathSplit(path);
        }
    }, []);

    return (
        <div className="flex items-center">
            <div className="w-[320px]">
                <Image src="/bag-left.jpg" alt="bag" width={282} height={268} />
            </div>
            <div className="container">
                <div className="mt-12">
                    <NavigateUrl navigates={cacheNavigates} navigate_urls={pathSplit} />
                </div>
                <div className="mt-18">
                    <p className="text-6xl text-center leading-[100px]">Blog <span className="bg-gradient-to-r from-[#328c6c] to-[#82d0a4] leading-[100px] bg-clip-text text-transparent font-bold text-6xl">FOSO</span> –</p>
                    <p className="text-6xl text-center leading-[100px]">Cập Nhật Tin Tức <span className="text-6xl font-bold relative inline-block leading-[100px]">Mới Nhất<span className="absolute w-full h-7 bg-[#A3EED6] rounded-full [bottom:calc(0%+30px)] translate-y-1/2 inline-block left-0 -z-1"></span></span></p>
                </div>
                <p className="font-medium text-[18px] text-center mt-[8px]">Cùng FOSO khám phá kiến thức, xu hướng công nghệ và sản xuất ngay!</p>
            </div>
            <div className="w-[320px]">
                <Image src="/hand-right.jpg" alt="bag" width={320} height={251} />
            </div>
        </div>
    )
}
