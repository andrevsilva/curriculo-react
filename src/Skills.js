import './Style.css';

import React,{ useState } from "react";
import { BrowserRouter as Router , Route , Link } from "react-router-dom";

import Typing from 'react-typing-animation';

import { SocialIcon } from 'react-social-icons';

import html from './logos/html5.png'
import css from './logos/css.png'
import js from './logos/javascript.png'
import bootstrap from './logos/bootstrap.png'
import sass from './logos/sass.png'
import jquery from './logos/jQuery.png'
import react from './logos/react.png'
import php from './logos/php.png'
import codeigniter from './logos/codeigniter.png'
import vuejs from './logos/vuejs.png'
import mysql from './logos/mysql.png'
import slack from './logos/slack.jpg'
import jira from './logos/jira.png'
import trello from './logos/trello.jpg'
import gan from './logos/gan.png'
import hotjar from './logos/hotjar.jpg'


import { ModalLink , ModalLinkBootstratp, ModalLinkCode, ModalLinkCss , ModalLinkjQuery, ModalLinkJs, ModalLinkMySql, ModalLinkPhp, ModalLinkReact, ModalLinkSass, ModalLinkVue} from './Modal';

import { FaHome , FaFlask } from "react-icons/fa";



export const Skills = () =>(

    <div>
        <div className="header">
            <ul className="menu">
                <li><Link className="resetar" to=""><FaHome /> Home</Link></li>
                {/* <li><Link id="contrucao" className="resetar" to="minhaHistoria">Minha Historia</Link></li> */}
                <li><Link className="resetar" to="skills"><FaFlask /> Skills</Link></li>
            </ul>
        </div>

        <div class="redesSociais">
            <SocialIcon url="https://www.linkedin.com/in/andré-silva-5b054a15b/" fgColor="#FFF" />
            <SocialIcon url="https://www.facebook.com/profile.php?id=100010185733199" fgColor="#FFF" />
            <SocialIcon url="https://github.com" fgColor="#FFF" />
            <SocialIcon url="https://api.whatsapp.com/send?phone=5521982501010" fgColor="" />
        </div>

        <div className="title">
            <h1>Minhas Habilidades</h1>
            <div className="efeitoMq">
                <Typing>
                    <span>Conheça as minhas skills como Desenvolvedor</span>
                </Typing>
            </div>
        </div>

        <h2 className="apresSkills">Ao longo destes 4 anos de experiencias, aprendi muita coisa, fiz parte de projetos e procuro sempre estudar.
            Clique na linguagem e descubra mais
        </h2>

        <div className="skills">
            <div className="logos-skills">
                <ModalLink><img src={html} /></ModalLink>
                <ModalLinkCss><img src={css} /></ModalLinkCss>
                <ModalLinkJs><img src={js} /></ModalLinkJs>
            </div>

            <div className="logos-skills">
                <ModalLinkBootstratp><img src={bootstrap} /></ModalLinkBootstratp>
                <ModalLinkSass><img src={sass} /></ModalLinkSass>
            </div>

            <div className="logos-skills">
                <ModalLinkjQuery><img src={jquery} /></ModalLinkjQuery>
                <ModalLinkReact><img src={react} /></ModalLinkReact>
                <ModalLinkVue><img src={vuejs} /></ModalLinkVue>
            </div>

            <div className="logos-skills">
                <ModalLinkPhp><img src={php} /></ModalLinkPhp>
                <ModalLinkCode><img src={codeigniter} /></ModalLinkCode>
                <ModalLinkMySql><img src={mysql} /></ModalLinkMySql>
            </div>
        </div>

        <div className="maisskills">
            <h2>Metodologias Ageis:</h2>
            <span>Possuo experiencia de 2 anos com metodologias ageis Scrum e Kanban
                com o auxlio das seguintes plantaformas;
                <div className="ferramentasageis"><img src={slack} /> <img src={trello} /> <img src={jira} /> </div>
            </span>
            <h2>Outras ferramentas:</h2>
            <span>
                Algumas ferramentas que eu já usei para acompanhar o comportamento do usuarios e como auxilio em tomadas de decisões para proximas spints.
                <div className="ferramentasageis"><img src={gan} /> <img src={hotjar} /></div>
            </span>
        </div>
    </div>
    
)






