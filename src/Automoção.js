import "./automação.css";
import { Link } from 'react-router-dom';
import { FaHouseDamage } from "react-icons/fa";
function Automoção() {

return (
<div className='container'>
      <div className='cebecalho'>
        <h1>Automação</h1>
        <div className='lista-cabecalho'>
          <Link to="/">
            <FaHouseDamage size={50} className='logo'/>
          </Link>
        </div>
      </div>x 
      <div className="imagem">
          <img src="imagens/Automoção.jpg"></img>
          <h1> <p align= "justify"> é um sistema automático pelo qual os mecanismos verificam seu próprio funcionamento, efetuando medições e introduzindo correções, sem a necessidade da interferência do homem. Em seu uso moderno, a automação pode ser definida como uma tecnologia que utiliza comandos programados para operar um dado processo, combinados com retroação de informação para determinar que os comandos sejam executados corretamenteEm seu uso moderno, a automação pode ser definida como uma tecnologia que utiliza comandos programados para operar um dado processo, combinados com retroação de informação para determinar que os comandos sejam executados corretamente, frequentemente utilizada em processos antes operados por seres humanos, é a aplicação de técnicas computadorizadas ou mecânicas para diminuir o uso de mão de obra em qualquer processo, especialmente o uso de robôs nas linhas de produção. A automação diminui os custos e aumenta a velocidade da produção. </p> </h1>
      </div>
      <div className="body">
          <h1> <p align= "center"> Automoção fixa </p> </h1>
      </div>
      <div className="body1">
            <img src="imagens/automacao-fixa.jpg"></img>         
            <h2> <p align="justify"> Este tipo de automação industrial é caracterizado pela rigidez da configuração do equipamento, ou seja, uma vez criada uma determinada configuração de controle, não é possível alterá-la posteriormente sem realizar um novo projeto. Apesar da relativa inflexibilidade, existe um bom ganho em termos de eficiência e taxa de produção, além da redução do custo por unidade produzida. Como exemplos de sistemas deste tipo, podemos citar as primeiras linhas de montagem de automóveis nos Estados Unidos. </p> </h2>
      </div>
      <div className="body3">
          <h1> <p align= "center"> Automoção flexível </p> </h1>
      </div>
      <div className="body4">
        <img src="imagens/automação-flex.jpg"></img>
        <h1> <p align="justify"> A automação flexível é uma extensão da automação programável e na realidade a sua definição exata ainda está em evolução. Este sistema de automação fornece o equipamento de controle automático que oferece uma grande flexibilidade para modificações no design do produto. Essas mudanças podem ser realizadas de forma ágil através de comandos  fornecidos via código pelos operadores. </p> </h1>
      </div>
    </div>
);
}

export default Automoção;