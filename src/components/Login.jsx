import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
// Outlet-context alternative: import { useOutletContext } from "react-router-dom";
import Header from "./header";
import { checkValidateData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/fierbase";

const Login = () => {
  // Alternative for the Outlet-context approach in body.jsx:
  // const { onLoginSuccess } = useOutletContext();
  const [isSignInForm, setIsSignInForm] = useState(true);

  const [creadentialError, setCredentialError] = useState(null);

  const navigate = useNavigate();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toogleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    console.log("email :::::::", email?.current?.value);
    console.log("password :::::::", password?.current?.value);
    console.log("name :::::::", name?.current?.value);
    const msg = checkValidateData(
      email?.current?.value,
      password?.current?.value,
    );
    setCredentialError(msg);
    if (msg) return;

    if (!isSignInForm) {
      //const getAuth = auth ;
      createUserWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value,
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log("User ::::::::::::", user);
          navigate("/browser");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setCredentialError(errorCode, "-", errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      ).then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("Login User :::::::", user);
        navigate("/browser");
        // Alternative for Outlet context: onLoginSuccess();
      }).catch((error) => {
         console.log("Login error :::::::", error);
        const errorCode = error.code;
         console.log("Login errorCode :::::::", errorCode);
        const errorMessage = error.message;
        setCredentialError(errorCode, "-", errorMessage);
      })
    }
  };

  return (
    <>
      <div>
        <Header />
      </div>
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ae999ff9-5858-4638-b0f2-8abcf9fb6a08/web/IN-en-20260831-TRIFECTA-perspective_8fd44dcf-63ea-4547-8e1e-e5fc7e03883d_large.jpg"
          alt="BackGroundImage"
        />
      </div>

      <div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="absolute left-0 right-0 w-3/12 p-12 mx-auto space-y-5 text-gray-300 bg-black bg-opacity-80 my-72"
        >
          <h1 className="m-5 text-3xl font-bold">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>

          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Name"
              className="w-full p-2 m-5"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="w-full p-2 m-5"
          />
          <input
            ref={password}
            type="Password"
            placeholder="Password"
            className="w-full p-2 m-5"
          />
          <p className="text-red-600 p-2 m-5">{creadentialError}</p>
          <button
            className="w-full p-2 m-5 bg-red-600"
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="p-2 m-5" onClick={toogleSignInForm}>
            {isSignInForm
              ? "New to Netflix? Sign Up Now"
              : "Already registered Sign In Now"}
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
