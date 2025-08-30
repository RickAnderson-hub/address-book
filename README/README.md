# Address Book App

A React-based address book application that allows users to manage their contacts. Features include adding, editing, deleting contacts, searching, and pagination.

## Features

- View a list of contacts with pagination
- Add new contacts via a modal
- Edit existing contacts inline
- Delete contacts with confirmation
- Search contacts by name, surname, or email
- Responsive design with Bootstrap styling
- Form validation for inputs
- Error handling for API calls
- Environment variable support for API URL

## Technologies Used

- React 19
- Bootstrap 5
- CSS Modules
- Testing Library
- PropTypes for type checking

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npm start`
4. The app will run on [http://localhost:3000](http://localhost:3000)

### Environment Variables

Create a `.env` file in the root directory and set:

```
REACT_APP_API_BASE_URL=http://localhost:8080/contacts
```

### Running Tests

`npm test`

### Building for Production

`npm run build`

## API Endpoints

The app expects a backend API with the following endpoints:

- GET `/contacts` - Fetch all contacts
- POST `/contacts/create` - Create a new contact
- PUT `/contacts/update/{id}` - Update a contact
- DELETE `/contacts/delete/{id}` - Delete a contact

## Project Structure

```
src/
  components/
    contacts/
      AddContactModal.js
      Contact.js
      ContactForm.js
      ContactList.js
      css/
        addContactModal.module.css
        contactForm.module.css
  App.js
  App.css
  index.js
```

## Improvements Made

- Added search functionality
- Improved error handling and user feedback
- Added form validation
- Implemented pagination styling
- Used environment variables for API URL
- Added PropTypes for type checking
- Optimized components with React.memo
- Consistent theming and naming

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
