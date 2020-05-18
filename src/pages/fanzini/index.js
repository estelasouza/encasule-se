import React from 'react';
import Banner from '../navbar/banner'
import NavBar from '../navbar/index'
import Rodape from '../rodape/index'
import '../style-geral.css'
import img from '../assets/background4.jpg'
import { useHistory } from "react-router-dom"



const Fanzini = () => {
    const history = useHistory()

    return (

        <>
            <NavBar />
            <Banner />

            <div className='container'>
                <h2 className='centraliza-h2'>Fanzini</h2>
                <p className='centraliza-tex paragrafo-comum'>O fanzine é um card explicativo, aqui postaremos cards para você baixar, ler e distribuir, você também pode colar em lugares onde as pessoas possam ter difícil acesso a internet, e assim ajudar-nos a mostrar esse conteúdo de tamanha importância !  </p>
            </div>
            <div className='container'>
                <div className='row row-cols-3 '>
                    <div className="col-xs-12
                col-sm-8
                col-md-6
                col-lg-4">
                        <div className="box">
                            <div className="card col ">
                                <div className="card-image waves-effect waves-block waves-light">
                                    <img className="rounded activator" src={img} />
                                </div>
                                <div className="card-content">
                                   
                                                <span className="card-title activator grey-text text-darken-4">Tipos de violência<i className="material-icons right"></i></span>
                                                <p>Esse é um Fuzinni explicativo, com intuito de conscientização de todas as formas de violencia contra mulher que existe.</p>
                                                <div class="row center-xs">
                                        <div class="col-xs-6">
                                            <div class="box">
                                                <button className=' centraliza-bttwaves-effect purple lighten-2 waves-light btn-large' type="button" onClick={() => history.push("/")}> Baixar</button>
                                            </div></div></div></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12
                col-sm-8
                col-md-6
                col-lg-4">
                        <div className="box">
                            <div className="card col ">
                                <div className="card-image waves-effect waves-block waves-light">
                                    <img className="rounded activator" src={img} />
                                </div>
                                <div className="card-content">
                                    
                                                <span className="card-title activator grey-text text-darken-4">Tipos de violência<i className="material-icons right"></i></span>
                                                <p>Esse é um Fuzinni explicativo, com intuito de conscientização de todas as formas de violencia contra mulher que existe.</p>
                                                <div class="row center-xs">
                                        <div class="col-xs-6">
                                            <div class="box">
                                                <button className=' centraliza-bttwaves-effect purple lighten-2 waves-light btn-large' type="button" onClick={() => history.push("/")} > Baixar</button>
                                            </div></div></div></div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xs-12
                col-sm-8
                col-md-6
                col-lg-4">
                        <div className="box">
                            <div className="card col ">
                                <div className="card-image waves-effect waves-block waves-light">
                                    <img className="rounded activator" src={img} />
                                </div>
                                <div className="card-content">

                                
                                                <span className="card-title activator grey-text text-darken-4">Tipos de violência<i className="material-icons right"></i></span>

                                                <p>Esse é um Fuzinni explicativo, com intuito de conscientização de todas as formas de violencia contra mulher que existe.</p>
                                                <div class="row center-xs">
                                        <div class="col-xs-6">
                                            <div class="box">
                                                <button className=' centraliza-bttwaves-effect purple lighten-2 waves-light btn-large' type="button" onClick={() => history.push("/")}> Baixar</button>
                                            </div> </div></div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Rodape />
        </>

    );
};

export default Fanzini;