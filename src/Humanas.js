import "./humanas.css";
import { Link } from 'react-router-dom';
import { FaCode } from "react-icons/fa";
import { FaHouseDamage } from "react-icons/fa";
function Humanas() {

return (
<div className='container'>
      <div className='cebecalho'>
        <h1>Trabalhos De Ciência Humanas</h1>
        <div className='lista-cabecalho'>
          <Link to="/">
            <FaHouseDamage size={50} className='logo'/>
          </Link>
        </div>
      </div>x 
      <div className="legalzinho">
        <h1>Terceiro Ano</h1>
      </div>
            <br></br>
            <br></br>
      <div className="legal">
        <img src="imagens/humana.jpg"></img>
        <p align="justify">Acredito que como não sou de humanas, esse trabalho foi o melhor de humanas, onde buscava ver o que era preciso para  ser uma potência mundial e ver como cada país tem sua política diferente dos outros, assim ficava mais fácil de saber como um país poderia ser uma potência mundial.</p>
      </div>
            <br></br>
            <br></br>
      <div className="tiitulo">
        <h1>Segundo Ano</h1>
      </div>
            <br></br>
            <br></br>
            <br></br>
      <div className="segundoh">
        <img src="imagens/humanas-2º.png"></img>
        <p align='justify'>Esse trabalhofoi uma releitura de uma dass obras dada oferecida na atividade, eu e meu grupo fizemos essa releitura, foi algo bom e há um texto explicando.</p>
      </div>
            <br></br>
            <br></br>
            <br></br>
      <div className="tiitulo1">
        <h1>Primeiro Ano</h1>
      </div>
            <br></br>
            <br></br>
            <br></br>
      <div className="primeiroh">
        <img src="imagens/humanas-1º.png"></img>
        <p align='justify'>Foi o primeiro trabalho feito do 1º ano, foi algo novo para mim e acabou ficando muito marcado e lembro que participei bastante da aula e acabei aprendendo muito mesmo em aula remota.</p>
      </div>
    </div>
);
}

export default Humanas;