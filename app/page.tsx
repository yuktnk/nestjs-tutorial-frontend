import { Suspense } from 'react';

import style from '../styles/Home.module.css';
import PostsList from './components/posts-list';
import Spinner from './components/Spinner';

export default async function Home() {
  return (
    <main>
      <div className={style.container}>
        <h1>Nest.js Blog</h1>
        <Suspense fallback={<Spinner borderColor="border-green-500" />}>
          {/* @ts-ignore */}
          <PostsList />
        </Suspense>
      </div>
    </main>
  );
}
