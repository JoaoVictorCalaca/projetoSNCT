import React from "react";
import styles from './referenceStyle.module.css'
import Link from "next/link";

export default function References() {
   return (
      <>
         <div className={styles.articles}>
            <div className={styles.title}>
               <div>Outras fontes de informação</div>
            </div>

            <div className={styles.galery}>
               <Link href={'https://youtu.be/inZB-YeYEh4'} target="_blank">
                  <div className={styles.itemSingle}>
                     <div className={styles.img}></div>
                     <h1>Documentário completo - Pipoca & Nanquim</h1>
                     <p>A editora que quadrinhos brasileira Pipoca & Nanquim criou um vídeo super didático e informativo sobre a censura das hq&apos;s.</p>
                     <span>ACESSAR</span>
                  </div>
               </Link>

               <Link href={'https://youtu.be/bhAPzZ-K098'} target="_blank">
                  <div className={styles.itemSingle}>
                     <div className={`${styles.img} ${styles.img1}`}></div>
                     <h1>Vídeo do canal Quadrinhos na Sarjeta</h1>
                     <p>O criador de conteúdo e professor Alexandre Nick preparou este vídeo com 5 mitos sobre as campanhas anti-quadrinhos.</p>
                     <span>ACESSAR</span>
                  </div>
               </Link>

               <Link href={'https://www.mis-sp.org.br/educativo/blog/800d99cc-460d-4e35-a8db-0fdae159c0f9/a-origem-do-comics-code-authority'} target="_blank">
                  <div className={styles.itemSingle}>
                     <div className={`${styles.img} ${styles.img2}`}></div>
                     <h1>Artigo do MIS - SP</h1>
                     <p>O Museu da Imagem e do Som do estado de São Paulo publicou em seu blog um artigo sobre o Comics Code Authority.</p>
                     <span>ACESSAR</span>
                  </div>
               </Link>
            </div>
         </div>
      </>
   );
}
