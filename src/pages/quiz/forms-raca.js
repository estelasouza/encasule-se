import React from 'react';


const TabelaRaca = () => {
    return (
        <div class="row center-xs">
            <div class="col-xs-2">
            <div class="box">
            
                <form className='container'>
                <div className="form-row align-items-center">
                <div className="col-auto my-1">
                    <label className="mr-sm-2 sr-only" for="inlineFormCustomSelect">Preference</label>
                    <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                    <option selected>Escolha...</option>
                    <option value="1">Parda </option>
                    <option value="2">Preta</option>
                    <option value="3">Branca </option>
                    <option value="4">Indigena </option>
                    <option value="5">Amarela </option>


                    </select>
                </div>
         
                    </div>
                </form>
                </div>
                </div>
            </div>
       
       );
}

export default TabelaRaca