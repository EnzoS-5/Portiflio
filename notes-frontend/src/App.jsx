import { useState } from 'react'
import './App.css'

export default function App() {
  const [route, setRoute] = useState('home')

  // base apropriada para dev / prod (Vite define import.meta.env.BASE_URL)
  const BASE = import.meta.env.BASE_URL || '/'

  const Nav = () => (
    <nav className="top_nav">
      <button className="nav_button" onClick={() => setRoute('home')}>Início</button>
      <button className="nav_button" onClick={() => setRoute('curriculo')}>Curriculo</button>
      <button className="nav_button" onClick={() => setRoute('projetos')}>Projetos</button>
      <button className="nav_button" onClick={() => setRoute('vida')}>Vida Pessoal</button>
      <button className="nav_button" onClick={() => setRoute('contato')}>Contato</button>
    </nav>
  )

  const Home = () => (
    <main>
      <div className="container">
        <div className="image_container">
          <img src={`imagens/Eu.jpeg`} alt="Enzo S" />
        </div>

        <div className="text_container">
          <h1>Olá, meu nome é <span className="highlight">Enzo Santoro</span></h1>
          <ul className="ul_1">
            <li>Graduação: (cursando atualmente) Ciência da Computação </li>
            <li>Pós-Graduação: (-)</li>
          </ul>
        </div>
      </div>
    </main>
  )

  const Curriculo = () => (
    <div>
      <div className="titulo_barra">
        <a href="#" onClick={(e)=>{e.preventDefault(); setRoute('home')}}><h1>Curriculo</h1></a>
      </div>
      <div className="corpo">
        <a href="https://docs.google.com/document/d/153amiYypiA00T9xonlCmQiVJLt0UrbHq/edit?usp=sharing&ouid=103963937999349777155&rtpof=true&sd=true" target="_blank" rel="noreferrer"> Meu Curriculo</a>
      </div>
      <img className="img_2" src={`imagens/curriculo.png`} alt="Curriculo" />
      <div className="mensagem_da_imagem"><li>Imagem de: 11/11/2025</li></div>
    </div>
  )

  const Projetos = () => (
    <div>
      <div className="titulo_barra">
        <a href="#" onClick={(e)=>{e.preventDefault(); setRoute('home')}}><h1>Projetos</h1></a>
      </div>

      <div className="projeto_1">
        <h2>Projeto Portifolio</h2>
        <h3>Descrição:</h3>
        <p>Esse site foi um projeto inicialmente para a faculdade com apenas html e css, porém após algum tempo atualizando ele decidi torna-lo um projeto pessoal para mostrar minhas habilidades e trabalhos realizados. Atualmente, o site é feito com React.</p>
      </div>

      <div className="projeto_1">
        <img className="img_3" src={`imagens/TankVsTower.png`} alt="Projeto Tank Vs Towers" />
        <h2>Projeto Tank Vs Towers</h2>
        <h3>Descrição:</h3>
        <p>O projeto Tank Vs Towers é um jogo desenvolvido em Python utilizando a biblioteca Pygame. Esse projeto foi realizado por mim e um colega no primeiro semestre de 2025. Outra parte do projeto foi o site que fizemos para apresentar o jogo e suas funcionalidades.</p>
        <a href="https://insper-classroom.github.io/projeto-pygame-site-prateado-ruan-e-enzo/" target="_blank" rel="noreferrer">Link do projeto Tank Vs Towers</a>
      </div>

      <div className="projeto_1">
        <img className="img_3" src={`imagens/InsperAsk.png`} alt="Projeto InsperAsk" />
        <h2>Projeto InsperAsk</h2>
        <h3>Descrição:</h3>
        <p>O projeto InsperAsk foi feito pelo meu grupo (Fevereiro) para um trabalho de faculdade no meu segundo semestre, no qual desenvolvemos um projeto em React e MongoDB. Esse projeto teve como insiração o Bainly, porém adaptamos a ideia para encaixar com nossa faculdade, tanto que só é possivel entrar quem possui um email @insper.edu.br que é cedido aos alunos e professores do Insper.</p>
        <a href="http://54.221.82.163" target="_blank" rel="noreferrer">Link do projeto InsperAsk</a>
      </div>
    </div>
  )

  const Vida = () => (
    <div>
      <div className="titulo_barra">
        <a href="#" onClick={(e)=>{e.preventDefault(); setRoute('home')}}><h1>Vida Pessoal</h1></a>
      </div>
      <div className="mini_bio">
        <p>Meu nome é Enzo Santoro, tenho 19 anos e atualmente curso o segundo semestre de Ciência da Computação no INSPER. Desde pequeno, sempre fui apaixonado por tecnologia, o que me motivou a seguir essa área. Além disso, tenho grande interesse por música — estudei bateria por vários anos — e acredito que essa vivência me ajudou a desenvolver ritmo, disciplina e trabalho em equipe, especialmente por ter participado de bandas e projetos colaborativos. Também gosto de desafios que envolvem lógica e resolução de problemas, o que complementa minha formação e amplia minha visão para diferentes tipos de experiências.</p>
        <p>Procuro constantemente me aprimorar como pessoa, estudante e profissional. Embora minha experiência formal de trabalho ainda seja limitada, participei como voluntário em eventos da minha igreja voltados para jovens e adolescentes, atuando em diferentes funções, como equipe de cozinha, organização de bagagens para retiros e limpeza. Essas experiências me ensinaram o valor da responsabilidade, comprometimento e colaboração, qualidades que levo comigo para qualquer ambiente de trabalho.</p>
      </div>
    </div>
  )

  const Contato = () => (
    <div>
      <div className="titulo_barra">
        <a href="#" onClick={(e)=>{e.preventDefault(); setRoute('home')}}><h1>Contato</h1></a>
      </div>
      <div className="GitHub">
        <img src={`imagens/GitHub.png`} alt="GitHub" className="github_icon" />
        <a href="https://github.com/EnzoS-5" target="_blank" rel="noreferrer" className="bot_f">GitHub</a>
      </div>
      <div className="email">
        <img src={`imagens/Gmail.jfif`} alt="Email" className="email_icon" />
        <a href="mailto:ez.santoro@gmail.com">ez.santoro@gmail.com</a>
      </div>
      <div className="linkedin">
        <img src={`imagens/LikedIN.png`} alt="LinkedIn" className="linkedin_icon" />
        <a href="https://www.linkedin.com/in/enzo-santoro-3623a4364" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
      <div className="facebook">
        <img src={`imagens/Facebook.png`} alt="Facebook" className="facebook_icon" />
        <a href="https://www.facebook.com/profile.php?id=100012822668776" target="_blank" rel="noreferrer" className="bot_f">Facebook</a>
      </div>
    </div>
  )

  return (
    <div>
      <Nav />
      <div className="site_wrapper">
        {route === 'home' && <Home />}
        {route === 'curriculo' && <Curriculo />}
        {route === 'projetos' && <Projetos />}
        {route === 'vida' && <Vida />}
        {route === 'contato' && <Contato />}
      </div>
    </div>
  )
}
