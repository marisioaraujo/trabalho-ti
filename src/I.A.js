import "./IA.css";
import { Link } from 'react-router-dom';
import { FaCode } from "react-icons/fa";
import { FaHouseDamage } from "react-icons/fa";
function IA() {

return (
<div className='container'>
      <div className='cebecalho'>
        <h1>Inteligencia Artificial</h1>
        <div className='lista-cabecalho'>
          <Link to="/">
            <FaHouseDamage size={50} className='logo'/>
          </Link>
        </div>
      </div>x 
      <div className="forte">
        <img src="imagens/IA.jpg"></img>
        <p align='justify'>A inteligência artificial é um campo da ciência da computação que se dedica ao estudo e ao desenvolvimento de máquinas e programas computacionais capazes de reproduzir o comportamento humano na tomada de decisões e na realização de tarefas, desde as mais simples até as mais complexas.  É comumente referida pela sigla IA ou AI (em inglês, artificial intelligence). "Com maior desenvolvimento a partir da década de 1950, a inteligência artificial já faz parte da vida cotidiana das pessoas por meio dos assistentes de voz, dos mecanismos de pesquisa, dos carros autônomos e das redes sociais. Apesar de trazerem inúmeros benefícios e avanços importantes em diversas áreas, muito se debate a respeito dos limites éticos da inteligência artificial e do papel que elas desempenham na nossa sociedade atual.</p>
      </div>
      <br></br> <br></br>
      <div className="fraco">
        <img src="imagens/IA1.jpg"></img>
        <p align="justify">O funcionamento da inteligência artificial, de maneira simplificada, acontece por meio da coleta e da combinação de um grande volume dados seguido da identificação de determinados padrões nesse conjunto de informações. Com esse processo, que geralmente se dá mediante a utilização de algoritmos pré-programados, o software consegue tomar decisões e realizar tarefas de maneira autônoma.</p>
      </div>
      <br></br> <br></br>
      <div className="video1">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/IvKPbnxvbS4?si=MlIZmqv1aLKlrrqV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </div>
);
}

export default IA;