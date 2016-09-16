import React from 'react'
import Sidebar from 'react-sidebar'

import Gmap from '../components/Gmap'
import NavBarContainer from '../containers/NavBarContainer'
import SearchContainer from '../containers/SearchContainer'
import SidebarResults from '../components/SidebarResults'

const initialCenter = { lat: 37.784580, lng: -122.397437 }

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoaded: false,
      sidebarOpen: false,
      hasQueried: false,
      updateMap: false,
      data: [],
    }
  }

  // componentDidUpdate() {
  //   this.refs.map.createMarkersArray(this.state.data)
  // }

  componentWillMount() {
    if(google) {
      this.setState({ isLoaded: true })
    }
  }

  onMapUpdate() {
    this.refs.search.forceUpdate()
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open })
  }

  onUpdate(events) {
    this.setState({
      data: events,
      hasQueried: true,
    })
  }

  showQueryResults() {
    this.refs.sidebar.showQueryResults()
    this.setState({ sidebarOpen: !this.state.sidebarOpen })
  }

  showInstructions() {
    this.refs.sidebar.showInstructions()
    this.setState({ sidebarOpen: !this.state.sidebarOpen })
  }

  renderHeader() {
    return(
      <NavBarContainer>
        <span id="result-btn" style={{ marginTop: '20em' }}>
          {this.renderHeaderContent()}
        </span>
      </NavBarContainer>
    )
  }

  renderHeaderContent() {
    return(
      <div>
        <button
          id="results"
          className='btn btn-warning-outline btn-lg'
          onClick={() => this.showQueryResults()}
        >
          Search Results
        </button>
        <button
          id="instructions"
          className='btn btn-warning-outline btn-lg'
          onClick={() => this.showInstructions()}
        >
          Instructions
        </button>
      </div>
    )
  }

  renderSidebar() {
    return <SidebarResults ref="sidebar" queryResults={this.state.data} />
  }

  sidebarStyles() {
    return {
      root: { overflowY: 'visible' },
      content: { overflowY: 'inherit', height: '100%' },
      sidebar: {
        width: '40%',
        height: '100%',
        backgroundImage: "url('http://res.cloudinary.com/dbilvpu6k/image/upload/v1467314226/skulls_t4hbrn.png')",
      },
    }
  }

  render() {
    return (
      <Sidebar
        className="sidebar"
        sidebar={this.renderSidebar()}
        styles={this.sidebarStyles()}
        open={this.state.sidebarOpen}
        docked={false}
        onSetOpen={() => this.onSetSidebarOpen()}
        style={{ width: '70%', height: '100%' }}
      >
        <div className="element-container">
          <div>{this.renderHeader()}</div>
          <Gmap initialCenter={initialCenter} ref="map" onUpdate={() => this.onMapUpdate()} />
          <SearchContainer ref="search" onUpdate={(events) => this.onUpdate(events)} />
        </div>
      </Sidebar>
    )
  }
}

export default Home
