import React from 'react';
import Image from 'next/image';
import { Post } from './Post/post';

export const PostsDisplay = () => {
    return (
        <div className="container mx-auto">
            <h4 className="capitalize font-extrabold text-[36px] leading-[200%] mb-6">Tất Cả Bài Viết</h4>
            <div className="w-[1042px] h-[318] rounded-[40px] overflow-hidden relative">
                <Image src="/pr-banner.jpg" alt="pr banner" width={1042} height={318} />
                <div className="absolute w-fit top-[50%] -translate-y-1/2 left-[59px]">
                    <p className="w-[376px] mb-8 font-bold text-white text-[36px]">Gia nhập cộng đồng FMRP – Kết nối, chia sẻ, cùng phát triển!</p>
                    <button className="h-[50px] rounded-full border-2 border-white flex items-center justify-between px-[24px] py-[14.5px] text-white text-[14px] gap-8 cursor-pointer pointer-events-auto">Tham Gia Ngay <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.344 12.5001V19.8126C22.344 20.0364 22.2551 20.251 22.0968 20.4092C21.9386 20.5675 21.724 20.6564 21.5002 20.6564C21.2764 20.6564 21.0618 20.5675 20.9036 20.4092C20.7454 20.251 20.6565 20.0364 20.6565 19.8126V14.5392L13.0972 22.0971C12.9387 22.2556 12.7237 22.3446 12.4995 22.3446C12.2753 22.3446 12.0604 22.2556 11.9019 22.0971C11.7433 21.9386 11.6543 21.7236 11.6543 21.4994C11.6543 21.2753 11.7433 21.0603 11.9019 20.9018L19.4612 13.3439H14.1877C13.9639 13.3439 13.7493 13.255 13.5911 13.0967C13.4329 12.9385 13.344 12.7239 13.344 12.5001C13.344 12.2763 13.4329 12.0617 13.5911 11.9035C13.7493 11.7453 13.9639 11.6564 14.1877 11.6564H21.5002C21.724 11.6564 21.9386 11.7453 22.0968 11.9035C22.2551 12.0617 22.344 12.2763 22.344 12.5001Z" fill="white" />
                    </svg>
                    </button>
                </div>
            </div>
            <div className="flex flex-wrap columns-2 gap-x-8 gap-y-12 mt-12">
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    )
}
