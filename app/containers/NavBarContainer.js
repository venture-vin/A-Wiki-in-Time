var React = require('react');
var styles = require('../styles');

var NavBarContainer = React.createClass({
  componentDidMount(){
      $('#wiki-header').hover(function() {
        $(this).addClass('magictime perspectiveUpRetourn')
      });

      $('.GMap').hover(function() {
        $('#wiki-header').removeClass('magictime perspectiveUpRetourn')
      })
  },

  render(){
    return(
      <nav className="navbar">
        {/*<div className="container">*/}
          <div id='header' className="col-center">
            {React.cloneElement(this.props.children)}
            <span className='header-div'><a href='/'>A </a></span>
            <span className='header-div' id='wiki-header'><a href='/'>WiKi</a></span>
            <span className='header-div'><a href='/'>in </a></span>
            <span className='header-div'><a href='/'>Time</a></span>
          {/*</div>*/}
        </div>
      </nav>
    )
  }

})


module.exports = NavBarContainer;
