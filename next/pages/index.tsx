import Head from 'next/head';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Vincular</title>
        <meta name="description" content="Editor de arquivos docx e PDF" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <h1 className={styles.siteName}>vincular</h1>
      </header>

      <main className={styles.mainContent}>
        <aside className={styles.sidebar}>
          <button className={styles.button}>abrir arquivo</button>
          <button className={styles.button}>vincular arquivos</button>
          <button className={styles.button}>configurações</button>
        </aside>

        <div className={styles.mainSections}>
          <section className={styles.recentFilesSection}>
            <h2>arquivos recentes</h2>
            <div className={styles.carousel}>
              <div className={styles.fileCard}>
                <p>"nome do arquivo".docx</p>
                <p>aberto ontem - às 21</p>
              </div>
              <div className={styles.fileCard}>
                <p>"nome do arquivo".docx</p>
                <p>aberto ontem - às 21</p>
              </div>
              <div className={styles.fileCard}>
                <p>"nome do arquivo".docx</p>
                <p>aberto ontem - às 21</p>
              </div>
            </div>
          </section>

          <section className={styles.createDocumentSection}>
            <h2>criar um documento</h2>
            <div className={styles.carousel}>
              <div className={`${styles.fileCard} ${styles.docxCard}`}>
                <p>docx</p>
              </div>
              <div className={`${styles.fileCard} ${styles.xlsxCard}`}>
                <p>xlsx</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}