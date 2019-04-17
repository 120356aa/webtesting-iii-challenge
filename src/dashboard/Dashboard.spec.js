import React from 'react';
import renderer from 'react-test-renderer';
import { render, cleanup } from 'react-testing-library';

import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
  it('should match snap', () => {
    const tree = renderer.create(<Dashboard />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render', () => {
    render(<Dashboard />);
    cleanup();
  })
});