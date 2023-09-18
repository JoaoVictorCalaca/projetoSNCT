import React from "react";
import styles from './articlesStyle.module.css'
import Link from "next/link";

export default function Articles() {
   return (
      <>
         <div className={styles.articles}>
            <div className={styles.title}>
               <div>Selecione um tópico</div>
            </div>

            <div className={styles.galery}>
               <Link href='Articles/Context' className={styles.itemSingle}>
                  <div className={styles.img}></div>
                  <h1>Contexto histórico</h1>
                  <p>Uma contextualização sobre o período das décadas de 30, 40 e 50</p>
                  <span>IR PARA A PÁGINA</span>
               </Link>

               <Link href='Articles/Fredric' className={styles.itemSingle}>
                  <div className={`${styles.img} ${styles.img1}`}></div>
                  <h1>Fredric Wertham</h1>
                  <p>Uma das mentes responsáveis por iniciar as campanhas anti-quadrinhos.</p>
                  <span>IR PARA A PÁGINA</span>
               </Link>

               <Link href='Articles/ComicsCode' className={styles.itemSingle}>
                  <div className={`${styles.img} ${styles.img2}`}></div>
                  <h1>Comics Code Authority</h1>
                  <p>O código de auto censura que levou a uma das maiores crises da indústria.</p>
                  <span>IR PARA A PÁGINA</span>
               </Link>
            </div>
         </div>
      </>
   );
}
