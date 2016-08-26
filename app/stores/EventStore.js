const alt = require('../shared/alt')
const EventActions = require('../actions/EventActions')
const EventSource = require('../sources/EventSource')

class EventStore {
  constructor () {
    this.events = {};
    // this.loading = false;
    this.bindActions(EventActions)
    this.handleAsync(EventSource)
  }

  onFetchEventsCompleted: function (response) {
    if (!!response.error) {
      console.log('err', response);
    } else {
      console.log('success', response);
      if (response.data.polygon == true) {
        var events = []
        var events_array = response.data.events
        for (i = 0; i < events_array.length; i++) {
          var event = events_array[i]
          var coordinates = {lat: event.latitude, lng: event.longitude}
          var id = {id: event.id}

          var g_coordinates = new google.maps.LatLng(event.latitude, event.longitude)
          if (google.maps.geometry.poly.containsLocation(g_coordinates, bermudaTriangle) == true) {
            events.push(event);
          }
        }
      } else {
        var events = [];
        var events_array = response.data.events;
        for (var i = 0; i < response.data.events.length; i++) {
          var event = events_array[i]
          var coordinates = {lat: event.latitude, lng: event.longitude};
          events.push(event);
        }
      }
    },
  }

  // the vanilla flux way
  // onDispatch: function (payload) {
  //   switch (payload.type) {
  //     case fetchEventsCompleted:
  //       // some logic
  //   }
  // }
}

export default alt.createStore(EventStore)
