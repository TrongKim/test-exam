'use client';
import { INavigate } from '@/models/navigate';
import { usePathname } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';
import { NavigateUrl } from '../NavigateUrl/navigate_url';
import { EPostContentType, IPost } from '@/models/post';
import Image from 'next/image';
import { PRSide } from '../PRSide/pr_side';

interface Props {
    post_detail: IPost;
}
export const PostDetail = ({ post_detail }: Props) => {
    const pathName = usePathname();
    const [pathSplit, setPathSplit] = useState<string[]>([]);
    const [cacheNavigates, setCacheNavigates] = useState<INavigate[]>([]);
    const postContentRef = useRef<HTMLDivElement | null>(null);
    const [isShowMenu, setIsShowMenu] = useState<boolean>(true);
    const [selectedMenu, setSelectedMenu] = useState<number>(0);

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

    const clickScrollTo = (index: number): void => {
        if (!postContentRef) return;
        const div_element = postContentRef.current as HTMLDivElement;
        const child = div_element.children[index] as HTMLButtonElement;
        child.scrollIntoView({ behavior: "smooth", block: "start" });
        setSelectedMenu(index);
    }

    const highlightWords = (text: string) => {
        return text.split(/\/(.*?)\//).map((part, index) =>
            index % 2 === 1 ? <span className="text-[#15AA7A] text-[16px] font-bold" key={index + part}>{part}</span> : part
        );
    };

    const onClickShowMenu = (): void => {
        setIsShowMenu(!isShowMenu);
    };

    const handleShowContent = (content: string | string[], contentType: EPostContentType) => {
        switch (contentType) {
            case EPostContentType.NORMAL:
                return (
                    <p className="text-[16px] text-[#33404A] font-medium">{content}</p>
                );
            case EPostContentType.LIST:
                if (Array.isArray(content)) {
                    return (
                        <ul className="list-disc pl-5 marker:text-[#15AA7A]">
                            {
                                content.map((item, index) => {
                                    return (
                                        <li key={item + index} className="text-[16px] text-[#33404A] font-medium">
                                            {highlightWords(item)}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    )
                }
                return (
                    <p className="text-[16px] text-[#33404A] font-medium">{content}</p>
                );
            case EPostContentType.SPECIAL:
                return (
                    <div className="pl-[36px] pr-[36px] pt-[12px] pb-[8px] border-l-4 border-[#15AA7A]">
                        <p className="text-[20px] text-[#33404A] font-medium italic">{content}</p>
                    </div>
                )
            case EPostContentType.NORMAL_LIST:
                if (Array.isArray(content)) {
                    return (
                        <ul className="list-disc pl-5">
                            {
                                content.map((item, index) => {
                                    return (
                                        <li key={item + index} className="text-[16px] text-[#33404A] font-medium">
                                            {highlightWords(item)}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    )
                }
                return (
                    <p className="text-[16px] text-[#33404A] font-medium">{content}</p>
                );
        }
        return <p className="text-[16px] text-[#33404A] font-medium">{content}</p>;
    }

    return (
        <div>
            <div className="container mx-auto">
                <div className="w-fit mt-2">
                    <NavigateUrl detail={post_detail.tags[0]} navigates={cacheNavigates} navigate_urls={pathSplit} />
                </div>
                <div className="mt-[48px] flex items-center gap-[10px] mb-[16px]">
                    {
                        post_detail.tags.map((tag, index) => {
                            return (
                                <button key={tag + index} className="cursor-pointer pointer-events-auto rounded-[8px] text-[#0F4F9E] font-medium text-[12px] bg-[#E2F0FE] capitalize py-1 px-2">{tag}</button>
                            )
                        })
                    }
                </div>
                <div className="flex items-start justify-between gap-[48px]">
                    <div className="flex-1">
                        <h2 className="text-[36px] text-[#050505] font-extrabold mt-4 mb-4">{post_detail.title}</h2>
                        <div className="flex items-center justify-between pt-2 mb-[24px]">
                            <div className="flex items-center gap-[9.5px]">
                                <div className="w-[64px] h-[64px] rounded-full border border-[#F1F5F7] overflow-hidden">
                                    <Image src={post_detail.author.image} alt="author" width={64} height={64} />
                                </div>
                                <div>
                                    <p className="text-[#667F93] text-[14px] font-medium leading-[150%]">Tác giả</p>
                                    <p className="text-[#33404A] text-[16px] font-bold leading-[150%] capitalize">{post_detail.author.name}</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-[24px]'>
                                <div className="flex items-center gap-2">
                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.5 3.41H17.25V2.66C17.25 2.46109 17.171 2.27033 17.0303 2.12967C16.8897 1.98902 16.6989 1.91 16.5 1.91C16.3011 1.91 16.1103 1.98902 15.9697 2.12967C15.829 2.27033 15.75 2.46109 15.75 2.66V3.41H8.25V2.66C8.25 2.46109 8.17098 2.27033 8.03033 2.12967C7.88968 1.98902 7.69891 1.91 7.5 1.91C7.30109 1.91 7.11032 1.98902 6.96967 2.12967C6.82902 2.27033 6.75 2.46109 6.75 2.66V3.41H4.5C4.10218 3.41 3.72064 3.56804 3.43934 3.84934C3.15804 4.13065 3 4.51218 3 4.91V19.91C3 20.3078 3.15804 20.6894 3.43934 20.9707C3.72064 21.252 4.10218 21.41 4.5 21.41H19.5C19.8978 21.41 20.2794 21.252 20.5607 20.9707C20.842 20.6894 21 20.3078 21 19.91V4.91C21 4.51218 20.842 4.13065 20.5607 3.84934C20.2794 3.56804 19.8978 3.41 19.5 3.41ZM6.75 4.91V5.66C6.75 5.85892 6.82902 6.04968 6.96967 6.19033C7.11032 6.33099 7.30109 6.41 7.5 6.41C7.69891 6.41 7.88968 6.33099 8.03033 6.19033C8.17098 6.04968 8.25 5.85892 8.25 5.66V4.91H15.75V5.66C15.75 5.85892 15.829 6.04968 15.9697 6.19033C16.1103 6.33099 16.3011 6.41 16.5 6.41C16.6989 6.41 16.8897 6.33099 17.0303 6.19033C17.171 6.04968 17.25 5.85892 17.25 5.66V4.91H19.5V7.91H4.5V4.91H6.75ZM19.5 19.91H4.5V9.41H19.5V19.91Z" fill="#667F93" />
                                    </svg>
                                    <p>Cập nhật vào: {post_detail.updateAt}</p>
                                </div>
                                <div className="h-full w-[1px] bg-[#D9E1E7] text-[#D9E1E7]"><p className="opacity-0">|</p></div>
                                <div className="flex items-center gap-2">
                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2.66C10.0716 2.66 8.18657 3.23183 6.58319 4.30317C4.97982 5.37452 3.73013 6.89726 2.99218 8.67884C2.25422 10.4604 2.06114 12.4208 2.43735 14.3121C2.81355 16.2034 3.74215 17.9407 5.10571 19.3043C6.46928 20.6679 8.20656 21.5965 10.0979 21.9727C11.9892 22.3489 13.9496 22.1558 15.7312 21.4178C17.5127 20.6799 19.0355 19.4302 20.1068 17.8268C21.1782 16.2234 21.75 14.3384 21.75 12.41C21.7473 9.82498 20.7192 7.34662 18.8913 5.51873C17.0634 3.69084 14.585 2.66273 12 2.66ZM12 20.66C10.3683 20.66 8.77326 20.1761 7.41655 19.2696C6.05984 18.3631 5.00242 17.0746 4.378 15.5671C3.75358 14.0597 3.5902 12.4009 3.90853 10.8005C4.22685 9.20017 5.01259 7.73016 6.16637 6.57637C7.32016 5.42259 8.79017 4.63685 10.3905 4.31853C11.9909 4.0002 13.6497 4.16357 15.1571 4.788C16.6646 5.41242 17.9531 6.46984 18.8596 7.82655C19.7661 9.18325 20.25 10.7783 20.25 12.41C20.2475 14.5973 19.3775 16.6943 17.8309 18.2409C16.2843 19.7875 14.1873 20.6575 12 20.66ZM18 12.41C18 12.6089 17.921 12.7997 17.7803 12.9403C17.6397 13.081 17.4489 13.16 17.25 13.16H12C11.8011 13.16 11.6103 13.081 11.4697 12.9403C11.329 12.7997 11.25 12.6089 11.25 12.41V7.16C11.25 6.96109 11.329 6.77033 11.4697 6.62967C11.6103 6.48902 11.8011 6.41 12 6.41C12.1989 6.41 12.3897 6.48902 12.5303 6.62967C12.671 6.77033 12.75 6.96109 12.75 7.16V11.66H17.25C17.4489 11.66 17.6397 11.739 17.7803 11.8797C17.921 12.0203 18 12.2111 18 12.41Z" fill="#667F93" />
                                    </svg>
                                    <p>{post_detail.minutes_read} phút đọc</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="relative h-[600px]">
                                <Image src={post_detail.banner_post.image} fill alt="banner post" />
                            </div>
                            <p className="text-[14px] mx-auto w-fit text-center font-normal text-[#667f93] mt-2 mb-[24px]">{post_detail.banner_post.image_description}</p>
                            <div className="relative pt-3 pb-2 pl-[61px] pr-[61px]">
                                <div className="absolute top-[10px] left-[10px] -translate-y-1/2">
                                    <svg width="48" height="31" viewBox="0 0 48 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.941125 22.4561C0.941125 20.0881 1.51713 17.7841 2.66913 15.5441C3.82113 13.2401 5.26113 11.1601 6.98913 9.30412C8.78113 7.38412 10.7651 5.72012 12.9411 4.31212C15.1811 2.84012 17.3571 1.68812 19.4691 0.856121L22.2531 4.88812C19.8851 6.68012 18.0931 8.28012 16.8771 9.68812C15.7251 11.0961 15.1491 12.5041 15.1491 13.9121C15.1491 16.1521 16.9411 18.5841 20.5251 21.2081C20.5251 22.7441 20.2371 24.1201 19.6611 25.3361C19.0851 26.5521 18.2851 27.5761 17.2611 28.4081C16.3011 29.2401 15.1811 29.8801 13.9011 30.3281C12.6851 30.7761 11.4051 31.0001 10.0611 31.0001C7.43713 31.0001 5.26113 30.2961 3.53313 28.8881C1.80513 27.4801 0.941125 25.3361 0.941125 22.4561ZM26.3811 22.4561C26.3811 20.0881 26.9571 17.7841 28.1091 15.5441C29.2611 13.2401 30.7011 11.1601 32.4291 9.30412C34.2211 7.38412 36.2051 5.72012 38.3811 4.31212C40.6211 2.84012 42.7971 1.68812 44.9091 0.856121L47.5971 4.88812C45.2931 6.68012 43.5331 8.28012 42.3171 9.68812C41.1651 11.0961 40.5891 12.5041 40.5891 13.9121C40.5891 16.1521 42.3811 18.5841 45.9651 21.2081C45.9651 22.7441 45.6771 24.1201 45.1011 25.3361C44.5251 26.5521 43.7251 27.5761 42.7011 28.4081C41.7411 29.2401 40.6211 29.8801 39.3411 30.3281C38.0611 30.7761 36.7491 31.0001 35.4051 31.0001C32.8451 31.0001 30.7011 30.2961 28.9731 28.8881C27.2451 27.4801 26.3811 25.3361 26.3811 22.4561Z" fill="#15AA7A" />
                                    </svg>
                                </div>
                                <p className="text-center text-[#33404A] text-[20px] font-medium leading-[24px] italic">{post_detail.banner_post.description}</p>
                            </div>
                        </div>
                        <div ref={postContentRef}>
                            {
                                post_detail.post_content.map((parent_content, index) => {
                                    return (
                                        <div key={parent_content.title + index} className="mt-[24px]">
                                            <h4 className="text-[#15AA7A] font-extrabold text-[20px]">{(index + 1) + '. ' + parent_content.title}</h4>
                                            {
                                                parent_content.content.map((child_content, index) => {
                                                    return (
                                                        <div key={child_content.type + 'key' + index} className="mt-[24px]">
                                                            {
                                                                child_content.mini_title ? (
                                                                    <h5 className="text-[#15AA7A] text-[16px] font-bold">{child_content.index + '. ' + child_content.mini_title}</h5>
                                                                ) : ''
                                                            }
                                                            {handleShowContent(child_content.content, child_content.type)}
                                                        </div>
                                                    )
                                                })
                                            }
                                            {
                                                parent_content.image ? (
                                                    <div>
                                                        <div className="relative h-[600px] mt-[24px]">
                                                            <Image src={parent_content.image.url} alt={parent_content.image?.description} fill />
                                                        </div>
                                                        <p className="text-[14px] mx-auto w-fit text-center font-normal text-[#667f93] mt-2">{parent_content.image.description}</p>
                                                    </div>
                                                ) : ''
                                            }
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="mt-[72px] pt-[24px] pb-[24px] w-full rounded-[24px] filter drop-shadow-[0_1px_3px_rgba(18,18,23,0.1)] shadow-md drop-shadow-[0_1px_2px_rgba(18,18,23,0.06)]">
                            <h4 className="text-[#33404A] text-[20px] text-center font-extrabold">Bạn thấy bài viết như thế nào?</h4>
                            <p className="mt-1 mb-[24px] text-[#33404A] text-[16px] font-medium text-center">{post_detail.post_reaction.total} phản hồi</p>
                            <div className="flex gap-[32px] items-center justify-center">
                                <button className={"pt-1 rounded-[4px] pb-1 pr-[20px] pl-[20px] cursor-pointer pointer-events-auto " + (post_detail.post_reaction.user_reaction?.type === 'like' ? 'border border-[#10805B]' : '')}>
                                    <Image src="/like.jpg" alt="like" width={48} height={48} />
                                    <p className={"mt-1 text-[16px] font-bold leading-[150%] " + (post_detail.post_reaction.user_reaction?.type === 'like' ? 'text-[#10805B]' : 'text-[#33404A]')}>{post_detail.post_reaction.like}</p>
                                    <p className={"mt-1 text-[14px] font-bold leading-[150%] " + (post_detail.post_reaction.user_reaction?.type === 'like' ? 'text-[#10805B]' : 'text-[#33404A]')}>Hữu ích</p>
                                </button>
                                <button className={"pt-1 rounded-[4px] pb-1 pr-[20px] pl-[20px] cursor-pointer pointer-events-auto " + (post_detail.post_reaction.user_reaction?.type === 'love' ? 'border border-[#10805B]' : '')}>
                                    <Image src="/love.jpg" alt="like" width={48} height={48} />
                                    <p className={"mt-1 text-[16px] font-bold leading-[150%] " + (post_detail.post_reaction.user_reaction?.type === 'love' ? 'text-[#10805B]' : 'text-[#33404A]')}>{post_detail.post_reaction.like}</p>
                                    <p className={"mt-1 text-[14px] font-bold leading-[150%] " + (post_detail.post_reaction.user_reaction?.type === 'love' ? 'text-[#10805B]' : 'text-[#33404A]')}>Hữu ích</p>
                                </button>
                                <button className={"pt-1 rounded-[4px] pb-1 pr-[20px] pl-[20px] cursor-pointer pointer-events-auto " + (post_detail.post_reaction.user_reaction?.type === 'interest' ? 'border border-[#10805B]' : '')}>
                                    <Image src="/interest.jpg" alt="like" width={48} height={48} />
                                    <p className={"mt-1 text-[16px] font-bold leading-[150%] " + (post_detail.post_reaction.user_reaction?.type === 'interest' ? 'text-[#10805B]' : 'text-[#33404A]')}>{post_detail.post_reaction.like}</p>
                                    <p className={"mt-1 text-[14px] font-bold leading-[150%] " + (post_detail.post_reaction.user_reaction?.type === 'interest' ? 'text-[#10805B]' : 'text-[#33404A]')}>Hữu ích</p>
                                </button>
                                <button className={"pt-1 rounded-[4px] pb-1 pr-[20px] pl-[20px] cursor-pointer pointer-events-auto " + (post_detail.post_reaction.user_reaction?.type === 'wow' ? 'border border-[#10805B]' : '')}>
                                    <Image src="/wow.jpg" alt="like" width={48} height={48} />
                                    <p className={"mt-1 text-[16px] font-bold leading-[150%] " + (post_detail.post_reaction.user_reaction?.type === 'wow' ? 'text-[#10805B]' : 'text-[#33404A]')}>{post_detail.post_reaction.like}</p>
                                    <p className={"mt-1 text-[14px] font-bold leading-[150%] " + (post_detail.post_reaction.user_reaction?.type === 'wow' ? 'text-[#10805B]' : 'text-[#33404A]')}>Hữu ích</p>
                                </button>
                                <button className={"pt-1 rounded-[4px] pb-1 pr-[20px] pl-[20px] cursor-pointer pointer-events-auto " + (post_detail.post_reaction.user_reaction?.type === 'boring' ? 'border border-[#10805B]' : '')}>
                                    <Image src="/bored.jpg" alt="like" width={48} height={48} />
                                    <p className={"mt-1 text-[16px] font-bold leading-[150%] " + (post_detail.post_reaction.user_reaction?.type === 'boring' ? 'text-[#10805B]' : 'text-[#33404A]')}>{post_detail.post_reaction.like}</p>
                                    <p className={"mt-1 text-[14px] font-bold leading-[150%] " + (post_detail.post_reaction.user_reaction?.type === 'boring' ? 'text-[#10805B]' : 'text-[#33404A]')}>Hữu ích</p>
                                </button>
                                <button className={"pt-1 rounded-[4px] pb-1 pr-[20px] pl-[20px] cursor-pointer pointer-events-auto " + (post_detail.post_reaction.user_reaction?.type === 'angry' ? 'border border-[#10805B]' : '')}>
                                    <Image src="/angry.jpg" alt="like" width={48} height={48} />
                                    <p className={"mt-1 text-[16px] font-bold leading-[150%] " + (post_detail.post_reaction.user_reaction?.type === 'angry' ? 'text-[#10805B]' : 'text-[#33404A]')}>{post_detail.post_reaction.like}</p>
                                    <p className={"mt-1 text-[14px] font-bold leading-[150%] " + (post_detail.post_reaction.user_reaction?.type === 'angry' ? 'text-[#10805B]' : 'text-[#33404A]')}>Hữu ích</p>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="w-fit min-w-[417px]">
                        <div>
                            <button onClick={onClickShowMenu} className="flex items-center justify-between w-full cursor-pointer pointer-events-auto mb-[24px]">
                                <h4 className="text-[#050505] text-[24px] font-extrabold leading-[200%]">Nội dung bài viết</h4>
                                <svg className={isShowMenu ? '' : 'rotate-180'} width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24.2969 20.2059C24.1924 20.3108 24.0682 20.394 23.9314 20.4508C23.7947 20.5076 23.6481 20.5368 23.5 20.5368C23.3519 20.5368 23.2053 20.5076 23.0686 20.4508C22.9318 20.394 22.8076 20.3108 22.7031 20.2059L16.0009 13.5038L9.29687 20.2059C9.08553 20.4173 8.79888 20.536 8.5 20.536C8.20111 20.536 7.91447 20.4173 7.70312 20.2059C7.49178 19.9946 7.37305 19.708 7.37305 19.4091C7.37305 19.1102 7.49178 18.8235 7.70312 18.6122L15.2031 11.1122C15.3076 11.0073 15.4318 10.9241 15.5686 10.8673C15.7053 10.8105 15.8519 10.7813 16 10.7813C16.1481 10.7813 16.2947 10.8105 16.4314 10.8673C16.5682 10.9241 16.6924 11.0073 16.7969 11.1122L24.2969 18.6122C24.4018 18.7167 24.485 18.8409 24.5418 18.9776C24.5985 19.1144 24.6278 19.261 24.6278 19.4091C24.6278 19.5571 24.5985 19.7037 24.5418 19.8405C24.485 19.9772 24.4018 20.1014 24.2969 20.2059Z" fill="#15AA7A" />
                                </svg>
                            </button>
                            {
                                isShowMenu ? (
                                    <div>
                                        <button onClick={() => clickScrollTo(0)} className={"flex items-center text-[18px] font-medium leading-[200%] gap-[5px] " + (selectedMenu === 0 ? 'text-[#15AA7A]' : 'text-[#33404A]')}>
                                            <p>1. </p>
                                            Quy trình 5S là gì?
                                        </button>
                                        <button onClick={() => clickScrollTo(1)} className={"flex items-center text-[18px] font-medium leading-[200%] gap-[5px] " + (selectedMenu === 1 ? 'text-[#15AA7A]' : 'text-[#33404A]')}>
                                            <p>2. </p>
                                            Lợi ích quy trình 5S đem lại
                                        </button>
                                        <button onClick={() => clickScrollTo(2)} className="flex flex-col">
                                            <div className={"flex items-center text-[18px] font-medium leading-[200%] gap-[5px] " + (selectedMenu === 2 ? 'text-[#15AA7A]' : 'text-[#33404A]')}>
                                                <p>3. </p>
                                                Tại sao doanh nghiệp nên áp dụng quy trình 5S?
                                            </div>
                                            <div className="flex flex-col w-fit pl-[25px]">
                                                <div className="flex items-center gap-[5px] text-[18px] font-medium leading-[200%]"><p>3.1 </p>Cải thiện rõ nét môi trường làm việc</div>
                                                <div className="flex items-center gap-[5px] text-[18px] font-medium leading-[200%]"><p>3.2 </p>Tiết kiệm thời gian đáng kể</div>
                                                <div className="flex items-center gap-[5px] text-[18px] font-medium leading-[200%]"><p>3.3 </p>Tăng năng suất làm việc</div>
                                                <div className="flex items-center gap-[5px] text-[18px] font-medium leading-[200%]"><p>3.4 </p>Tiết kiệm chi phí</div>
                                                <div className="flex items-center gap-[5px] text-[18px] font-medium leading-[200%]"><p>3.5 </p>Tăng chất lượng sản phẩm</div>
                                            </div>
                                        </button>
                                        <button onClick={() => clickScrollTo(3)} className="flex flex-col">
                                            <div className={"flex items-center text-[18px] font-medium leading-[200%] gap-[5px] " + (selectedMenu === 3 ? 'text-[#15AA7A]' : 'text-[#33404A]')}>
                                                <p>4. </p>
                                                Quy trình 5S gồm các bước
                                            </div>
                                            <div className="flex flex-col w-fit pl-[25px]">
                                                <div className="flex items-center gap-[5px] text-[18px] font-medium leading-[200%]"><p>4.1 </p>Seiri (Ngăn nắp)</div>
                                                <div className="flex items-center gap-[5px] text-[18px] font-medium leading-[200%]"><p>4.2 </p>Seiton (Sắp xếp)</div>
                                                <div className="flex items-center gap-[5px] text-[18px] font-medium leading-[200%]"><p>4.3 </p>Seiso (Vệ sinh)</div>
                                                <div className="flex items-center gap-[5px] text-[18px] font-medium leading-[200%]"><p>4.4 </p>Seiketsu (Tiêu chuẩn hóa)</div>
                                                <div className="flex items-center gap-[5px] text-[18px] font-medium leading-[200%]"><p>4.5 </p>Shitsuke (Kỷ luật)</div>
                                            </div>
                                        </button>
                                        <button onClick={() => clickScrollTo(4)} className="flex flex-col">
                                            <div className={"flex items-center text-[18px] font-medium leading-[200%] gap-[5px] " + (selectedMenu === 4 ? 'text-[#15AA7A]' : 'text-[#33404A]')}>
                                                <p>5. </p>
                                                Quy trình được thực hiện như sau
                                            </div>
                                            <div className="flex flex-col w-fit pl-[25px]">
                                                <div className="flex items-center gap-[5px] text-[18px] font-medium leading-[200%]"><p>5. </p>Giai đoạn chuẩn bị</div>
                                                <div className="flex items-center gap-[5px] text-[18px] font-medium leading-[200%]"><p>5. </p>Triển khai rộng rãi</div>
                                                <div className="flex items-center gap-[5px] text-[18px] font-medium leading-[200%]"><p>5. </p>Thực hiện vệ sinh toàn bộ doanh nghiệp</div>
                                                <div className="flex items-center gap-[5px] text-[18px] font-medium leading-[200%]"><p>5. </p>Sàng lọc, sắp xếp và đánh giá</div>
                                                <div className="flex items-center gap-[5px] text-[18px] font-medium leading-[200%]"><p>5. </p>Đánhh giá</div>
                                            </div>
                                        </button>
                                        <button onClick={() => clickScrollTo(5)} className="flex flex-col">
                                            <div className={"flex items-center text-[18px] font-medium leading-[200%] gap-[5px] " + (selectedMenu === 5 ? 'text-[#15AA7A]' : 'text-[#33404A]')}>
                                                <p>6. </p>
                                                Quy trình 5S có giống với Kaizen?
                                            </div>
                                        </button>
                                        <button onClick={() => clickScrollTo(6)} className="flex flex-col">
                                            <div className={"flex items-center text-[18px] font-medium leading-[200%] gap-[5px] " + (selectedMenu === 6 ? 'text-[#15AA7A]' : 'text-[#33404A]')}>
                                                <p>7. </p>Đối tượng nào nên áp dụng 5S
                                            </div>
                                        </button>
                                        <button onClick={() => clickScrollTo(7)} className="flex flex-col">
                                            <div className={"flex items-center text-[18px] font-medium leading-[200%] gap-[5px] " + (selectedMenu === 7 ? 'text-[#15AA7A]' : 'text-[#33404A]')}>
                                                <p>8. </p>Các yếu tố tạo nên thành công cho quy trình 5S
                                            </div>
                                        </button>
                                    </div>
                                ) : ''
                            }

                        </div>
                        <div className="mt-[24px]">
                            <PRSide />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
