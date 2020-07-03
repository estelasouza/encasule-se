import React ,{Component}from 'react';
import Banner from '../navbar/banner'
import NavBar from '../navbar/index'
import Rodape from '../rodape/index'
import '../style-geral.css'
import img from '../assets/background4.jpg'





class Fanzini extends Component {

    constructor() {
        super();
        this.state = {lista : [
            {
                nome : 'violência contra mulher',
                informacao : 'esse fanzini fala o que é violência contra a mulher  '
            },
            {
                nome : 'amizades abusivas',
                informacao : 'esse fanzini fala o que é amizades abusivas  '


            },
            {
                nome : 'relacionamento em casa',
                informacao : 'esse fanzini fala o que é relacionamento em casa  '


            },
            {
                nome : 'Machismo',
                informacao : 'esse fanzini fala o que é Machismo  '


            }
        ]};
    }
    
    render() {    return (

        <>
            <NavBar />
            <Banner />

            <div className='container'>
                <h2 className='centraliza-h2'>Fanzini</h2>
                <p className='centraliza-tex paragrafo-comum'>O fanzine é um card explicativo, aqui postaremos cards para você baixar, ler e distribuir, você também pode colar em lugares onde as pessoas possam ter difícil acesso a internet, e assim ajudar-nos a mostrar esse conteúdo de tamanha importância !  </p>
            </div>
            <div className='container'>
                <div className='row row-cols-3 '>
                   { this.state.lista.map(function(zine){
                       return(
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
                                   
                                                <span className="card-title activator grey-text text-darken-4">{zine.nome}<i className="material-icons right"></i></span>
                                               <p>{zine.informacao}</p>
                                                <div class="row center-xs">
                                        <div class="col-xs-6">
                                            <div class="box">
                                                <button className=' centraliza-bttwaves-effect purple lighten-2 waves-light btn-large' type="button" > Baixar</button>
                                            </div></div></div></div>
                            </div>
                        </div>
                    </div>
  
                   )
                })
                };
                </div>
            </div>
            <Rodape />
        </>

    );
};};

export default Fanzini;