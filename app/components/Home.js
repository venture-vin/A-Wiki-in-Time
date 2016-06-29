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
      data: []
    }
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
    var mql = window.matchMedia(`(min-width: 800px)`);
    mql.addListener(this.mediaQueryChanged);
    this.setState({mql: mql, sidebarDocked: mql.matches});
  },

  componentWillUnmount: function() {
    this.state.mql.removeListener(this.mediaQueryChanged);
  },

  mediaQueryChanged: function() {
    this.setState({sidebarDocked: this.state.mql.matches});
  },

  toggleOpen(ev) {
    console.log('clicked', ev);
    this.setState({sidebarOpen: !this.state.sidebarOpen});

    if (ev) {
      ev.preventDefault();
    }
  },


  render() {
    var sidebarContent = <SidebarResults
      queryResults={this.state.data} />
      var contentHeader = (
        <span>
          {!this.state.sidebarDocked &&
            <a onClick={this.toggleOpen} href="#" style={{fontSize: '3em'}}>=</a>}
              <NavBarContainer />
            </span>);
            if(this.state.hasQueried){
    return (
        <Sidebar sidebar={sidebarContent} styles={{sidebar: { width: '30%'}}}
          open={this.state.sidebarOpen}
          docked={this.state.sidebarDocked}
          onSetOpen={this.onSetSidebarOpen}
          style={{width: '70%', height: '100%'}}>
          <div>{contentHeader}</div>

          <Gmap initialCenter={initialCenter} ref="map"/>
          <SearchContainer onUpdate={this.handleUpdate}/>
        </Sidebar>
        )
      }

      return (
        <div style={{width: '100%', height: '100%'}}>
          <NavBarContainer />
          <Gmap initialCenter={initialCenter} ref="map"/>
          <SearchContainer onUpdate={this.handleUpdate}/>
        </div>
      )
      }
    });

        module.exports = Home;
