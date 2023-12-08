import "./ti.css";
import { Link } from 'react-router-dom';
import { FaHouseDamage } from "react-icons/fa";
function TI() {

return (
<div className='container'>
      <div className='cebecalho'>
        <h1>Trabalhos De TI</h1>
        <div className='lista-cabecalho'>
          <Link to="/">
            <FaHouseDamage size={50} className='logo'/>
          </Link>
        </div>
      </div>x 
      <div className="titulu">
        <h1>Terceiro Ano</h1>
      </div>
            <br></br>
      <div className="imagem">
        <img src="imagens/Ti1.jpg"></img>
        <img src="imagens/Ti2.jpg" className="img-2"></img>
      </div>
      <br></br>
      <br></br>
      <div className="tecnico"> 
         <p align="justify"> Esse trabalho foi o que mais me deixou feliz fazendo de todos, já era algo que gostava muito de fazer e ja tinha feito algo semelhante, foi o trabalho que mais me deixou feliz e cada página foi feita com alegria, ainda mais que estou aprendendo a usar o react, foi algo novo pra mim, mas pelo que parece foi bem legal trabalhar com Java Script. </p> 
            <br></br>
            <br></br>
            <br></br>
            <br></br>
      <div className="titulu2">
        <h1>Segundo Ano</h1>
      </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
      </div>
      <div className="tecnic">
        <img src="imagens/TI-2º.png"></img>
        <p align='justify'>Esse trabalho de ti, foi o do segundo ano sobre roteamento e foi algo bastante complexo póis teria que sempre verificar e ver sse não havia nenhum erro na numeração e casso houvesse diminuaria a menção e foi algo que tive que prestar bastante atenção</p>
      </div>
          <br></br>
            <br></br>
            <br></br>
            <br></br>
      <div className="titulu2">
        <h1>Primeiro Ano</h1>
      </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
      <div className="primeiro">
        <img src="imagens/TI-1º.png"></img>
        <p align='justify'>Esse trabalho foi o do primeiro ano, foi bacana fazer e trouxe uma expêriencia basstaante legal e divertida, foi engraçado montar um pc virtualmente e foi um doss melhores momentos que passei fazendo atividade  </p>
      </div>
    </div>
);
}

export default TI;