import "./meta.css";
import { Link } from 'react-router-dom';
import { FaCode } from "react-icons/fa";
import { FaHouseDamage } from "react-icons/fa";
function MetaVerso() {

return (
<div className='container'>
      <div className='cebecalho'>
        <h1>MetaVerso</h1>
        <div className='lista-cabecalho'>
          <Link to="/">
            <FaHouseDamage size={50} className='logo'/>
          </Link>
        </div>
      </div>x 
      <div className="imagemmm">
        <img src="imagens/meta1.jpg"></img>
        <p align='justify'>Metaverso é uma espécie de nova camada da realidade que integra os mundos real e virtual. Na prática, é um ambiente virtual imersivo construído por meio de diversas tecnologias, como Realidade Virtual, Realidade Aumentada e hologramas.<br></br> Alguns projetos tentaram criar algo semelhante a um metaverso. Um dos principais exemplos é o jogo Second Life, lançado em 2003 pela empresa Liden Lab, baseada nos Estados Unidos. O game é um ambiente virtual 3D que simula a vida real. Ao entrar, os usuários podem criar avatares e socializar uns com os outros. <br></br> O jogo atraiu milhares de gamers, mas não conseguiu unir completamente os mundos real e virtual. Um dos motivos é que o projeto não foi capaz de criar uma economia digital, na qual as pessoas pudessem ganhar dinheiro ou mesmo ter uma propriedade virtual, algo que hoje em dia é possível. </p>
      </div>
                    <br></br> <br></br>
      <div className="autentico">
        <img src="imagens/meta2.jpg"></img>
        <p align='justify'>A ideia é que o metaverso tenha uma economia virtual própria, e que as pessoas possam trabalhar, adquirir casas, comprar roupas, ir a festas, fazer reuniões e ter de fato uma vida online. A blockchain e as tecnologias que “rodam” nela – criptos, NFTs e outros – são essenciais para essa nova realidade. <br></br> A blockchain, por exemplo, pode ser a base da economia do metaverso. Essa tecnologia, que nasceu com o Bitcoin (BTC) no final de 2008, permite a criação de registros imutáveis sem a necessidade de uma terceira parte, e é uma ferramenta e tanto para governança.  <br></br> Já as criptomoedas seriam os meios de troca dessas plataformas. Há inclusive alguns projetos em andamento que utilizam cripto, como os games Decentraland (MANA), Sandbox (SAND) e Axie Infinity (AXS). <br></br> Os NFTs, por fim, servem para registrar e negociar propriedades e itens virtuais. Os tokens não fungíveis são certificados digitais que qualquer um pode ver e confirmar a autenticidade, mas ninguém pode alterar. </p>
      </div>
      <br></br> <br></br>
      <div className="videeo"> 
      <iframe width="560" height="315" src="https://www.youtube.com/embed/HG0Xs-ZJJp4?si=CXrYZg8LadWWMpfp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </div>
);
}

export default MetaVerso;