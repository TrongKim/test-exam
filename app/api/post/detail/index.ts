export const revalidate = 13600;

export async function getPostDetail(postId: string) {
    const url = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
    const res = await fetch(`127.0.0.1/api/post/detail?postId=${postId}`, {
        next: { revalidate: revalidate },
    });

    if (!res.ok) throw new Error("Lỗi tải dữ liệu");
    return res.json();
}
