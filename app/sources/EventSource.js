export default EventSource = {
  fetchEvents: {
    remote: function (data) {
      return axios({
        method: 'post',
        url: 'https://a-wiki-in-time-backend.herokuapp.com/query',
        data: data
      })
    },
    success: EventActions.fetchEventsCompleted,
    error: function(err) {
      console.log('fail', err)
    },
  }
}
