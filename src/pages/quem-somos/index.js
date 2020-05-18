import React from 'react';
import NavBar from '../navbar/index'
import Banner from '../navbar/banner'
import Rodape from '../rodape/index'
import '../style-geral.css'
import luana from '../assets/fundadoras-colaboradoras/luana-fund.jpg'
import estela from '../assets/fundadoras-colaboradoras/estela.jpg'
import Ana from '../assets/fundadoras-colaboradoras/Ana.jpg'
import nati from '../assets/fundadoras-colaboradoras/nati.jpg'
import insta from '../assets/img-contato/instagram.png'
import linkedin from '../assets/img-contato/linkedin.png'
import '../rodape/style-rodape.css'


const QuemSomos = () => {
    return (
        <>
            <NavBar />
            <Banner />


            <div className='container'>
                <h2 className='centraliza-h2'>Nossa história</h2>
                <p className='paragrafo-comum'>  Nascemos do Hackaton “Fica em Casa”, feito pelo Porto Digital, As M.I.N.A.S, Porto+ em 2020. Uma das propostas desse Hack era “como minimizar quaisquer formas de violência contra a mulher (cis,lesbicas,trans) nas esferas públicas e privadas”, ao vermos esse desafio nos apaixonamos, queríamos fazer parte de mulheres que causam impacto social, com soluções simples e de fácil acesso. Assim lançamos nosso primeiro formulário “Não é não”, foi um sucesso, menos de 24 horas 487 respostas. Com os dados relatamos que a violência (principalmente as mais sutis, seja o “duvidar” da mulher ao relatar um acontecimento ou violências psicológicas em relacionamentos) acontecem sem nem que a mulher tenha ciência, queremos trazer um impacto de conscientização de que  não é  normal passamos por isso!</p>
                <h2 className='centraliza-h2'>O que acreditamos </h2>
                <p className='paragrafo-comum'> Nós acreditamos que o melhor caminho para a transformação de vida é o caminho do conhecimento e informação. Não precisamos passar por uma violência para saber o quanto é ruim. Mas percebemos que o acesso a informações preventivas é precário em conteúdos atrativos para as mulheres jovens. Para  buscarmos entender o que é e quais são as formas de violência contra mulher,  o <b>encasule-se</b> criou um meio de comunicação acessível para o publico jovem, que desvenda a violência contra mulher, acreditando que isso trará uma transformação, através do empoderamento. Queremos chegar a todas as mulheres, que tenham ou não acesso a internet. E como você pode fazer parte disso? Disponibilizamos alguns Fanzines grátis para download, então você pode imprimir e colar em lugares autorizados ou repassar o arquivo. Se você é um pessoa jurídica, nos ajude comprando nossos zines.</p>

            </div>

            <div className='container'>
                <h2 className='centraliza-h2'>Fundadoras</h2>
                <div className="row">
                    <div className="col">
                        
                        <div className="box">
                            <div className="card ">
                                <div className="card-image waves-effect waves-block waves-light">
                                    <img className="rounded activator" src={Ana} />
                                </div>
                                <div className="card-content">
                                    <span className="card-title activator grey-text text-darken-4">Ana Adélia<i className="material-icons right"></i></span>
                                    <p className='paragrafo-comum'>Recifence, assistente social </p>
                                    <a href='https://www.instagram.com/aadeliar/' target='_blank'><img  className='tam-img-rodape' src={insta} /></a>
                                    <a href='www.linkedin.com/in/ana-adélia-rodrigues-142059aa' target='_blank'><img  className='tam-img-rodape' src={linkedin} /></a>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="box">
                            <div className="card ">
                                <div className="card-image waves-effect waves-block waves-light">
                                    <img className="card-img-top" src={luana} />
                                </div>
                                <div className="card-content">
                                    <span className="card-title activator grey-text text-darken-4">Luana Bruzasco<i className="material-icons right"></i></span>
                                    <p className='paragrafo-comum'>Paulistana, especialista em direto da mulher</p>
                                    <a href='https://www.luanabruzasco.com/dialogos' target='_blank'>site</a>
                                    <a href='https://www.linkedin.com/in/luana-bruzasco-5889b3126/' target='_blank'><img  className='tam-img-rodape' src={linkedin} /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="box">
                            <div className="card ">
                                <div className="card-image waves-effect waves-block waves-light">
                                    <img className="rounded activator" src={nati} />
                                </div>
                                <div className="card-content">
                                    <span className="card-title activator grey-text text-darken-4">Nathália Couto<i className="material-icons right"></i></span>
                                    <p className='paragrafo-comum'>Recifence, estudande de ensino médio</p>
                                    <a href='https://www.instagram.com/nathaliaacouto/' target='_blank'><img  className='tam-img-rodape' src={insta} /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">

                        <div className="box">
                            <div className="card ">
                                <div className="card-image waves-effect waves-block waves-light">
                                    <img className="rounded activator" src={estela} />
                                </div>
                                <div className="card-content">
                                    <span className="card-title activator grey-text text-darken-4">Estela Souza<i className="material-icons right"></i></span>
                                    <p className='paragrafo-comum'> Recifence, graduanda em Sistema de Informação</p>
                                    <a href='https://www.instagram.com/estelasouza/' target='_blank'><img className='tam-img-rodape' src={insta} /></a>
                                    <a href='https://www.linkedin.com/in/maria-estela-souza-737ab216a/' target='_blank'><img className='tam-img-rodape' src={linkedin} /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Rodape />
        </>
    );
};

export default QuemSomos;