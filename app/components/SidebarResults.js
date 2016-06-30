var React = require('react');

var SidebarResults = React.createClass({
  render: function(){
    return (
          <ul className="list-unstyled">
            {this.props.queryResults.map(function(event) {
              return (
                <li key={event.qID} className="card-info">
                  <div className="card card-block">
                    <h3 className="card-title">{event.title}</h3>
                    <span>Coordinates: {event.longitude} : {event.latitude} </span>
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
