import "./natureza.css";
import { Link } from 'react-router-dom';
import { FaCode } from "react-icons/fa";
import { FaHouseDamage } from "react-icons/fa";
function Natureza() {

return (
<div className='container'>
      <div className='cebecalho'>
        <h1>Trabalhos De Ciências da Natureza</h1>
        <div className='lista-cabecalho'>
          <Link to="/">
            <FaHouseDamage size={50} className='logo'/>
          </Link>
        </div>
      </div>x 
      <div className="titulinho">
        <h1>Terceiro Ano</h1>
      </div>
            <br></br>
      <div className="aloha">
        <img src="imagens/natureza.png"></img>
        <p align="justify">Foi o trabalho que mais prestei atenção, pois foi uma forma de aprender de uma maneira diferente, foi algo novo para mim, debater em sala de aula sobre acontecimentos do filme “interestelar” e comentar sobre ser possível ou não alguns fatos. <br></br>  <br></br> O trabalho era simples, ver o filme e ver fatos ou teorias que podiam ser real ou não e explicar para a sala o do porque você acha aquilo possível ou não, foi divertido pois assisti o filme mais de uma vez e acabou sendo uma apresentação bastante legal.</p>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
      </div>
      <div className="titulinho1">
        <h1>Segundo Ano</h1>
      </div>
            <br></br>
      <div className="segundon">
        <img src="imagens/nature-2º.png"></img>
        <p align='justify'>Essa atividade é algo que foi legal de se fazer, pesquisamos sobre a intensidade sonora pelo mundo e quantos dB(barulho) cada objeto tem, depois dessa breve pesquisa saimos pelo campus do Senac e começamos a testar o dB dos lugares, se seria alto demais ou baixo. </p>
      </div>
            <br></br>
            <br></br>
      <div className="titulinho2"><h1>Primeiro Ano</h1></div>
            <br></br>
      <div className="primeiron">
        <img src="imagens/nature-1º.png"></img>
        <p align='justify'>Essa atividade foi algo mais relaxante uma cruzadinha de fisica, onde analizavamos conteudo passsado em casa e preenchiamos de acordo com as dicas que era dada, foi uma das atividades que maiis tive facilidade.</p>
      </div>
    </div>
);
}

export default Natureza;