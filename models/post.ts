export enum EPostContentType {
    NORMAL = 0,
    INLINE = 1,
    LIST = 2,
    SPECIAL = 3,
    NORMAL_LIST = 4
}

export interface IPost extends IReviewPost {
    author: {
        name: string;
        image: string;
    };
    createAt: string;
    updateAt: string;
    banner_post: {
        image: string;
        description: string;
        image_description: string;
    };
    post_content: {
        title: string;
        content: {
            mini_title?: string;
            content: string | string[];
            type: EPostContentType;
            index?: number;
        }[];
        image?: {
            url: string;
            description: string;
        };
    }[];
    post_reaction: {
        total: number;
        like: number;
        love: number;
        interest: number;
        wow: number;
        boring: number;
        angry: number;
        user_reaction?: {
            type: string;
        };
    };
}

export interface IReviewPost {
    id: string;
    image: string;
    tags: string[];
    title: string;
    date: string;
    minutes_read: number;
}