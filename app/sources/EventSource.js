import axios from 'axios'
import _ from 'lodash'

import EventActions from '../actions/EventActions'

export default EventSource = {
  fetchEvents: {
    remote: function (state, data) {
      const params = _.assign({}, { lat: state.lat, long: state.long }, data)
      debugger;
      return axios({
        method: 'post',
        url: 'https://a-wiki-in-time-api.herokuapp.com/query',
        data: params
      })
    },
    success: EventActions.fetchEventsCompleted,
    error: EventActions.fetchEventsFailed,
  }
}
