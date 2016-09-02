import axios from 'axios'

import EventActions from '../actions/EventActions'

export default EventSource = {
  fetchEvents: {
    remote: function (state, data) {
      return axios({
        method: 'post',
        url: 'https://a-wiki-in-time-api.herokuapp.com/query',
        data: data
      })
    },
    success: EventActions.fetchEventsCompleted,
    error: EventActions.fetchEventsFailed,
  }
}
