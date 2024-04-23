import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/4c70b9b1-5c91-46ad-b7d9-0267f475d22f-2u6cjz.jpg",
  "https://utfs.io/f/b0adac19-ea05-45cb-8734-2b27cec041fd-we8qu5.jpg",
  "https://utfs.io/f/e4dd4f53-1672-4ee7-8a8b-14da9306ec31-29xeb9.jpg"
]

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}))

export default async function HomePage() {

  const posts = await db.query.posts.findMany();

  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + index} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
