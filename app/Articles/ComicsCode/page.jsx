import '../../Articles/pageStyle.css'
import Link from 'next/link';

export default function Fredric() {
    return (
        <main>
            <article>
                <header>
                    <Link href='/'>↩ Voltar à página inicial</Link>
                    <h1>Fredric Wertham</h1>
                </header>

                <div>
                    <h2>Introdução</h2>
                    <p className='text'>O Comics Code Authority (CCA), estabelecido em 1954, foi uma organização de autorregulação que impôs diretrizes estritas sobre o conteúdo das histórias em quadrinhos nos Estados Unidos. Criado em resposta às preocupações levantadas pelo psiquiatra Fredric Wertham em seu livro "Sedução dos Inocentes," o CCA tinha como objetivo mitigar as críticas de que os quadrinhos estavam corrompendo a juventude americana. Neste artigo, exploraremos o funcionamento do Comics Code Authority e as críticas que surgiram em relação à sua regulamentação na indústria de quadrinhos.</p>
                </div>

                <div>
                    <h2>Os Princípios do Comics Code Authority</h2>
                    <p className='text'>O Comics Code Authority estabeleceu um conjunto de diretrizes rígidas que as editoras de quadrinhos eram obrigadas a seguir se desejassem ostentar o selo de aprovação do CCA em suas publicações. Alguns dos princípios-chave incluíam:</p>
                </div>

                <div>
                    <ol>
                        <li>Proibição de linguagem vulgar, obscena ou profana.</li>
                        <li>Restrições à representação de violência gráfica, particularmente em relação a crimes violentos e terror.</li>
                        <li>Proibição de representações explícitas ou excessivamente sensuais de personagens femininas.</li>
                        <li>Limitações nas representações de autoridade, como a polícia, para evitar que fossem retratadas de maneira desrespeitosa.</li>
                        <li>A proibição da glorificação do crime ou do mal.</li>
                        <li>A obrigação de sempre retratar a justiça e a moral prevalecendo no final da história.</li>
                    </ol>
                </div>

                <div>
                    <h2>Críticas ao Comics Code Authority</h2>
                    <p className='text'>Apesar de seus objetivos de proteger a juventude e promover conteúdo mais "seguro" nos quadrinhos, o Comics Code Authority enfrentou críticas significativas ao longo dos anos:</p>
                </div>

                <div>
                    <ol>
                        <li>Censura Criativa: Muitos criadores de quadrinhos viram as diretrizes do CCA como uma forma de censura criativa. As restrições sobre o conteúdo limitavam a liberdade dos escritores e artistas de explorar temas complexos e maduros.</li>
                        <li>Estagnação da Indústria: A implementação do CCA resultou em uma era de conformidade e uniformidade nas histórias em quadrinhos. Os temas mais sombrios e a experimentação narrativa que floresceram antes da sua criação foram drasticamente reduzidos.</li>
                        <li>Falta de Adaptação: À medida que a sociedade evoluía, as diretrizes do CCA se tornaram cada vez mais desatualizadas. Temas sociais, como racismo e drogas, eram difíceis de abordar de maneira significativa sob as restrições do CCA.</li>
                        <li>Declínio nas Vendas: À medida que o público envelhecia e buscava formas mais maduras e sofisticadas de entretenimento, as vendas de quadrinhos direcionados para crianças, conformes com o CCA, começaram a declinar.</li>
                        <li>Fim do CCA: Na década de 2000, as principais editoras de quadrinhos abandonaram o selo do Comics Code Authority, reconhecendo a necessidade de autorregulação mais flexível e acomodação dos gostos do público moderno.</li>
                    </ol>
                </div>

                <div>
                    <h2>Conclusão</h2>
                    <p className='text'>O Comics Code Authority, apesar de ter sido criado com a intenção de proteger a juventude e eliminar preocupações sobre os quadrinhos, enfrentou críticas significativas e consequências inesperadas. A regulamentação estrita do CCA levou a uma era de conformidade e uniformidade na indústria de quadrinhos, restringindo a criatividade e limitando a capacidade dos quadrinhos de abordar temas complexos e maduros.</p>
                    <p className='text'>Embora o Comics Code Authority tenha desempenhado um papel histórico na indústria de quadrinhos, ele é frequentemente lembrado como uma lição sobre os desafios da censura criativa e da regulamentação excessivamente rígida em meios de comunicação criativos. A sua eventual obsolescência e abandono pelas principais editoras de quadrinhos refletem a necessidade de uma abordagem mais flexível e sensível ao contexto na autorregulação da mídia.</p>
                </div>
            </article>
        </main>
    );
}
