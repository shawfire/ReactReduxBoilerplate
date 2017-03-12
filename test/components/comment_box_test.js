import { renderComponent , expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';

// We care about...
// - It has a text area (Controlled input)
// - It has a button
// - Entering text into the text area updates the text

// Use describe to group together similar tests.
describe('CommentBox' , () => {

  it('has a text area', () => {
    const component = renderComponent(CommentBox);
    expect(component.find('textarea')).to.exist;
  });

  // Use 'it' to test a single attribute of a target
  it('has a button', () => {
    const component = renderComponent(CommentBox);
    expect(component.find('button')).to.exist;
  });
});
