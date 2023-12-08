import "./Mal.css";
import { Link } from 'react-router-dom';
import { FaCode } from "react-icons/fa";
import { FaHouseDamage } from "react-icons/fa";
function Machine() {

return (
<div className='container'>
      <div className='cebecalho'>
        <h1>Machine learning</h1>
        <div className='lista-cabecalho'>
          <Link to="/">
            <FaHouseDamage size={50} className='logo'/>
          </Link>
        </div>
      </div>x 
      <div className="alterego">
        <img src="imagens/machine.jpg"></img>
        <p align='justify'>Machine learning é o uso de algoritmos para organizar dados, reconhecer padrões e fazer com que computadores aprendam com esses modelos para gerar insights inteligentes sem a necessidade de pré-programação. De uma forma mais geral, podemos dizer que machine learning é a área da ciência da computação que permite tornar a inteligência artificial real. O conceito de IA surgiu em meados de 1950, mas naquele contexto, ainda faltavam as tecnologias capazes de colocar a teoria em prática. Conforme os anos seguiram e a evolução tecnológica alcançou altos patamares, os computadores puderam encontrar respostas sem que fossem especificamente programados para procurá-las.<br></br> Os algoritmos de machine learning aprendem a partir dos dados inseridos em si. Assim, as máquinas são treinadas para aprender a executar diferentes tarefas de forma autônoma. Logo, ao serem expostas a novos dados, elas se adaptam a partir dos cálculos anteriores e os padrões se moldam para oferecer respostas confiáveis. </p>
      </div>
      <br></br> <br></br>
      <div className="dado">
        <img src="imagens/machine1.jpg"></img>
        <p align='justify'>Os algoritmos de machine learning aprendem a partir dos dados inseridos em si. Assim, as máquinas são treinadas para aprender a executar diferentes tarefas de forma autônoma. Logo, ao serem expostas a novos dados, elas se adaptam a partir dos cálculos anteriores e os padrões se moldam para oferecer respostas confiáveis. </p>
      </div>
       <br></br> <br></br>
      <div className="video2">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/Ia2s2yzpR8M?si=j8TSvJwTQGl-yeFD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </div>
);
}

export default Machine;