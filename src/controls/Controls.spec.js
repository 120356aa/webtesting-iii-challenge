import React from 'react';
import renderer from 'react-test-renderer';
import { toBeDisabled } from 'jest-dom';
import { render, fireEvent, cleanup } from 'react-testing-library';

import Controls from './Controls';

expect.extend({ toBeDisabled });

describe('<Controls />', () => {
  it('should match snap', () => {
    const tree = renderer.create(<Controls />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render', () => {
    render(<Controls />);
    cleanup();
  });

  it('should render buttons', () => {
    const { getByText } = render(<Controls />);
    getByText(/close gate/i);
    getByText(/lock gate/i);
    cleanup();
  });
});