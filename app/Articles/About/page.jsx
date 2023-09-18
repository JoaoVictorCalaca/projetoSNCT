import React from "react";
import st from './AboutStyles.module.css'
import Link from "next/link";
import Image from "next/image";

export default function About() {
   return (
      <>
         <main className={st.main}>
            <Link href='/'>↩ Voltar à página inicial</Link>
            <div className={st.text}>
               <h1>Sobre o projeto</h1>
               <p>A partir desse contexto, objetivamos contribuir para aumentar a visibilidade do tema Censura e Perseguição aos Títulos de Quadrinhos nas décadas de 1940 a 1970. Para compreender melhor a censura nos quadrinhos, assistimos a documentários no YouTube, na HBO e examinamos o artigo intitulado &quote;Reinterpretando Wertham. Influência de Seduction Of The Innocent nos Estudos de Quadrinhos no Brasil&quote; de Nobu Chinen. Para apresentar nosso trabalho, na Feira de Ciências do IF Goiano Câmpus Trindade 2023, planejamos a exibição de quadrinhos de nossa coleção pessoal, a criação de um banner informativo e slides sobre o contexto da censura na época. Além disso, consideramos a criação de um site a fim de compartilhar informações coletadas na pesquisa, servindo como fonte de informações sobre o tema. Esperamos que nosso trabalho possa contribuir para conscientização sobre a censura e seu impacto na cultura e na liberdade de expressão, incentivando discussões significativas sobre o assunto.</p>
            </div>

            <Link href={'#'} className={st.sorteio}>
               <h1>Participe do sorteio!</h1>
               <p>Serão sorteados dois quadrinhos aos <br></br> que comparecem até o final da apresentação</p>
               <div>
                  <Image src='/miranhaimg.jpg' alt="capa homem aranha" width={150} height={100}/>
                  <Image src='/batmanimg.jpg' alt="capa homem aranha" width={100} height={100}/>
               </div>
            </Link>

            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScQnBxiw6XEFYasKrrGHmACYipjC-vslRnCtC7owQqqMidvxg/viewform?embedded=true" width="90%" height="745" frameborder="0" marginheight="0" marginwidth="0">Carregando…</iframe>
         </main>
      </>
   )
}
