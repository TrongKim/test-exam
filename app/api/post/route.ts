import { IReviewPost } from '@/models/post';

export async function GET(request: Request) {
    const posts: IReviewPost[] = [
        {
            id: '1',
            image: '/post.jpg',
            tags: ['Quản lý sản xuất'],
            title: 'Tại sao BOM quan trọng trong quản lý sản xuất?',
            date: '17/11/2022',
            minutes_read: 10
        },
        {
            id: '2',
            image: '/post.jpg',
            tags: ['Quản lý sản xuất'],
            title: 'Tại sao BOM quan trọng trong quản lý sản xuất?',
            date: '17/11/2022',
            minutes_read: 10
        },
        {
            id: '3',
            image: '/post.jpg',
            tags: ['Quản lý sản xuất'],
            title: 'Tại sao BOM quan trọng trong quản lý sản xuất?',
            date: '17/11/2022',
            minutes_read: 10
        },
        {
            id: '4',
            image: '/post.jpg',
            tags: ['Quản lý sản xuất'],
            title: 'Tại sao BOM quan trọng trong quản lý sản xuất?',
            date: '17/11/2022',
            minutes_read: 10
        },
        {
            id: '5',
            image: '/post.jpg',
            tags: ['Quản lý sản xuất'],
            title: 'Tại sao BOM quan trọng trong quản lý sản xuất?',
            date: '17/11/2022',
            minutes_read: 10
        },
        {
            id: '6',
            image: '/post.jpg',
            tags: ['Quản lý sản xuất'],
            title: 'Tại sao BOM quan trọng trong quản lý sản xuất?',
            date: '17/11/2022',
            minutes_read: 10
        },
        {
            id: '7',
            image: '/post.jpg',
            tags: ['Thiết kế website'],
            title: 'Tại sao BOM quan trọng trong quản lý sản xuất?',
            date: '17/11/2022',
            minutes_read: 10
        },
        {
            id: '8',
            image: '/post.jpg',
            tags: ['Thiết kế website'],
            title: 'Hi?',
            date: '17/11/2022',
            minutes_read: 10
        },
    ];
    const url = new URL(request.url);
    const page = Number(url.searchParams.get("page")) || 1;
    const limit = Number(url.searchParams.get("limit")) || 6;

    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedPosts = posts.slice(startIndex, endIndex);
    
    return new Response(JSON.stringify({
        data: paginatedPosts,
        total: posts.length,
        page,
        totalPages: Math.ceil(posts.length / limit)
    }), {
        headers: { "Content-Type": "application/json",  "Cache-Control": "s-maxage=86400, stale-while-revalidate" }
    });
}