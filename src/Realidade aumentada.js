import "./RA.css";
import { Link } from 'react-router-dom';
import { FaCode } from "react-icons/fa";
import { FaHouseDamage } from "react-icons/fa";
function Realidadeaumentada() {

return (
<div className='container'>
      <div className='cebecalho'>
        <h1>Realidade Aumentada </h1>
        <div className='lista-cabecalho'>
          <Link to="/">
            <FaHouseDamage size={50} className='logo'/>
          </Link>
        </div>
      </div>x 
      <dic className='imagemm'>
        <img src="imagens/Ra2.jpg"></img>
        <p align='justify'>O que é a Realidade Aumentada?
Realidade Aumentada: o mundo real com outros olhos
P+D+I Ciência

A Realidade Aumentada (RA) é uma tecnologia que permite sobrepor elementos virtuais à nossa visão da realidade. Cada vez mais demandada, essa tecnologia se converterá em um negócio que vai movimentar, em 2020, cerca de 120 bilhões de dólares no mundo.

Aplicação da Realidade Aumentada na área da saúde.
Aplicação da Realidade Aumentada na área da saúde.
O termo foi criado em 1992 pelo cientista e pesquisador Thomas P. Caudell durante o desenvolvimento de um dos aviões mais famosos do mundo: o Boeing 747. Caudell observou que os operários responsáveis pela montagem da nova aeronave perdiam muito tempo interpretando as instruções e pensou: o que aconteceria se eles tivessem acesso a um monitor que os guiasse durante a instalação? A invenção não foi bem-sucedida, mas foi nesse momento que nasceu o conceito de Realidade Aumentada. </p>
      </dic>
      <br></br>
      <div className="alto">
        <img src="imagens/Ra1.jpg"></img>
        <p align='justify'>Foi em 1992, então, que surgiu o conceito de RA, e não, tal como muitos acreditam, no verão de 2016, quando fomos contagiados pela febre do Pokémon GO, um videogame que o jogador deve procurar e capturar diferentes personagens da saga japonesa. Em seu auge, o game atingiu a marca astronômica de 45 milhões de usuários diários ativos. O Pokémon GO popularizou a RA. Ele aproximou essa tecnologia do grande publico — de todos os públicos —, mas, naquela época, já eram muitas as empresas de diversos setores (saúde, educação, arquitetura, serviços, varejo, etc.) que começavam a utilizá-la com o objetivo de criar experiências de valor para seus clientes.</p>
      </div>
            <br></br> <br></br>
      <div className="video">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/8tlok1Vxaa0?si=AUm99ZVag310r79t" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>

    </div>
);
}

export default Realidadeaumentada;