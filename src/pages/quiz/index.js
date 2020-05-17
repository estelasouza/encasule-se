import React from 'react';
import NavBar from '../navbar/index'
import Banner from '../navbar/banner'
import Rodape from '../rodape/index'
import '../style-geral.css'
import './forms'
import Tabela from './forms';
import TabelaRaca from './forms-raca'
import TabelaSexo from './forms-orientacao-sexual'

const Quiz = () => {
    return (
        <>
            <NavBar />
            <Banner />
            <div>
                <h2 className='centraliza-h2'> Vem conhecer um pouco do nosso impacto </h2>
            </div>
            <div>

                <ul className='list-group container'>
                    <li className='centraliza-tex list-group-item '>
                        <p>Qual sua raça ?</p>
                        <TabelaRaca />
                    </li>

                    <li className='centraliza-tex list-group-item '>
                        <p>Qual sua orientação sexual ?</p>
                        <TabelaSexo />
                    </li>
                    <li className='centraliza-tex list-group-item '>
                        <p> Já esteve em um relacionamento onde a outra pessoa tenta ou tentava controlar seus atos ? </p>
                        <p>(exemplo : monitorar onde você está ou com quem está falando.)</p>
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
                        <p>Já foi fisicamente agredida pela pessoa com quem se relaciona ou já se relacionou? </p>
                        <p>(Ex. empurrão, chute, soco)</p>
                        <Tabela />
                    </li>
                    <li className='centraliza-tex list-group-item'>
                        <p > Deixe aqui seu elogio, critica ou desabafo  </p>
                        <div class="row center-xs">
                            <div class="col-xs-6">
                                <div class="box">
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text">With textarea</span>
                                        </div>
                                        <textarea class="form-control" aria-label="With textarea"></textarea>
                                    </div>
                                </div></div></div>              </li>

                </ul>

            </div>
            <div className="row center-xs">
                <div className="col-xs-6">
                    <div className="box altura-bt">
                        <button className='center-align purple lighten-2  btn-large '> Enviar </button>

                    </div>
                </div>
            </div>
            <b>
                <b></b>
            </b>

            <h4 className='centraliza-tex'>Você terminou o quiz, espero que tenha sido uma boa experiencia </h4>
            <b></b><b></b>
            <div class="row center-xs">
                <div class="col-xs-6">
                    <div class="box">
                        <div className="card text-center">
                            <div className="card-header">
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Procura alguém para conversar sobre o assunto?</h5>
                                <p className="card-text">A galera da <a>mete a colher </a> está conosco nessa jornada!</p>
                                <p className='centraliza-tex'> Caso você queira conversar ou precise ser escutada elas estão nessa missão de impacto social conosco</p>

                                <button href="https://www.instagram.com/appmeteacolher/" target='_blank' className="center-align purple lighten-2  btn-large ">Mete a colher</button>
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