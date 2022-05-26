Developed a React app that allows users to login/create an account using an email and password . Upon login , the user is directed to an account page that displays the user's email. 

![Here is an example of the final product!](/login.png "Login")

![Here is an example of the final product!](/loggedin.png "Login")

Tools 
   - Google FireBase
   - Javascript 
   - React.js 

Notes

  - Created routes using `React Router` in order to define routes that point to created compoments 

  - Used `useState` hook to capture user's email/password input to store and use upon login submission.

  - Leveraged `useEffect` hook to display user's email upon login and after the Account component/page rendered.  

  - In order to transition to different pages based on user's actions , I used the `useNavigate` hook. 

  - Used Firebase Authentication SDK validate user email and password during login in process. 
