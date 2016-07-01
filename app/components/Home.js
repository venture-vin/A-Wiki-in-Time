var React = require('react');
// var SubmitForm = require('../components/SubmitForm');
var Gmap = require('../components/Gmap');
var initialCenter = {lat: 37.784580, lng: -122.397437};
var SearchContainer = require('../containers/SearchContainer');
var Sidebar = require('react-sidebar').default;
var NavBarContainer = require('../containers/NavBarContainer');
var SidebarResults = require('../components/SidebarResults');

var Home = React.createClass({
  getInitialState() {
    return {
      isLoaded: false,
      sidebarOpen: false,
      sidebarDocked: false,
      hasQueried: false,
      updateMap: false,
      data: []
    }
  },

  handleMapUpdate: function(){
    // this.setState({updateMap: true})
    this.refs.search.forceUpdate();
  },

  onSetSidebarOpen: function(open) {
    this.setState({sidebarOpen: open});
  },

  handleUpdate(events){
    this.setState({
      data: events,
      hasQueried: true
    })
  },

  componentDidUpdate() {
    this.refs.map.createMarkersArray(this.state.data);
  },

  componentWillMount() {
    if(google) {
      this.setState({isLoaded: true});
    }
  },

  toggleOpen(ev) {
    if (ev) {
      ev.preventDefault();
    }
    this.setState({sidebarOpen: !this.state.sidebarOpen});

  },


  render() {
    var sidebarContent = <SidebarResults queryResults={this.state.data} />
      var contentHeader = (
        <NavBarContainer >
          <span id="result-btn" styles={{marginTop: '20em'}}>
          {!this.state.sidebarDocked &&
            <div><button id="results" className='btn btn-warning-outline btn-lg' type='button'>
              <a onClick={this.toggleOpen} href="#">Search Results</a>
            </button>
            <button id="instructions" className='btn btn-warning-outline btn-lg' type='button'>
              <a onClick={this.toggleOpen} href="#">Instructions</a>
            </button></div>
          }
            </span>
          </NavBarContainer>
          );
    return (
        <Sidebar className="sidebar" sidebar={sidebarContent} styles={{ root: {overflowY: 'visible'}, sidebar: { width: '40%', height: '100%', backgroundImage: "url('http://res.cloudinary.com/dbilvpu6k/image/upload/v1467314226/skulls_t4hbrn.png')"}, content: {overflowY:'inherit', height: '100%'}}}
          open={this.state.sidebarOpen}
          docked={this.state.sidebarDocked}
          onSetOpen={this.onSetSidebarOpen}
          style={{width: '70%', height: '100%'}}>
          <div className="element-container">
          <div>{contentHeader}</div>
          <Gmap initialCenter={initialCenter} ref="map" onUpdate={this.handleMapUpdate}/>
          <SearchContainer ref="search" onUpdate={this.handleUpdate}/>
          </div>
        </Sidebar>
        )
      }
    });

        module.exports = Home;
