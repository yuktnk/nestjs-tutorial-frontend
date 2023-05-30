import Link from 'next/link';
import style from '../../styles/Home.module.css';

async function getAllPosts() {
  await new Promise((resolve) => setTimeout(resolve, 500));

  const res = await fetch(`http://localhost:3000/posts/`, {
    method: 'GET',
    headers: new Headers(),
    cache: 'no-store',
  });

  console.log('res:', res.body);

  if (!res.ok) {
    throw new Error('Failed to fetch data in server');
  }

  const { posts } = await res.json();

  return posts;
}
export default async function PostsList() {
  const posts = await getAllPosts();
  console.log('posts:', posts);

  return (
    <>
      {posts.length !== 0 ? (
        <ul className={style.postList}>
          {posts.map((post: any) => (
            <li key={post.id} className={style.post}>
              <Link prefetch={false} href={`/posts/${post.id}`}>
                <h2 className={style.title}>{post.title}</h2>
                <p className={style.author}>By {post.author}</p>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <div>
          <p>投稿がありません</p>
        </div>
      )}
    </>
  );
}
