import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';

// Use describe to group together similar tests.
describe('App' , () => {

  it('show a comment box', () => {
    const component = renderComponent(App);
    expect(component.find('.comment-box')).to.exist;
  });

});
