import React from "react";
import Image from 'next/image'
import styles from './MainStyle.module.css'

export default function Main() {
   return (
      <>
         <div className={styles.main}>
            <div className={styles.left}>
               <div className={styles.title}>
                  <Image src={'/logo_trindade.png'} alt="Logo if goiano campus trindade" width={100} height={100}/>
                  <h1>Semana Nacional de Ciência e Tecnologia do IF Goiano - Campus Trindade</h1>
               </div>

               <h1 className={styles.pageTitle}>Perseguição e censura aos quadrinhos</h1>

               <div className={styles.names}>
                  <h2>Alunos: João Víctor M. Calaça; <br/> Silvestre Ramos C. Neto; <br/> Gabriel Henrique F. de Oliveira</h2>
               </div>
            </div>

            <div className={styles.right}>
               <div className={styles.firstImg}> <Image src={"/CcaLogo.png"} alt="Logo Comics Code Authority" width={100} height={100}/> </div>
            </div>
         </div>
      </>
   );
}
