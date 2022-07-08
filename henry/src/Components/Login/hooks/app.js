import React, { useState, useRef, useEffect } from "react";
import { useScript } from "../hooks/useScript";
import jwt_deocde from "jwt-decode";
import { useDispatch } from "react-redux";
import { loginWithGoogle } from "../../../reducer/actions/actionPost";

const App = () => {
  const dispatch = useDispatch();
  
  const googlebuttonref = useRef();
  const [user, setuser] = useState(false);
  const onGoogleSignIn = (user) => {
    let userCred = user.credential;
    let payload = jwt_deocde(userCred);
    console.log(payload);
    setuser(payload);
  };

  useEffect(() => {
    if (user !== undefined) {
      let obj = {
        userName: user.name,
        name: user.given_name,
        lastName: user.family_name,
        email: user.email,
        password: "123456789",
      };

      dispatch(loginWithGoogle(obj))
    }
  }, [user]);

  useScript("https://accounts.google.com/gsi/client", () => {
    window.google.accounts.id.initialize({
      client_id:
        "14757573897-908lenjs63v6ma0bs3pi4n5g9ca0r022.apps.googleusercontent.com", // here's your Google ID
      callback: onGoogleSignIn,
      auto_select: false,
    });

    window.google.accounts.id.renderButton(googlebuttonref.current, {
      size: "medium",
    });
  });

  return (
    <div>
      {!user && <div ref={googlebuttonref}></div>}
      {user && (
        <div>
          {console.log(user)}
          <button
            onClick={() => {
              setuser(false);
            }}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
