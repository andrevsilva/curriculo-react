import html from './logos/html5.png';
import css from './logos/css.png';
import js from './logos/javascript.png';
import bootstrap from './logos/bootstrap.png';
import sass from './logos/sass.png';
import jquery from './logos/jQuery.png';
import reactimg from './logos/react.png';
import php from './logos/php.png';
import codeigniter from './logos/codeigniter.png';
import vuejs from './logos/vuejs.png';
import mysql from './logos/mysql.png';

import htmlgif from './gifs/html.gif'
import cssgif from './gifs/css.gif'
import jsgif from './gifs/js.gif'
import bootstrapgif from './gifs/bootstrap.gif'
import reactgif from './gifs/react.gif'
import vuegif from './gifs/vue.gif'
import phpgif from './gifs/php.gif'

import { useState } from 'react';
import { Modal , ModalBody , ModalFooter , Button, ModalHeader } from 'reactstrap';


const ModalLink = () => {
    const [modal, setModal] = useState(false);
    const modalHtml = () => setModal(!modal);

    return (
        <div>
            <Button onClick={modalHtml}><img src={html} alt="HTML"/></Button>
            <Modal isOpen={modal} toggle={modalHtml}>
                <ModalHeader><img src={htmlgif} alt="HTML"/></ModalHeader>
                <ModalBody>
                    Foi o meu primeiro contato com o mundo web. Sempre utilizei de maneira constante em todos os projetos.
                    Desde o inicio da minha carreira até os dias atuais, HTML fez e estará fazendo parte de todo meu desenvolvimento como Front-end, inserindo o conteúdo e estabelecendo 
                    a estrutura básica de um website, e-mail ou qualquer aplicação web.
                </ModalBody>
                <ModalFooter>Tempo de experiencia - 4 anos</ModalFooter>
            </Modal>
        </div>

        
    );
};
const ModalLinkCss = () => {
    const [modal, setModal] = useState(false);
    const modalCss = () => setModal(!modal);

    return (
        <div>
            <Button onClick={modalCss}><img src={css} alt="CSS"/></Button>
            <Modal isOpen={modal} toggle={modalCss}>
                <ModalHeader><img src={cssgif} alt="CSS"/></ModalHeader>
                <ModalBody>CSS assim como HTML foi meu primeiro contato com o mundo web.
                É folha de estilo onde possuo vasto conhecimento e utilizo para definir a aparência em páginas web, dar "cor" ao projeto, trabalhar seu responsivo com medias queries ou flex container para caber em todos tipos de tela e criar animações leves e fluidas.
                </ModalBody>
                <ModalFooter>Tempo de experiencia - 4 anos</ModalFooter>
            </Modal>
        </div>

        
    );
};
const ModalLinkJs = () => {
    const [modal, setModal] = useState(false);
    const modaljS = () => setModal(!modal);

    return (
        <div>
            <Button onClick={modaljS}><img src={js} alt="Javascript"/></Button>
            <Modal isOpen={modal} toggle={modaljS}>
                <ModalHeader><img src={jsgif} alt="Javascript"/></ModalHeader>
                <ModalBody>Javascript foi minha primeira linguagem de programação, foi onde eu vi muita magica acontecer.
                 Utilizo Javascript em todas os projetos que eu participo, é uma linguagem que vem forte com suas bibliotecas que vem crescendo todo dia cada vez mais e 
                 inclusive enquanto você lia este texto, mas uma biblioteca Javascript ta sendo criada.   
                </ModalBody>
                <ModalFooter>Tempo de experiencia - 4 anos</ModalFooter>
            </Modal>
        </div>

        
    );
};
const ModalLinkBootstratp = () => {
    const [modal, setModal] = useState(false);
    const modalBootstratp = () => setModal(!modal);

    return (
        <div>
            <Button onClick={modalBootstratp}><img src={bootstrap} alt="Bootstrap"/></Button>
            <Modal isOpen={modal} toggle={modalBootstratp}>
                <ModalHeader><img src={bootstrapgif} alt="Bootstrap"/></ModalHeader>
                <ModalBody>Bootstrap é uma framework onde eu utilizei bastante na parte responsiva dos projetos que eu participei, onde o foco era uma entrega em curto prazo.
                tenho uma plena dominancia em sua biblioteca de codigos, onde eu utilizei em criação de modal (inclusive este modal aqui onde você está, é uma junção interessante entre React+Bootstrap), 
                no responsivo, em criação de grids, criação de forms, manutenção de layouts, validações de forms e qualquer outra funcionalidade que venha dele.
                </ModalBody>
                <ModalFooter>Tempo de experiencia - 4 anos</ModalFooter>
            </Modal>
        </div>

        
    );
};
const ModalLinkSass = () => {
    const [modal, setModal] = useState(false);
    const modalSass = () => setModal(!modal);

    return (
        <div>
            <Button onClick={modalSass}><img src={sass} alt="Sass"/></Button>
            <Modal isOpen={modal} toggle={modalSass}>
                <ModalHeader><img src={sass} alt="Sass"/></ModalHeader>
                <ModalBody>Depois de fazer parte de diversos projetos, eu senti a necessidade de otimizar minha folha de estilo CSS, então procurei estudar mais sobre seus pré-processadores e foi ai que eu conheci o Sass.
                    Utilizei o Sass em projetos extensos, procurando ter ganho em produtividade, organização e rapidez em manutenção de códigos.
                    Apesar de ter participado de projetos onde o Sass não foi aplicado, sempre procurei trazer esta solução para equipe em reuniões de desenvolvimento dos projetos, sempre
                     tendo em mente a otimização do nosso tempo.
                </ModalBody>
                <ModalFooter>Tempo de experiencia - 2 anos</ModalFooter>
            </Modal>
        </div>

        
    );
};
const ModalLinkjQuery = () => {
    const [modal, setModal] = useState(false);
    const modaljQuery = () => setModal(!modal);

    return (
        <div>
            <Button onClick={modaljQuery}><img src={jquery} alt="jQuery"/></Button>
            <Modal isOpen={modal} toggle={modaljQuery}>
                <ModalHeader><img src={jquery} alt="jQuery"/></ModalHeader>
                <ModalBody>É uma grande biblioteca javascript onde eu utilizo bastante em animações e micro interações.
                    Com jQuery você sente um enorme poder principalmente pelo fato dele simplificar seus codigos em Javascript, trazendo um codigo mais limpo e mais fluido.
                    Além de toda otimização em codigos Javascript, também encontramos uma vasta comunidade com diversas ferramentas fantasticas. 
                </ModalBody>
                <ModalFooter>Tempo de experiencia - 3 anos</ModalFooter>
            </Modal>
        </div>

        
    );
};
const ModalLinkReact = () => {
    const [modal, setModal] = useState(false);
    const modalReact = () => setModal(!modal);

    return (
        <div>
            <Button onClick={modalReact}><img src={reactimg} alt="React"/></Button>
            <Modal isOpen={modal} toggle={modalReact}>
                <ModalHeader><img src={reactgif} alt="React"/></ModalHeader>
                <ModalBody>
                    React esta sendo minha paixão, comecei a conhecer esta biblioteca atraves de um projeto mobile que fiz parte e venho me mantendo sempre atualizado do que esta maravilha faz.
                    Como eu falei lá na parte do Bootstrap, todo este site foi feito em React, onde utilizei as ferramentas do React como: react dom, react router, react social icon, reactstrap e vercel para hospedagem deste site.
                    Sei que React tem muito mais a oferecer, me sinto como se fosse uma criança descobrindo a vida, estou aprendendo bastante com react e já sou fã de carteirinha.
                </ModalBody>
                <ModalFooter>Tempo de experiencia - +1 ano</ModalFooter>
            </Modal>
        </div>

        
    );
};
const ModalLinkVue = () => {
    const [modal, setModal] = useState(false);
    const modalVue = () => setModal(!modal);

    return (
        <div>
            <Button onClick={modalVue}><img src={vuejs} alt="VueJS"/></Button>
            <Modal isOpen={modal} toggle={modalVue}>
                <ModalHeader><img src={vuegif} alt="VueJS"/></ModalHeader>
                <ModalBody>Assim com o React, o Vue eu tive contato após um projeto de paineis multiusuário.
                    A utilização do Vue trouxe a facilidade na manutenção dos codigos por conta da criação de componentes com a sintaxe HTML, CSS e Javascript em um único arquivo .vue, e isso trouxe muita facilidade.
                    Após isso não tive mais contato com o Vue, mas ele continua junto com react na minha lista de estudos e aprendizados.
                </ModalBody>
                <ModalFooter>Tempo de experiencia - +1 ano</ModalFooter>
            </Modal>
        </div>

        
    );
};
const ModalLinkPhp = () => {
    const [modal, setModal] = useState(false);
    const modalPhp = () => setModal(!modal);

    return (
        <div>
            <Button onClick={modalPhp}><img src={php} alt="PHP"/></Button>
            <Modal isOpen={modal} toggle={modalPhp}>
                <ModalHeader><img src={phpgif} alt="PHP"/></ModalHeader>
                <ModalBody>Participei de um projeto completo feito em PHP do seu inicio até os dias atuais, relizando requisições ao banco e integrações do Front-end com o Back-end.
                    Com o PHP eu tive uma excelente comunicação com meu Back-end e aprendi melhor a entender melhor a parte de trás de todas as telas que criavamos, fazendo assim com que meu trabalho como front-end sempre fosse 
                    otimizado para os back-ends facilitando assim toda equipe e melhorando nossa sincronização.
                </ModalBody>
                <ModalFooter>Tempo de experiencia - +2 anos</ModalFooter>
            </Modal>
        </div>

        
    );
};
const ModalLinkCode = () => {
    const [modal, setModal] = useState(false);
    const modalCode = () => setModal(!modal);

    return (
        <div>
            <Button onClick={modalCode}><img src={codeigniter} alt="Codeigniter"/></Button>
            <Modal isOpen={modal} toggle={modalCode}>
                <ModalHeader><img src={codeigniter} alt="Codeigniter"/></ModalHeader>
                <ModalBody>Junto com o PHP eu aprendi sobre esta framework o codeigniter.
                    No planejamento de meu ultimo grande projeto, decidimos logo após o PHP, implementar o codeigniter pela sua facilidade em sua curva de aprendizado.
                    O contato com o CodeIgniter foi igual ao meu contato com outras frameworks Javascript, me trouxe facilidade em aprender PHP e aumentando minha sincronização com a equipe de back-end, trazendo a facilidade de conseguir adiantar parte do projeto sem
                     interromper o trabalhos do back-ends.
                </ModalBody>
                <ModalFooter>Tempo de experiencia - +2 anos</ModalFooter>
            </Modal>
        </div>

        
    );
};
const ModalLinkMySql = () => {
    const [modal, setModal] = useState(false);
    const modalMySql = () => setModal(!modal);

    return (
        <div>
            <Button onClick={modalMySql}><img src={mysql} alt="MySQL"/></Button>
            <Modal isOpen={modal} toggle={modalMySql}>
                <ModalHeader><img src={mysql} alt="MySQL"/></ModalHeader>
                <ModalBody>
                    O MySQL foi o banco mais usados em todos os projetos em que participei.
                    Além do fato de ser um banco relacional, o MySQL traz muita facilidade em sua manutenção, trazendo também facilidade de ambas as partes mexerem no banco, seja Front-end ou Back-end, trazendo uma curva de aprendizado muito boa e simples.
                </ModalBody>
                <ModalFooter>Tempo de experiencia - +4 anos</ModalFooter>
            </Modal>
        </div>

        
    );
};

export   { ModalLink , ModalLinkCss, ModalLinkBootstratp , ModalLinkJs , ModalLinkSass , ModalLinkReact , ModalLinkjQuery , ModalLinkVue , ModalLinkPhp , ModalLinkCode , ModalLinkMySql };

