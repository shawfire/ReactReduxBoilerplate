import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';

// Use describe to group together similar tests.
describe('App' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('expect component to exist', () => {
    // Use 'expect' to make an 'assertion' about a target
    // const component = renderComponent(App);
    expect(component).to.exist;
  });

  // Use 'it' to test a single attribute of a target
  it('shows the correct text', () => {

    // Use 'expect' to make an 'assertion' about a target
    expect(component).to.exist;
    expect(component).to.contain('This is a React, Redux Boiler Plate App...');
  });
});
