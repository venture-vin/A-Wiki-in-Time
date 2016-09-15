var React = require('react');
var SubmitForm = require('../components/SubmitForm');
var axios = require('axios');
var PropTypes = React.PropTypes;
var EventStore = require('../stores/EventStore').default;
var connectToStores = require('alt-utils/lib/connectToStores');

// getStores
// getPropsFromStores

// connectToStores(ComponentClass)

var SearchContainer = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var that = this;
    var data = $('form').serialize();
    EventStore.fetchEvents(data);
    // axios({
    //   method: 'post',
    //   url: 'https://a-wiki-in-time-api.herokuapp.com/query',
    //   data: data
    // }).then(function(response){
    //   if (!!response.error) {
    //     console.log('err', response);
    //   } else {
    //     console.log('success', response);
    //     if (response.data.polygon == true) {
    //       var events = []
    //       var events_array = response.data.events
    //       for (i = 0; i < events_array.length; i++) {
    //         var event = events_array[i]
    //         var coordinates = {lat: event.latitude, lng: event.longitude}

    //         var g_coordinates = new google.maps.LatLng(event.latitude, event.longitude)
    //         if (google.maps.geometry.poly.containsLocation(g_coordinates, bermudaTriangle) == true) {
    //           events.push(event);
    //         }
    //       }
    //     } else {
    //       var events = [];
    //       var events_array = response.data.events;
    //       for (var i = 0; i < response.data.events.length; i++) {
    //         var event = events_array[i]
    //         var coordinates = {lat: event.latitude, lng: event.longitude};
    //           events.push(event);
    //       }
    //     }
    //     that.props.onUpdate(events)
    //   }
    // }).catch(function(err) {
    //   console.log('fail', err)
    // })
  },

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  componentWillReceiveProps(new_props) {
    if (this.props.events !== new_props.events) {
      this.props.onUpdate(new_props.events);
    }
  },

  queryAgain() {
    this.setState({hasQueried: false})
  },


  render(){
    return (
      <SubmitForm
        onFormSubmit={this.handleSubmit} />
    )
  }
});

SearchContainer.getStores = function() {
  return [EventStore];
}

SearchContainer.getPropsFromStores = function() {
  return EventStore.getState()
  // return { events: EventStore.getState(), widgets: WidgetStore.getState() } ; <-- a way to call on props from multiple stores to only get specific ones
  // if (this.props.widgets.widgets)
}

SearchContainer.propTypes = {
  onUpdate: PropTypes.func.isRequired
}

module.exports = connectToStores(SearchContainer);

// <StatefulSearchContainer>
//   <SearchContainer props={props.merge(getPropsFromStores)} />
// </StatefulSearchContainer> This is what happens in the background for connectToStores
