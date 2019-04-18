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

  test('should call toggleClosed when button is clicked', () => {
    const toggleClosed = jest.fn();
    const { getByText } = render(<Controls toggleClosed={toggleClosed} />);
    const button = getByText(/close gate/i);

    fireEvent.click(button);
    expect(toggleClosed).toBeCalledTimes(1);
    cleanup();
  });

  test('should disable open and close button when gate locked', () => {
    const { getByText } = render(<Controls locked={true} />);
    const button = getByText(/close gate/i);

    expect(button).toBeDisabled();
    cleanup();
  });

  test('should disable lock and unlock button when gate open', () => {
    const { getByText } = render(<Controls closed={false} />);
    const button = getByText(/lock gate/i);

    expect(button).toBeDisabled();
    cleanup();
  });
});