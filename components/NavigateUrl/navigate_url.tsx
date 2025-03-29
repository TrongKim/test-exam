'use client';
import { INavigate } from '@/models/navigate';
import React from 'react';

interface Props {
    navigate_urls: string[];
    navigates: INavigate[];
    detail?: string;
}

export const NavigateUrl = ({ navigate_urls, navigates, detail }: Props) => {
    const handleShowURL = (url: string) => {
        if (url.length === 0) return 'Trang chủ';
        for (const item of navigates) {
            if (url === item.url) return item.name;
        }
        return url;
    };

    return (
        <div className="container mx-auto">
            <ul className="flex items-center justify-center">
                {
                    (detail ? navigate_urls.slice(0, navigate_urls.length - 1) : navigate_urls).map((url, index) => {
                        return (
                            <li key={url + index} className="flex items-center">
                                <p className={"font-sm first-letter:uppercase " + (index === navigate_urls.length - 1 && !detail ? 'font-bold' : 'font-normal')}>{handleShowURL(url)}</p>
                                {
                                    index !== navigate_urls.length - 1 ?
                                        <pre className="font-sm font-normal">{'>'}</pre>
                                        : ''
                                }
                            </li>
                        );
                    })
                }
                {
                    detail ? (
                        <li className="flex items-center">
                            <p className="font-sm font-bold first-letter:uppercase">{detail}</p>
                        </li>
                    ) : ''
                }
            </ul>
        </div>
    )
}
