var React = require('react');
var searchMarker = require('../images/search-marker.png');

var SidebarResults = React.createClass({
  render: function(){
    if (this.props.queryResults.length > 0){
      return (
            <ul className="list-unstyled">
              {this.props.queryResults.map(function(event) {
                return (
                  <li key={event.qID} className="card-info">
                    <div className="card card-block">
                      <h4 className="card-title">{event.title}</h4>
                      <span> Latitude: {(event.latitude).toFixed(2)} -- Longitude: {(event.longitude).toFixed(2)} </span>
                      <br/>
                      <a href={event.event_url} target="_blank">Read More Here</a>
                      <p className="card-text">{event.description}</p>
                    </div>
                  </li>
                )
              })}
            </ul>
      )
    }
    return (
      <div id="instructions-content">
        <h3>Instructions</h3>
        <ol>
          <li>Drag the initial marker anywhere on the map to start => <img src={searchMarker} /></li>
          <li>Choose a type of event you would like to see</li>
          <li>Choose the start and end years to search within a time period</li>
          <li>Choose a radius in which you would like to see the events</li>
          <li>Click submit button to see your results represented by pins</li>
          <li>Click on pins to get the info and links to Wikipedia article</li>
          <li>Click on search results to get a list of all the events</li>
          <p className="attention"> ***Polygon Mode*** </p>
          <li>Click on a polygon button as an alternative to selecting radius</li>
          <li>Drag anywhere on the map and click submit</li>
        </ol>
      </div>
    )
  }
})

module.exports = SidebarResults;
