import Head from 'next/head';
import styles from './styles.module.scss';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a>
            <time>
              12 de Março de 2021
            </time>
            <strong>Titulo do post</strong>
            <p>Descriçao breve do post</p>
          </a>
          <a>
            <time>
              12 de Março de 2021
            </time>
            <strong>Titulo do post</strong>
            <p>Descriçao breve do post</p>
          </a>
          <a>
            <time>
              12 de Março de 2021
            </time>
            <strong>Titulo do post</strong>
            <p>Descriçao breve do post</p>
          </a>
        </div>
      </main>
    </>
  );
}
