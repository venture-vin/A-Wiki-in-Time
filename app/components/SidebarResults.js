var React = require('react');

var SidebarResults = React.createClass({
  render: function(){
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
})

module.exports = SidebarResults;
