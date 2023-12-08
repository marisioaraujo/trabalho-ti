import "./mate.css";
import { Link } from 'react-router-dom';
import { FaCode } from "react-icons/fa";
import { FaHouseDamage } from "react-icons/fa";
function Mate() {

return (
<div className='container'>
      <div className='cebecalho'>
        <h1>Trabalhos de Matematica</h1>
        <div className='lista-cabecalho'>
          <Link to="/">
            <FaHouseDamage size={50} className='logo'/>
          </Link>
        </div>
      </div>x 
      <div className="titulo">
        <h1>Terceiro Ano</h1>  
      </div>
          <br></br>
      <div className="print">
        <img src="imagens/Matematica.jpg"></img>
        <p align="justify" >De longe esse trabalho foi o melhor de matemática, fizemos todos os cálculos certinhos, a embalagem ficou linda  e cada parte do trabalho quando foi desenvolvida, acabou sendo de fácil entendimento para a pessoa que visse o “produto” se interessassem pela marca e pelo chocolate e suas medidas. Acredito que foi o melhor trabalho de matemática que não envolvia número, já feito por mim e me orgulho e dou todos os créditos a mim e meus amigos que ajudaram a desenvolver. </p>
      </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
      <div className="titulo1">
      <h1>Segundo Ano</h1>
      </div>
          <br></br>
          <br></br>
          <br></br>
      <div className="segundom">
        <img src="imagens/mate-2º.png"></img>
        <p align='justify'>O trabalho do segundo ano, que me ajudou na integrada da do terceiro, foi algo que me fez saber sobre investimentos e acabou servindo não só pro meu bolso mass pra minha menção D, no trabalho "integrado" do segundo bimestre do terceiro.  </p>
      </div>
          <br></br>
          <br></br>
          <br></br>
      <div className="titulo2">
        <h1>Primeiro Ano</h1>
      </div>
          <br></br>
          <br></br>
          <br></br>
          <div className="primeirom">
            <img src="imagens/MATE_1º.jpg"></img>
            <p align='justify'>Esse foi escolhido por ser algo que eu goste de fazer, essa é a função afim, é uma das funções que mais gosto de fazer, gosto muito dos trabalhos e atividades que envolve fazer algum tipo de conta. </p>
          </div>
    </div>
);
}

export default Mate;