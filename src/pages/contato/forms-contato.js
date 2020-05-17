import React, { Component } from 'react'

class formContato extends Component {

    constructor(props) {
        super(props);

        this.stateInicial = {
            nome: '',
            telefone: '',
            email: '',
            habilidade: ''
        }

        this.state = this.stateInicial;
    }
    render() {
        return (

            <form className='container'>

                <label htmlFor="nome" >Nome</label>
                <input />

                <label htmlFor="telefone" >Telefone</label>
                <input />


                <label htmlFor="email" >Email</label>
                <input />
                <label htmlFor="habilidade" >Contenos como você pode nos ajudar </label>
                <input />
                <div className="row center-xs">
                    <div className="col-xs-6">
                        <div className="box altura-bt">
                            <button className=' centraliza-tex centraliza-bttwaves-effect purple lighten-2  btn-large ' type="button">Enviar</button>

                        </div>
                    </div>
                </div>
            </form>

        );

    }
}

export default formContato


