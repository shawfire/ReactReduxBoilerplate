# Check Box Exercise
+ simple_box_clicker.html solution.
+ React box clicker solution:
```
npm install
npm start
npm run test:watch

src
  components
    app.js                  # Parent app component

    check_outer_box.js      # This component has its own check outer box callback

    outer_box.js            # Simple outer box that does not have a callback
    outer_box_with_check.js # Adds a callback to the outer_box stateless component
                            # - counts the number of times the outer_box is clicked.
                            # - checkbox is used to switch of the click checks.
style
  style.css    # styles for the outer-box and inner-box classes.

test
  components
    outer_box_test.js     # limited tests for the outer_box stateless react component.
```

+ For further TDD [chai, sinon, enzyme and mocha](https://semaphoreci.com/community/tutorials/getting-started-with-tdd-in-react)

# ReactReduxTDD
React Redux Test driven development (TDD).
```
npm install
npm start
npm run test:watch
```
When adding components and their test rerun this command as mocha will not
pick up these changes automatically.
```
Add Comment label
--------------
| textarea   |
|            |
--------------
Add Comment button
-----------------
|  text         |
|  comment list |
-----------------
```
We care about...
- It has a text area (Controlled input)
- It has a button
- Entering text into the text area updates the text

Make assertions about the end product so as not to make code brittle that
means that the code can be refactored as long as it produces the same output.


[chaijs/chai-jquery](https://github.com/chaijs/chai-jquery)
