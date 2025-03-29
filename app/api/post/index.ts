export const revalidate = 86400;

export async function getPosts(page = 1, limit = 6) {
    const res = await fetch(`http://localhost:3000/api/post?page=${page}&limit=${limit}`, {
        next: { revalidate: revalidate },
    });

    if (!res.ok) throw new Error("Lỗi tải dữ liệu");
    return res.json();
}