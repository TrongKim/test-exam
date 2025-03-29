import { BannerInformation } from '@/components/BannerInformation/banner_information';
import { PostsDisplay } from '@/components/PostsDisplay/posts_display';
import { IReviewPost } from '@/models/post';
import React from 'react';
import { Metadata } from "next";
import { getPosts } from '@/app/api/post';

export const metadata: Metadata = {
    title: "Blog - Bài viết mới nhất",
    description: "Khám phá các bài viết mới nhất về công nghệ, lập trình và nhiều lĩnh vực khác.",
    keywords: "blog, công nghệ, lập trình, bài viết mới, blog, cong nghe, lap trinh, bai viet, xay dung phan mem",
    openGraph: {
        title: "Blog - Bài viết mới nhất",
        description: "Khám phá các bài viết mới nhất về công nghệ, lập trình và nhiều lĩnh vực khác.",
        url: "127.0.0.1/resource/blog",
        siteName: "FOSO SOFT",
        type: "website",
        images: [
            {
                url: "127.0.0.1/",
                width: 1200,
                height: 630,
                alt: "Blog - Bài viết mới nhất",
            },
        ],
    },
};

export const Blog = async () => {
    const { data, totalPages }: { data: IReviewPost[], totalPages: number } = await getPosts(1, 6);

    return (
        <div>
            <BannerInformation />
            <div className="mt-[96px]">
                <PostsDisplay posts={data} page={totalPages} />
            </div>
        </div>
    )
}

export default Blog;