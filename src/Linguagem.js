import "./linguagem.css";
import { Link } from 'react-router-dom';
import { FaCode } from "react-icons/fa";
import { FaHouseDamage } from "react-icons/fa";

function Linguagem() {

return (
<div className='container'>
      <div className='cebecalho'>
        <h1>Trabalhos De Linguagens</h1>
        <div className='lista-cabecalho'>
          <Link to="/">
            <FaHouseDamage size={50} className='logo'/>
          </Link>
        </div>
      </div>x 
      <div className="titolo">
        <h1>Terceito Ano</h1>
      </div>
            <br></br>
            <br></br>
      <div className="printer">
        <img src="imagens/linguagem.jpg"></img>
      <p align="justify">Esse foi o de linguagens, foi algo bom de se fazer e era algo relacionado a T.I, onde tivemos que fazer uma empresa de serviços técnicos em inglês, foi uma tarefa bastante fácil, já que a área tecnológica tem bastante palavras em inglês, foi algo bem divertido de se fazer, me ajudou no meu desenvolvimento técnico e de aprendizado sobre termos usados na área que a empresa atuaria.</p>
      </div>
            <br></br>
            <br></br>
      <div className="titolo1">
        <h1>Segundo Ano</h1>
      </div>
            <br></br>
            <br></br>
            <br></br>
      
      <div className="segundol">
        <img src="imagens/lingua-2º.png"></img>
        <p align='justify'>Alto explicativo, melhor ttrabalho do segundo ano, fizeemos uma fake news e foi bastante engraçado as ideias e acabou sendo uma fake news de um esstudante trabalhar na nasa.</p>
      </div>
            <br></br>
            <br></br>
            <br></br>
      <div className="titolo2">
        <h1>Primeiro Ano</h1>
      </div>
            <br></br>
            <br></br>
      <div className="primeirol">
        <img src="imagens/Lingua-1º.png"></img>
        <p align='justify'>Esse trabalho foi feito em casa e é uma tecnica chamada stencil, foi alfo divertido de se fazer em aula remota e com pouco tempo foi tornando formas geometricas e tentei mandar um moicano pra ficar mais legal.</p>
      </div>
    </div>
);
}

export default Linguagem;