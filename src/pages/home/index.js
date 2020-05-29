import React, { useEffect } from 'react';
import "./style.css"
import NavBar from '../navbar/index'
import background1 from '../assets/background1.jpg'
import background3 from '../assets/background3.jpg'
import Rodape from '../rodape/index.js'
import empoderamento from '../assets/img-contato/empoderamento.png'
import prevencao from '../assets/img-contato/prevencao.png'
import informacao from '../assets/img-contato/info.png'

const Home = () => {
    return (
        <>
            <NavBar />
            <div id="index-banner" className="parallax-container">

                <div className="color-bg-1 section no-pad-bot d-flex">
                    <div className="container d-flex flex-column flex-grow-1 justify-content-center ">
                        <h1 className="cor header center ">ENCASULE-SE</h1>
                        <div className="row center">
                            <h5 className="cor header col s12 light">O desejo da transformação.</h5>
                        </div>
                    </div> 
            
            </div></div>

            <div className="container">
                <div className="section">

                    <div className="row">
                        <div className="col s12 m4">
                            <div className="icon-block">
                                <h2 className="center brown-text"><img className='tam-logo' src={empoderamento} /></h2>
                                <h5 className="center">Empoderamento</h5>

                                <p className="light center">Temos a missão de empoderar as mulheres, para que a conscientização amplie a visão do ser mulher na sociedade. </p>
                            </div>
                        </div>

                        <div className="col s12 m4">
                            <div className="icon-block">
                                <h2 className="center brown-text"><img className='tam-logo' src={prevencao} /></h2>
                                <h5 className="center">Prevenção</h5>

                                <p className="light center">Através da informação e do conhecimento, contribuímos para o empoderamento feminino. Acreditamos que a prevenção é um dos caminhos para a diminuição da violência contra mulher.</p>
                            </div>
                        </div>

                        <div className="col s12 m4">
                            <div className="icon-block">
                                <h2 className="center brown-text"><img className='tam-logo' src={informacao} /></h2>
                                <h5 className="center">Informação</h5>

                                <p className="light center">Nosso objetivo é trazer informações acessíveis, profundas e humanizadas, desmitificando a violência contra mulher.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


            <div className="carousel-inner">
        <div className="carousel-item active">
        <img src={background1} className="d-block w-100 img-principal"/></div></div>

           

            <div className="container">
                <div className="section">

                    <div className="row">
                        <div className="col s12 center">
                            <h3><i className="mdi-content-send brown-text"></i></h3>
                            <h4>Encasule-se</h4>
                            <p className="left-align light center">O nome "encasule-se" nos chama a viver assim como as borboletas a fase mais importante da vida : a fase de tranformação, sendo essa interna, onde quando menos se espera estamos voando na liberdade, assim como as borborletas;</p>
                        </div>
                    </div>

                </div>
            </div>


            <div className="color-bg-1 parallax-container valign-wrapper " style={{backgroundImage: "url(" + background3 + ")", backgroundSize:'cover'}}>
                <div className="section no-pad-bot w-100 text-center" >
                    <div className="container w-100 text-center">
                        <div className="row center w-100 text-center">
                            <h5 className="header color w-100 text-center col s12 light">Seja a mudança que você espera no mundo.</h5>
                        </div>
                    </div>
                </div>
                
            </div>
            <Rodape />
        </>
    );
};

export default Home;