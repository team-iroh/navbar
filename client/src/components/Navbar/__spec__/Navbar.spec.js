import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Navbar from '../Navbar';

describe('Navbar Component', () => {
  let component;

  beforeEach(() => {
    component = mount(<Navbar />);
  });

  afterEach(() => {
    component.unmount();
  });

  it('should render without failure', () => {
    expect(component).toBeDefined();
  });

  it('should match the test snapshot', () => {
    expect(toJson(component)).toMatchSnapshot();
  });
});
