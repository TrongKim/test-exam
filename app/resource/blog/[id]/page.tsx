import { getPosts } from '@/app/api/post';
import { getPostDetail } from '@/app/api/post/detail';
import { PostDetail } from '@/components/PostDetail/post_detail';
import { PostRelative } from '@/components/PostDetail/PostRelative/post_relative';
import { IPost, IReviewPost } from '@/models/post';
import React from 'react';
import { Metadata } from "next";
import { unstable_cache } from 'next/cache';
import { notFound } from 'next/navigation';

const getCachedPostDetail = unstable_cache(
    (id: string) => getPostDetail(id), 
    ["post_detail"],
    { revalidate: 13600 }
);


export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
    const { data }: { data: IPost } = await getCachedPostDetail(params.id);
    if (!data) return notFound();

    return {
        title: data.title + " | FOSO SOFT",
        description: data.banner_post.description,
        keywords: data.tags.join(", "),
        openGraph: {
            title: data.title,
            description: data.banner_post.description,
            url: `http://localhost:3000/resource/blog/1`,
            siteName: "FOSO SOFT",
            type: "article",
            publishedTime: data.createAt,
            modifiedTime: data.updateAt,
            images: [
                {
                    url: data.banner_post.image,
                    width: 1200,
                    height: 630,
                    alt: data.banner_post.image_description,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: data.title,
            description: data.banner_post.description,
            images: [data.banner_post.image],
        },
    };
}

export const BlogDetail = async ({ params }: { params: { id: string } }) => {
    const { data }: { data: IPost } = await getCachedPostDetail(params.id);
    if (!data) return notFound();
    const { data: list }: { data: IReviewPost[] } = await getPosts(1, 3);

    return (
        <div>
            <div>
            </div>
            <div>
                <PostDetail post_detail={data} />
                <PostRelative posts={list} />
            </div>
        </div>
    )
}

export default BlogDetail;