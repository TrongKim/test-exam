export const revalidate = 13600;

export const dynamic = 'force-dynamic';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
export async function getPostDetail(postId: string) {
    const res = await fetch(`${API_URL}/api/post/detail?postId=${postId}`, {
        next: { revalidate: revalidate },
    });

    if (!res.ok) throw new Error("Lỗi tải dữ liệu");
    return res.json();
}
