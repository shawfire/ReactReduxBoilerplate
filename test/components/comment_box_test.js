import { renderComponent , expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';

// We care about...
// - It has a text area (Controlled input)
// - It has a button
// - Entering text into the text area updates the text

// Use describe to group together similar tests.
describe('CommentBox' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(CommentBox);
  });

  it('has a the correct class', () => {
    expect(component).to.have.class('comment-box');
  });


  it('has a text area', () => {
    expect(component.find('textarea')).to.exist;
  });

  // Use 'it' to test a single attribute of a target
  it('has a button', () => {
    expect(component.find('button')).to.exist;
  });
});
