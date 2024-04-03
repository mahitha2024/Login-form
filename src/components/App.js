
// import React, { useState } from 'react';
// import { useGoogleLogin } from '@react-oauth/google';
// import LoginForm from './Login';
// import FileUploader from './FileUploader';
// import './App.css'; // Import your CSS file for styling

// function App() {
//   const [user, setUser] = useState(null);
//   const [showFileUpload, setShowFileUpload] = useState(false);

//   // Add your Google client ID here
//   const googleClientId = '1035419789397-olil9vrvr06o5kr45gofdh4a51u777en.apps.googleusercontent.com';

//   const login = useGoogleLogin({
//     clientId: googleClientId,
//     onSuccess: (codeResponse) => {
//       setUser(codeResponse);
//       setShowFileUpload(true);
//     },
//     onError: (error) => console.log('Login Failed:', error)
//   });

//   return (
//     <div className="app-container">
//       <div className="left-panel">
//              <img src="https://media.istockphoto.com/id/1495043596/vector/electronic-brain-and-concept-of-artificial-intelligence.jpg?s=1024x1024&w=is&k=20&c=Q6hI3-YxFLAHI89cDQFaZ5fBH6STAATd8mDo64R5adA=" alt="React Image" />
//       </div>
//       <div className="right-panel">
//         {!user && <LoginForm />}
//         {showFileUpload && <FileUploader />}

//         {!user && <button onClick={login}>Sign in with Google</button>}
//       </div>
//     </div>
//   );
// }

// export default App;





import React, { useState } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import LoginForm from './Login';
import FileUploader from './FileUploader';
import './App.css'; // Import your CSS file for styling

function App() {
  const [user, setUser] = useState(null);
  const [showFileUpload, setShowFileUpload] = useState(false);

  // Add your Google client ID here
  const googleClientId = '1035419789397-olil9vrvr06o5kr45gofdh4a51u777en.apps.googleusercontent.com';

  const login = useGoogleLogin({
    clientId: googleClientId,
    onSuccess: (codeResponse) => {
      setUser(codeResponse);
      setShowFileUpload(true);
    },
    onError: (error) => console.log('Login Failed:', error)
  });

  return (
  
    <div className="app-container">
      {/* <div className="background-image"></div> Background image container */}
      <div className="content-container"> {/* Container for content */}
        <div className="left-panel">
          <img src="https://marketseekho.com/wp-content/uploads/2022/09/Untitled-design-1024x1024.gif" alt="React Image" />
        </div>
        <div className="right-panel">
        {/* <img src="" alt="Company Logo" className="company-logo" /> */}
          {!user && <LoginForm />}
          {showFileUpload && <FileUploader />}
          {!user && <button onClick={login}>Sign in with Google</button>}
        </div>
      </div>
    </div>
  );
}

export default App;






