'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Post } from './Post/post';
import { IReviewPost } from '@/models/post';
import { PRSide } from '../PRSide/pr_side';
import { Paginate } from '../Paginate/paginate';
import { getPosts } from '@/app/api/post';
interface Props {
    posts: IReviewPost[];
    page: number;
}
export const PostsDisplay = ({ posts, page }: Props) => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [postList, setPostList] = useState<IReviewPost[]>([]);

    useEffect(() => {
        setPostList(posts);
    }, []);

    useEffect(() => {
        const fetchPosts = async () => {
            const { data }: { data: IReviewPost[] } = await getPosts(currentPage, 6);
            setPostList(data);
        };

        fetchPosts();
    }, [currentPage]);

    const onPageChange = (page: { selected: number}): void => {
        console.log(page);
        setCurrentPage(page.selected + 1);
    }

    return (
        <>
            <div className="container mx-auto gap-8 flex items-start ">
                <div>
                    <h4 className="capitalize font-extrabold text-[36px] leading-[200%] mb-6">Tất Cả Bài Viết</h4>
                    <div className="w-full h-[318] rounded-[40px] overflow-hidden relative h-[318px]">
                        <Image src="/pr-banner.jpg" alt="pr banner" fill />
                        <div className="absolute w-fit top-[50%] -translate-y-1/2 left-[59px]">
                            <p className="w-[376px] mb-8 font-bold text-white text-[36px]">Gia nhập cộng đồng FMRP – Kết nối, chia sẻ, cùng phát triển!</p>
                            <button className="h-[50px] rounded-full border-2 border-white flex items-center justify-between px-[24px] py-[14.5px] text-white text-[14px] gap-8 cursor-pointer pointer-events-auto">Tham Gia Ngay <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.344 12.5001V19.8126C22.344 20.0364 22.2551 20.251 22.0968 20.4092C21.9386 20.5675 21.724 20.6564 21.5002 20.6564C21.2764 20.6564 21.0618 20.5675 20.9036 20.4092C20.7454 20.251 20.6565 20.0364 20.6565 19.8126V14.5392L13.0972 22.0971C12.9387 22.2556 12.7237 22.3446 12.4995 22.3446C12.2753 22.3446 12.0604 22.2556 11.9019 22.0971C11.7433 21.9386 11.6543 21.7236 11.6543 21.4994C11.6543 21.2753 11.7433 21.0603 11.9019 20.9018L19.4612 13.3439H14.1877C13.9639 13.3439 13.7493 13.255 13.5911 13.0967C13.4329 12.9385 13.344 12.7239 13.344 12.5001C13.344 12.2763 13.4329 12.0617 13.5911 11.9035C13.7493 11.7453 13.9639 11.6564 14.1877 11.6564H21.5002C21.724 11.6564 21.9386 11.7453 22.0968 11.9035C22.2551 12.0617 22.344 12.2763 22.344 12.5001Z" fill="white" />
                            </svg>
                            </button>
                        </div>
                    </div>
                    <div className="gap-x-8 gap-y-12 mt-12 grid xl:grid-cols-2">
                        {
                            postList.map((post, index) => {
                                return (
                                    <div key={index + post.id}>
                                        <Post post={post} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div>
                    <h4 className="capitalize font-extrabold text-[24px] leading-[200%] mb-6 text-[#050505]">Tìm Kiếm</h4>
                    <div className="shadow-[0px_12px_24px_-4px_rgba(145,154,171,0.16)] bg-white rounded-[12px] flex items-center gap-[10px] p-3">
                        <input className="flex-1 outline-0 bg-transparent text-[16px] font-medium text-[#050505] placeholder-[#ACB3C7]" type="text" name="search" placeholder="Tìm kiếm bài viết" />
                        <button className="bg-[#15AA7A] rounded-[12px] p-3 cursor-pointer pointer-events-auto"><svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.5308 20.8794L16.8368 16.1863C18.1973 14.5529 18.8757 12.4578 18.7309 10.3369C18.5861 8.21608 17.6293 6.23268 16.0593 4.79935C14.4894 3.36602 12.4274 2.59312 10.3021 2.64142C8.17687 2.68972 6.15205 3.5555 4.64888 5.05867C3.14571 6.56184 2.27993 8.58666 2.23163 10.7119C2.18333 12.8372 2.95623 14.8992 4.38956 16.4691C5.82289 18.039 7.80629 18.9959 9.92715 19.1407C12.048 19.2855 14.1431 18.6071 15.7765 17.2466L20.4696 21.9406C20.5393 22.0103 20.622 22.0656 20.713 22.1033C20.8041 22.141 20.9017 22.1604 21.0002 22.1604C21.0988 22.1604 21.1963 22.141 21.2874 22.1033C21.3784 22.0656 21.4612 22.0103 21.5308 21.9406C21.6005 21.8709 21.6558 21.7882 21.6935 21.6972C21.7312 21.6061 21.7506 21.5085 21.7506 21.41C21.7506 21.3115 21.7312 21.2139 21.6935 21.1228C21.6558 21.0318 21.6005 20.9491 21.5308 20.8794ZM3.75021 10.91C3.75021 9.57498 4.14609 8.26994 4.88779 7.1599C5.62949 6.04987 6.6837 5.18471 7.9171 4.67382C9.1505 4.16293 10.5077 4.02925 11.8171 4.2897C13.1264 4.55015 14.3292 5.19303 15.2732 6.13703C16.2172 7.08104 16.8601 8.28377 17.1205 9.59314C17.381 10.9025 17.2473 12.2597 16.7364 13.4931C16.2255 14.7265 15.3603 15.7807 14.2503 16.5224C13.1403 17.2641 11.8352 17.66 10.5002 17.66C8.71061 17.658 6.99488 16.9462 5.72944 15.6808C4.46399 14.4153 3.7522 12.6996 3.75021 10.91Z" fill="white" />
                        </svg>
                        </button>
                    </div>
                    <h4 className="capitalize font-extrabold text-[24px] leading-[200%] mt-8 mb-6 text-[#050505]">Danh Mục</h4>
                    <div className="gap-4 flex flex-col mb-8">
                        <button className="cursor-pointer pointer-events-auto flex items-center border-b border-[#F1F5F7] pb-2 justify-between w-full font-medium leading-[150%] text-[18px] text-[#33404A]">
                            Tất cả
                            <p className="text-[#667F93] font-medium leading-[150%] text-[18px]">108</p>
                        </button>
                        <button className="cursor-pointer pointer-events-auto flex items-center border-b border-[#F1F5F7] pb-2 justify-between w-full font-medium leading-[150%] text-[18px] text-[#33404A]">
                            Thiết kế Website
                            <p className="text-[#667F93] font-medium leading-[150%] text-[18px]">36</p>
                        </button>
                        <button className="cursor-pointer pointer-events-auto flex items-center border-b border-[#F1F5F7] pb-2 justify-between w-full font-medium leading-[150%] text-[18px] text-[#33404A]">
                            Thiết kế App Mobile
                            <p className="text-[#667F93] font-medium leading-[150%] text-[18px]">13</p>
                        </button>
                        <button className="cursor-pointer pointer-events-auto flex items-center border-b border-[#F1F5F7] pb-2 justify-between w-full font-medium leading-[150%] text-[18px] text-[#33404A]">
                            Quản lý sản xuất
                            <p className="text-[#667F93] font-medium leading-[150%] text-[18px]">25</p>
                        </button>
                        <button className="cursor-pointer pointer-events-auto flex items-center border-b border-[#F1F5F7] pb-2 justify-between w-full font-medium leading-[150%] text-[18px] text-[#33404A]">
                            Quản lý bán hàng
                            <p>22</p>
                        </button>
                        <button className="cursor-pointer pointer-events-auto flex items-center border-b border-[#F1F5F7] pb-2 justify-between w-full font-medium leading-[150%] text-[18px] text-[#33404A]">
                            Báo Chí Nói Về FOSO
                            <p className="text-[#667F93] font-medium leading-[150%] text-[18px]">7</p>
                        </button>
                        <button className="cursor-pointer pointer-events-auto flex items-center border-b border-[#F1F5F7] pb-2 justify-between w-full font-medium leading-[150%] text-[18px] text-[#33404A]">
                            Tin Tức FOSO
                            <p className="text-[#667F93] font-medium leading-[150%] text-[18px]">5</p>
                        </button>
                    </div>
                    <div>
                        <PRSide />
                    </div>
                </div>

            </div>
            <div className="flex items-center justify-between w-full container mx-auto mt-[100.5px]">
                <Paginate pageCount={page} onPageChange={onPageChange} />
            </div>
        </>
    )
}
