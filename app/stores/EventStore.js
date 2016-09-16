import alt from '../shared/alt'
import EventActions from '../actions/EventActions'
import EventSource from '../sources/EventSource'

// potential for storing form params: class EventParamsStore

class EventStore {
  constructor() {
    this.events = []
    this.loading = false
    this.errors = []
    this.params = {lat: 37.784580, long: -122.397437}
    this.bindActions(EventActions)
    this.registerAsync(EventSource)
  }

  onFetchEvents() {
    this.setState({ errors: [], loading: true })
  }

  onFetchEventsCompleted(response) {
    let events = []
    const fetchedEvents = response.data.events
    if (response.error) {
      console.log('err', response)
    } else {
      console.log('success', response)
      if (response.data.polygon == true) {
        events = fetchedEvents.filter((event) => {
          const eventCoordinates = new google.maps.LatLng(event.latitude, event.longitude)
          return google.maps.geometry.poly.containsLocation(eventCoordinates, bermudaTriangle)
        })
      } else {
        events = fetchedEvents
      }
    }
    this.setState({ events: events, loading: false })
  }

  onFetchEventsFailed(err) {
    this.setState({ errors: [err.statusText], loading: false })
  }

  onUpdateSearchParams(args) {
    this.setState({params: args});
  }
}

export default alt.createStore(EventStore)
