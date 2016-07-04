jest.unmock('../SidebarResults');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import SidebarResults from '../SidebarResults';

describe('SidebarResults', () => {
  it('renders the component', () => {
    // var sidebarContent = <SidebarResults ref="sidebar" queryResults={this.state.data} />
    const sidebarResults = TestUtils.renderIntoDocument(
      <SidebarResults queryResults={[]}/>
    );

    const sideResultsNode = ReactDOM.findDOMNode(sidebarResults);

    expect(sideResultsNode.textContent).toEqual('');

  });
});
