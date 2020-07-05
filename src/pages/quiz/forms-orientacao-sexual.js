import React from 'react';


const TabelaSexo = () => {
    return (
        
        <div className="row center-xs">
            <div className="col-xs-2">
            <div className="box"></div>
        <form>
        <div className="form-row align-items-center">
          <div className="col-auto my-1">
            <label className="mr-sm-2 sr-only" for="inlineFormCustomSelect">Preference</label>
            <select className="mx-auto custom-select mr-sm-2" id="inlineFormCustomSelect">
              <option selected>Escolha...</option>
              <option value="1">Heterossexual </option>
              <option value="2">Bissexual</option>
              <option value="3">Homosexual </option>
              <option value="4">Assexual </option>
              <option value="5">Outra </option>


            </select>
          </div>
         
        </div>
       </form>
       </div>
       </div>
       
       
       );
}

export default TabelaSexo