export const revalidate = 86400;

export async function getPosts(page = 1, limit = 6) {
    const url = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
    const res = await fetch(`${url}/api/post?page=${page}&limit=${limit}`, {
        next: { revalidate: revalidate },
    });

    if (!res.ok) throw new Error("Lỗi tải dữ liệu");
    return res.json();
}