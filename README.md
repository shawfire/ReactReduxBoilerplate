# ReactReduxBoilerplate
React, Redux boiler plate which uses Webpack and supports TDD (Test Driven Development).

```
npm install
npm start
http://localhost:8080   # Output from component "src/components/app.js"
npm run test:watch      # Run tests from "test/components/app_test.js"
```
When adding components and their test rerun this command as mocha will not
pick up these changes automatically.

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

We care about...
- It has a text area (Controlled input)
- It has a button
- Entering text into the text area updates the text

Make assertions about the end product so as not to make code brittle that
means that the code can be refactored as long as it produces the same output.

[chaijs/chai-jquery](https://github.com/chaijs/chai-jquery)
