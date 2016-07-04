jest.unmock('../app/components/Gmap');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import CheckboxWithLabel from '../app/components/Gmap';

describe('Gmap', () => {
  it('renders the component', () => {
    let initialCenter = {lat: 37.784580, lng: -122.397437};
    const gmap = TestUtils.renderIntoDocument(
      <Gmap initialCenter={initialCenter} ref="map" onUpdate={() => {}}/>
    );

    const gmapNode = ReactDOM.findDOMNode(gmap);

    expect(gmapNode.textContent).toEqual('Off');

  });
});
