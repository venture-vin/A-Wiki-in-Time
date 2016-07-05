jest.unmock('../NavBarContainer');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import NavBarContainer from '../NavBarContainer';

describe('NavBarContainer', () => {
  it('renders the component', () => {
    const $ = require('jquery');
    const navbar = TestUtils.renderIntoDocument(
      <NavBarContainer>
        <span>Content</span>
      </NavBarContainer>
    );

    const navbarNode = ReactDOM.findDOMNode(navbar);

    expect(navbarNode.textContent).toEqual('ContentA Wikiin Time');

  });
});
