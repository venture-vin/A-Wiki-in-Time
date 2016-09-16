var React = require('react');
var SubmitForm = require('../components/SubmitForm');
var axios = require('axios');
var PropTypes = React.PropTypes;
var EventStore = require('../stores/EventStore').default;
var connectToStores = require('alt-utils/lib/connectToStores');
var qs = require('qs');

// Bare-bones skeleton map to making components connect to stores:
// 1. getStores
// 2. getPropsFromStores
// 3. connectToStores(ComponentClass)

var SearchContainer = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var that = this;
    var data = qs.parse($('form').serialize());
    EventStore.fetchEvents(data);
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
