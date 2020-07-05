import React from 'react';
import NavBar from '../navbar/index'
import Banner from '../navbar/banner'
import Rodape from '../rodape/index'
import '../style-geral.css'
import './forms'
import { useHistory } from "react-router-dom"
import './style-quiz.css'


const Quiz = () => {

    const history = useHistory()

    return (
        <>
            <NavBar />
            <Banner />
            <div>
                <h2 className='centraliza-h2'> Vem conhecer um pouco do nosso impacto </h2>
                <p className='centraliza-tex'>Esse forms é 100% anônimo </p>
            </div>
            <div>

                {/* <ul className='list-group container'>
                    <li className='centraliza-tex list-group-item '>
                        <p>Qual sua raça ?</p>
                        <TabelaRaca />
                    </li>

                    <li className='centraliza-tex list-group-item '>
                        <p>Qual sua orientação sexual ?</p>
                        <TabelaSexo />
                    </li>
                    <li className='centraliza-tex list-group-item '>
                        <p> Já esteve em um relacionamento onde a outra pessoa tenta ou tentava controlar seus atos ? 
                        (exemplo : monitorar onde você está ou com quem está falando.)</p>
                        <Tabela />
                    </li>
                    <li className='centraliza-tex list-group-item '>
                        <p>Já passou por situações em que você sentiu obrigada a manter relação sexual com seu parceiro, mesmo sem vontade?</p>
                        <Tabela />
                    </li>

                    <li className='centraliza-tex list-group-item '>
                        <p>Já passou alguma situação de assédio sexual por um estranho na rua?</p>
                        <Tabela />
                    </li>

                    <li className='centraliza-tex list-group-item '>
                        <p>Já foi fisicamente agredida pela pessoa com quem se relaciona ou já se relacionou?
                        (Ex. empurrão, chute, soco)</p>
                        <Tabela />
                    </li>
                    <li className='centraliza-tex list-group-item'>
                        <p > Deixe aqui seu elogio, critica ou desabafo  </p>
                        <div className="row center-xs">
                            <div className="col-xs-6">
                                <div className="box">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                        </div>
                                        <textarea className="form-control" aria-label="With textarea"></textarea>
                                    </div>
                                </div></div></div>              </li>

                </ul> */}

            </div>
            <div className='centraliza-forms'>
                <a>
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScK9fwxE_e5Cn_KUgEYHcPudYO8wXppYzLnPsm_Z-Rho9WgBw/viewform?embedded=true" width="800" height="1850" frameorder="0" marginHeight="0" marginWidth="0">Carregando…</iframe>
                </a>
            </div>
            <b>
                <b></b>
            </b>

            <h4 className='centraliza-tex'>Você terminou o quiz, espero que tenha sido uma boa experiência </h4>
            <p className='centraliza-tex'> Se você gostou, chama tuas amigas para também responder esse forms, nos ajudará muito ! </p>

            <b></b><b></b>
            <div className="row center-xs">
                <div className="col-xs-6">
                    <div className="box">
                        <div className="card text-center">
                            <div className="card-header">
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Procura alguém para conversar sobre o assunto?</h5>
                                <p className="card-text">A galera da <a>mete a colher </a> está conosco nessa jornada!</p>
                                <p className='centraliza-tex'> Caso você queira conversar ou precise ser escutada elas estão nessa missão de impacto social conosco</p>

                                <a href="https://meteacolher.org/" target="_blank"><button target='_blank' className="center-align purple lighten-2  btn-large ">Mete a colher</button></a>
                            </div>
                            <div className="card-footer text-muted">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Rodape />
        </>
    );
};

export default Quiz;