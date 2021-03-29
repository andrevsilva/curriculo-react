import './Style.css';
import './_Write.js';
//import './Home.js'

import React from "react";
import Link  from "react-router-dom";
import Typing from 'react-typing-animation';
import logo from './78e03222bd68257f931e619b13496e7c.gif';
import foto from './IMG_5291-2-Edit.jpg';
import espaco from './espaco.png';
import urb9 from './72280337_616072442130545_6000381595289124864_n.png'

import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';
ReactDOM.render(<SocialIcon url="https://twitter.com/jaketrent" />, document.body);

function App() {
  return (
    <div>
      <div className="header">
        <ul className="menu">
          <li><Link to="Home">Home</Link></li>
          <li><Link to="minhaHistoria">Minha Historia</Link></li>
          <li><Link to="skills">Skills</Link></li>
        </ul>
      </div>  

      <div class="redesSociais">
        <SocialIcon url="https://linkedin.com/in/jaketrent" />

      </div>

      <div className="title">
        <h1>André V. Silva</h1>
        <Typing>
          <span>Desenvolvedor Web Front-end</span>
        </Typing>
      </div>
      <div className="esconder">
        <img className="megaman" src={logo} alt="megaman" />
      </div>

      <div className="resumo">
        <div><img className="foto" src={foto} alt="eu..." /></div>
        <div className="">
          <p>Minha paixão por tecnologia começou com 11 anos, aos 13 anos tive contato com programação, onde eu via tudo como lazer e hobby, até que os anos foram se passando e decidir levar além o meu hobby de programação e transformar em profissão.
            Escolhi o mundo Web e hoje sigo como desenvolvedor web Front-End desde meados de 2017, onde fui realizando freelancers e participando de projetos adquirindo experiências, mas sempre me aperfeiçoando com cursos para poder aprimorar meus conhecimentos.
            <br /><br />
            Minhas habilidades consistem em: HTML, CSS, Bootstrap, Sass, Javascript, jQuery, VueJS, ReactJS, PHP, CodeIgniter, API/Rest, Banco de dados MySQL e React Native.
            Possuo também vivencia com Metodologias Ageis como Scrum e Kanban, utilizando plantaformas como Slack, Jira, Trello e HotJar.
            Tenho experiência com Home Office onde meu ultimo trabalho foi 100% remoto, possuo equipamentos e uma estação de trabalho sempre pronta para os padrões de tecnologias de hoje.
            <br /><br />
            Quanto mais tempo se passa e mais projetos eu participo, eu vou tendo a certeza que fiz uma excelente escolha de transformar meu hobby de infância em profissão, sou apaixonado pela área e a cada dia aprendo algo novo.
          </p>
        </div>
      </div>

      <div className="experiencias">
        <div className="linha"></div>
        <h2>Experiencias</h2>
        <div className="linha"></div>
        <div className="espacoSistemas">
          <img className="espaco" src={espaco}/>
            <p><span>Junho de 2018 à Maior de 2019 </span><br />
            Fui responsável pela migração do sistema web da empresa feito em Delphi para a plataforma Web e também fui responsável por toda criação e manutenção do site na época.
            Utilizei constantemente HTML, CSS e Javascript Vanilla e também em alguns momentos do projeto utilizei jQuery para criação de micro interações e bootstrap ou flexbox para ajudar no responsivo do sistema.
            Trouxe para a equipe o que é versionamento de código e fiz uma apresentação sobre o Git e como usá-lo e então a partir desde momento a empresa começou a utilizar versionamento Git.</p>
        </div>
        <div className="linha"></div>
        <div className="urb9">
          <img className="logoUrb9" src={urb9} />
          <p><span>Maio de 2019 à Março de 2021 </span><br />
          Trabalhei em todo desenvolvimento desde o seu início até seu estado atual de uma plataforma digital web para vendas, visitas, compras, negociação e gestão de imóveis, que atende comprador, vendedor, corretor, backoffice e gestor, utilizando metodologias ágeis como Scrum e Kanban. Além de utilizações de programas como Jira, Slack e Trello.
          Na plataforma foi criado um sistema para gerenciamento de visitas, cadastro, negociações, chats, documentação e edição de imóveis, além de um desenvolvimento de um painel multiusuário, disparos de e-mail de acordo com a situação e ação de cada usuário no sistema.
          Para a criação da plataforma foi usado a linguagem PHP utilizando como framework o codeigniter e de base para o front-end e back-end. As principais atividades desempenhadas no Front-End foram:
          
          <ul>
            <li> Criação de paginas usando como base layouts criados no XD</li>
            <li> Utilização de Bootstrap ou Flexbox para cuidar do responsivo </li>
            <li> Criação de e-mails com HTML e CSS</li>
            <li> Consumo de API utilizando PHP com Javascript</li>
            <li> Micro interações usando jQuery e Vue.js</li>
            <li> Desenvolvimento de um aplicativo mobile junto com a equipe de Back-end utilizando React Native</li>
            <li> Migração de alguns módulos do sistema para React.JS</li>
          </ul>
          </p>
        </div>
      </div>
    </div>

  );
}

export default App;
