import React from 'react';
import Image from 'next/image';

export const PRSide = () => {
    return (
        <div>
            <button className="mb-8 rounded-[24px] overflow-hidden w-[366px] h-[650px] block">
                <Image src="/pr-side.jpg" alt="pr banner" width={366} height={650} />
            </button>
            <button className="mb-8 rounded-[24px] overflow-hidden w-[366px] h-[650px] block">
                <Image src="/pr-side-2.jpg" alt="pr banner" width={366} height={650} />
            </button>
        </div>
    )
}
