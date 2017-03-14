import { renderComponent , expect } from '../test_helper';
import { OuterBox } from '../../src/components/outer_box';

// Use describe to group together similar tests.
describe('OuterBox' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(OuterBox);
  });

  it('has a the correct class', () => {
    expect(component).to.have.class('outer-box');
  });

});
