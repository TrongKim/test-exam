export const revalidate = 13600;

export async function getPostDetail(postId: string) {
    const res = await fetch(`http://localhost:3000/api/post/detail?postId=${postId}`, {
        next: { revalidate: revalidate },
    });

    if (!res.ok) throw new Error("Lỗi tải dữ liệu");
    return res.json();
}
