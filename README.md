
Mortgage Calculator

Build a simple mortgage affordability calculator, which takes in a person's salary (and optionally, their partner's salary). Display the maximum value of the property that the person or couple can afford. (Use a simple calculation of combined salary * 3 to begin with).

This project will give you practice in:

Components, state + props

Business logic

Controlled form components

As an extension, you can add more fields - and therefore complexity - to the calculation. For example:

Add a deposit field, which is added on to the maximum value of the property

Add a field for "other monthly commitments", which should reduce the maximum possible value

As an advanced extension:

Allow the user to enter the interest rate of the mortgage, and the length of the mortgage term in years. Output their monthly repayments.

Hint: Think carefully about the SOLID principles, and in particular, the Single Responsibility principle. Where are the calculations going to be performed? Plan your work carefully.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

