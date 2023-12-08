import "./perfil.css";
import { Link } from 'react-router-dom';
import { FaHouseDamage } from "react-icons/fa";
function Perfil() {

return (
<div className='container'>
      <div className='cebecalho'>
        <h1>Meu Perfil</h1>
        <div className='lista-cabecalho'>
          <Link to="/">
            <FaHouseDamage size={50} className='logo'/>
          </Link>
        </div>
      </div>x 
    <div className="foto"> 
    <img src="imagens/minha-foto.jpg"></img>
          <h1>Marisio Pereira De Araujo <br></br> <br></br>Ensino Médio Tecnico no Senac <br>
    </br> <br></br> Idade: 19 anos<br></br> <br></br> Gosta: gatos, animação e programação <br></br> <br></br> Nacionalidade Italiana <br></br> <br></br> Preparado para qualquer coisa </h1>
    </div>
    <br></br>
        <div className="soft">  
          <h1> <p> Soft Skills </p> </h1> 
          <br></br>
          <h2>Princípios éticos;
              Confiança;
              Atitude positiva;
              Organização e gestão do tempo;
              Capacidade de trabalhar sob pressão;
              Flexibilidade;
              Segurança.</h2>
    </div>
    <br></br>
        <div className="ego">
        <h1>  Hard Skills  </h1> 
        <h2>Operação de máquinas e sistemas;
              Domínio de Javascript;
              Domínio de CSS.</h2> 
        </div>
    </div>
);
}

export default Perfil;