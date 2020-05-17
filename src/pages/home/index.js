import React, { useEffect } from 'react';
import "./style.css"
import NavBar from '../navbar/index'
import background1 from '../assets/background4.jpg'
import background2 from '../assets/background2.jpeg'
import background3 from '../assets/background3.jpg'
import Rodape from '../rodape/index.js'

const Home = () => {
    return (
        <>
            <NavBar />
            <div id="index-banner" className="parallax-container">
                <div className="section no-pad-bot">
                    <div className="container">
                        <h1 className="header center teal-text text-lighten-2">Informação</h1>
                        <div className="row center">
                            <h5 className="header col s12 light">Nosso objetivo é trazer informação de facil acesso e com profundida, para que todas tenham o conhecimento do que é violência contra mulher.</h5>
                        </div>
                        <br></br>
                    </div>
                </div>
                <div className="img-background1-container">
                    <img src={background1}/>
                </div>
            </div>

            <div className="container">
                <div className="section">

                    <div className="row">
                        <div className="col s12 m4">
                            <div className="icon-block">
                                <h2 className="center brown-text"><i className="material-icons">flash_on</i></h2>
                                <h5 className="center">Empoderamentp</h5>

                                <p className="light">Temos a missão de empodoras as mulheres, para que a conscientização traga mudança de vida.</p>
                            </div>
                        </div>

                        <div className="col s12 m4">
                            <div className="icon-block">
                                <h2 className="center brown-text"><i className="material-icons">group</i></h2>
                                <h5 className="center">Prevenção</h5>

                                <p className="light">Acreditamos que para que entendamos o que é SIM e o que é NÃO, a conscientização é a forma de se viver. Não precisamos passar por qualquer que seja a situação de violencia para mudar nossa mentalidade.</p>
                            </div>
                        </div>

                        <div className="col s12 m4">
                            <div className="icon-block">
                                <h2 className="center brown-text"><i className="material-icons">settings</i></h2>
                                <h5 className="center">Easy to work with</h5>

                                <p className="light">We have provided detailed documentation as well as specific code examples to help new users get started. We are also always open to feedback and can answer any questions a user may have about Materialize.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


            <div className="parallax-container valign-wrapper">
                <div className="section no-pad-bot">
                    <div className="container">
                        <div className="row center">
                            <h5 className="header col s12 light">A trasformação começa de dentro para fora.</h5>
                        </div>
                    </div>
                </div>
                <img src={background2} alt="Unsplashed background img 2" />
            </div>

            <div className="container">
                <div className="section">

                    <div className="row">
                        <div className="col s12 center">
                            <h3><i className="mdi-content-send brown-text"></i></h3>
                            <h4>Encasule-se</h4>
                            <p className="left-align light">Acreditamos que o impacto social acontece de dentro para fora, quando mudamos nossas atitudes, mudamos o mundo. O nome "encasule-se" nos chama a viver assim como as borboletas a fase mais importante da vida : a fase de tranformação, sendo essa interna, onde quando menor se espera estamos voando na liberdade, assim como as borborletas;</p>
                        </div>
                    </div>

                </div>
            </div>


            <div className="parallax-container valign-wrapper">
                <div className="section no-pad-bot">
                    <div className="container">
                        <div className="row center">
                            <h5 className="header col s12 light">Seja a mudança que você espera no mundo.</h5>
                        </div>
                    </div>
                </div>
                <img src={background3} alt="Unsplashed background img 3" />
            </div>
            <Rodape />
        </>
    );
};

export default Home;