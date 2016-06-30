var React = require('react');
var PropTypes = React.PropTypes;
var SliderStartYr = require('../components/SliderStartYr');
var SliderEndYr = require('../components/SliderEndYr');
var SliderRadius = require('../components/SliderRadius');
var styles = require('../styles');
var ReactDOM = require('react-dom');

function SubmitForm(props){
    return(

        <div className="col-sm-6 col-sm-offset-3 text-center" >
          <form onSubmit={props.onFormSubmit}>
            <div className="form-group">
              <select className="form-control" name="type">
                <option value="battles">Battles</option>
                <option value='archaeological_sites'>Archaeological Sites</option>
                <option value='assassinations'>Assassinations</option>
                <option value='natural_disasters'>Natural Disasters</option>
                <option value='explorers'>Explorers</option>
                <option value='other'>All Types</option>
              </select>
              <br /><br />
              <SliderStartYr />
              <SliderEndYr />
              <SliderRadius />
              <input id='polygon-input' type='hidden' name='polygon' value={googlePoly} />
              <input id='lat-input' type='hidden' name='lat' value={googleLat} />
              <input id='long-input' type='hidden' name='long' value={googleLng} />
                <div className="form-group col-sm-4 col-sm-offset-4">
                 <button id='polygon-mode' className="btn btn-block btn-info">POLYGONMODE</button>
                 <button id='reset-button' className="btn btn-block btn-info">RESET POLYGON</button>
              </div>
            </div>
            <div className="form-group col-sm-4 col-sm-offset-4">
              <input
                className="btn btn-block btn-success btn-lg"
                type="submit" value="Submit" />
            </div>
          </form>
        </div>

    )
}


SubmitForm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired
}

module.exports = SubmitForm;
