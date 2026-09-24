import { useState } from "react";
import Header from "./header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toogleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
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
        <form className="absolute left-0 right-0 w-3/12 p-12 mx-auto space-y-5 text-white bg-black bg-opacity-80 my-72">
          <h1 className="m-5 text-3xl font-bold">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>

          {!isSignInForm && (
            <input type="text" placeholder="Name" className="w-full p-2 m-5" />
          )}
          <input
            type="text"
            placeholder="Email Address"
            className="w-full p-2 m-5"
          />
          <input
            type="Password"
            placeholder="Password"
            className="w-full p-2 m-5"
          />
          <button className="w-full p-2 m-5 bg-red-600 w-">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="p-2 m-5" onClick={toogleSignInForm}>
            {isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered Sign In Now"}
    
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
