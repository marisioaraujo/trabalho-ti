import './App.css';
import { Link } from 'react-router-dom';
import { FaCode } from "react-icons/fa";
import { FaCalculator } from "react-icons/fa";
import { FaSpellCheck } from "react-icons/fa";
import { FaBook } from "react-icons/fa6";
import { FaFeatherPointed } from "react-icons/fa6";

import { FaAutoprefixer } from "react-icons/fa6";
import { BiGhost } from "react-icons/bi";
import { TbAugmentedReality } from "react-icons/tb";
import { GiArtificialIntelligence } from "react-icons/gi";
import { FaDharmachakra } from "react-icons/fa";
import { GiPlagueDoctorProfile } from "react-icons/gi";



function App() {
  return (
    <div className='container'>
      <div className='cebecalho'>
        
        <div className='lista-cabecalho'>
            <tooltip title='TI'>
              <Link to="/ti">
                <FaCode size={50} className='logo'/>
              </Link>
            </tooltip>
            <tooltip title='Matematica'>
              <Link to="/Mate">
                <FaCalculator size={50} className='logo'/>
              </Link>
            </tooltip>
            <tooltip title='Linguagem'>
              <Link to="/Linguagem">
                <FaSpellCheck size={50} className='logo'/>
              </Link>
            </tooltip>
            <tooltip title='Humanas'>
              <Link to="/Humanas">
                < FaBook size={50} className='logo'/>
              </Link>
            </tooltip>
            <tooltip title='Natureza'>
              <Link to="/Natureza">
                <FaFeatherPointed size={50} className='logo'/>
              </Link>
            </tooltip>
            <tooltip title='Automação'>  
              <Link to="/Automoção">
                <FaAutoprefixer size={50} className='logo'/>
              </Link>
            </tooltip>
            <tooltip title='MetaVerso'>
              <Link to="/MetaVerso">
                <BiGhost size={50} className='logo'/>
              </Link>
            </tooltip>
            <tooltip title='Realidade Aumentada'>
              <Link to="/Realidadeaumentada">
                <TbAugmentedReality size={50} className='logo'/>
              </Link>
            </tooltip>
            <tooltip title='IA'>
              <Link to="/IA">
                <GiArtificialIntelligence size={50} className='logo'/>
              </Link>
            </tooltip>
            <tooltip title='Machine Learning'>
              <Link to="/Machine">
                <FaDharmachakra size={50} className='logo'/>
              </Link>
            </tooltip>
            <tooltip title='Perfil'>
              <Link to="/Perfil">
                <GiPlagueDoctorProfile size={50} className='logo'/>
              </Link>
            </tooltip>
        </div>
      </div>x 
      <div className='imagem'> 
      <img src= 'imagens/Brabo.png'></img>
      <img src= 'imagens/Alter.jpg'></img>
      </div>
    </div>
  );
}

export default App;


