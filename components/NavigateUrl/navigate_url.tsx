'use client';
import { INavigate } from '@/models/navigate';
import React, { useEffect, useState } from 'react';

interface Props {
    navigate_urls: string[];
    navigates: INavigate[];
}

export const NavigateUrl = ({ navigate_urls, navigates }: Props) => {
    const [navigateHandledURLs, setNavigateHandledURLs] = useState<string[]>([]);

    const handleShowURL = (url: string) => {
        if (url.length === 0) return 'Trang chủ';
        for(let item of navigates) {
            if (url === item.url) return item.name;
        }
        return 'Unknown';
    };

    return (
        <div className="container mx-auto mt-[72px]">
            <ul className="flex items-center justify-center">
                {
                    navigate_urls.map((url, index) => {
                        return (
                            <li key={url + index} className="flex items-center">
                                <p className={"font-sm " + (index === navigate_urls.length - 1 ? 'font-bold' : 'font-normal')}>{handleShowURL(url)}</p>
                                {
                                    index !== navigate_urls.length - 1 ?
                                        <pre className="font-sm font-normal">{'>'}</pre>
                                        : ''
                                }
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    )
}
