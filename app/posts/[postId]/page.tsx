import { notFound } from 'next/navigation';
import styles from '../../../styles/Home.module.css';
import Link from 'next/link';

type PageProps = {
  params: {
    postId: string;
  };
};

async function fetchPost(postId: string) {
  const res = await fetch(`http://localhost:3000/posts/${postId}`, {
    method: 'GET',
    headers: new Headers(),
    cache: 'force-cache',
  });

  const post = await res.json();

  console.log('fetchPost post: ', post);

  return post;
}

export default async function PostDetailPage({ params }: PageProps) {
  console.log(params);

  const post = await fetchPost(params.postId);

  if (!post) {
    return notFound();
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{post.title}</h1>
      <p className={styles.content}>{post.content}</p>
      <p className={styles.meta}>Author: {post.author}</p>
      <p className={styles.meta}>Created at: {post.createdAt}</p>
      <Link href="/">Back</Link>
    </div>
  );
}

export async function generateStaticParams() {
  const res = await fetch(`http://localhost:3000/posts/`, {
    method: 'GET',
    headers: new Headers(),
  });

  const { posts } = await res.json();

  return posts.map((post: any) => ({
    postId: post.id.toString(),
  }));
}
