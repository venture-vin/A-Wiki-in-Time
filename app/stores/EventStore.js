import alt from '../shared/alt'
import EventActions from '../actions/EventActions'
import EventSource from '../sources/EventSource'

// potential for storing form params: class EventParamsStore

class EventStore {
  constructor() {
    this.events = []
    this.loading = false
    this.errors = []
    this.params = {}
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
}

export default alt.createStore(EventStore)
