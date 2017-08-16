import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import Header from '../../Views/Header';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header />, div);
});

it("renders a h2", function () {
    var component = ReactTestUtils.renderIntoDocument(
        <Header />
    );

    var h2 = ReactTestUtils.findRenderedDOMComponentWithTag(
       component, 'h2'
    );

    expect(ReactDOM.findDOMNode(h2).textContent)
        .toEqual("Cake Gallery");
});
