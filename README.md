# Netfilx-GPT

- Create react App
- Configured TailwindCss
- routing
- Header
- Login form
- SignUp Form
- Form Validation
- useRef hook 
- fireBase Setup
- Deploying our app to prodution
- install redux
- create store
- create slice
- provide the store in app.js
- go to firebase docs and navigate to manage users 
- there find onAuthStateChanged
- When a user logs in or out, we can retrieve the user details and add them to the Redux store via the onAuthStateChanged method
- onAuthStateChanged should only be called once when the user signs in or signs out.
- The state should only be updated once, so wrap the details inside a useEffect with an empty dependency array ([])
- Go to Firebase Documentation: Navigate to the official Firebase documentation to find the API for signOut.
-  Implement signOut function in Header.jsx: Implement the signOut function in the Header.jsx component, ensuring that when the user       clicks the sign-out button, they are logged out from Firebase.
- Add Header.jsx to the Browse Component: Integrate the Header.jsx component into the Browse component so that the header is displayed across your application.
- Update Profile with updateProfile API: Update the user's profile by adding their username using the updateProfile API. This information should be stored immediately in the Redux store using useDispatch for global state management.
- Retrieve User Data Using useSelector: In other components, use useSelector to retrieve the user details from the Redux store to display or use them as needed.
-This transformation provides a clearer understanding of the steps you wa


