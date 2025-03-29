import { Post } from '@/components/PostsDisplay/Post/post';
import { IReviewPost } from '@/models/post';
import React from 'react';

interface Props {
    posts: IReviewPost[];
}

export const PostRelative = ({ posts }: Props) => {
    return (
        <div className="container mx-auto">
            <h4 className="text=[#050505] text-[36px] font-extrabold capitalize leading-[200%] mb-[24px] mt-[96px]">Bài viết liên quan</h4>
            <div className="grid gap-8 xl:grid-cols-3">
                {
                    posts.map((post, index) => {
                        return (
                            <div key={post.id + index} className="flex-1">
                                <Post post={post} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
