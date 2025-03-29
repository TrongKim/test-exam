export const revalidate = 86400;
export const dynamic = 'force-dynamic';
const API_URL = process.env.NEXT_PUBLIC_API_URL;
export async function getPosts(page = 1, limit = 6) {
    const res = await fetch(`${API_URL}/api/post?page=${page}&limit=${limit}`, {
        next: { revalidate: revalidate },
    });

    if (!res.ok) throw new Error("Lỗi tải dữ liệu");
    return res.json();
}