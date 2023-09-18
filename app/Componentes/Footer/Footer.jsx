import Link from "next/link";
import React from "react";
import st from './FooterStyle.module.css'

export default function Footer() {
    return (
        <>
            <footer className={st.main}>
                <div className={st.top}>
                    <div className={st.about}>
                        <Link href='Articles/About' title="Saiba mais sobre o projeto">Sobre o evento</Link>
                    </div>
                </div>

                <div className={st.bottom}>
                    <h1>Ref. bibliográficas</h1>
                    <div className={st.links}>
                        <Link href={'https://youtu.be/inZB-YeYEh4'}>Documentário P&N</Link>
                        <Link href={'https://youtu.be/bhAPzZ-K098'}>Vídeo QNSJA</Link>
                        <Link href={'https://www.hbomax.com/br/pt/series/urn:hbo:series:GZIsCBA1WaqKZwgEAAA5R'}>Documentário HBO Max (1° ep)</Link>
                        <Link href={'https://www.mis-sp.org.br/educativo/blog/800d99cc-460d-4e35-a8db-0fdae159c0f9/a-origem-do-comics-code-authority'}>Blog do MIS-SP</Link>
                        <Link href={'https://dialnet.unirioja.es/servlet/articulo?codigo=8833202'}>Artigo da revista Dialnet, escrito por: Rafael Machado Costa</Link>
                        <Link href={'https://www.amazon.com.br/Fredric-William-Amazona-Persegui%C3%A7%C3%A3o-Quadrinhos-ebook/dp/B0923764LX/ref=sr_1_1?keywords=fredric+william+e+a+amazona&qid=1693330848&sprefix=fredric+wili%2Caps%2C187&sr=8-1'}>Quadrinho: Fredric, William e a Amazona: Perseguição e Censura aos Quadrinhos </Link>
                    </div>
                </div>
            </footer>
        </>
    );
}
