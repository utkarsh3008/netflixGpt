import { useState } from "react";
import Header from "./Header";

const Login = () => {
    const [ isSignInForm, setIsSignInForm ] = useState( true )

    const toggleSignInForm = () => {
        setIsSignInForm( !isSignInForm )
    }
    return (
        <div>
            <Header />
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/98df3030-1c2b-4bd1-a2f5-13c611857edb/web/IN-en-20250331-TRIFECTA-perspective_247b6f06-c36d-4dff-a8eb-4013325c3f8e_large.jpg"
                    alt="background-image" />
            </div>
            <form className=" w-3/12 absolute bg-black p-12 my-36 mx-auto right-0 left-0 text-white bg-opacity-90">
                <h1 className="font-bold text-3xl py-2">{ isSignInForm ? "Sign In" : "SignUp" }</h1>
                {!isSignInForm && (<input
                    type="text"
                    placeholder="Full Name"
                    className="p-3 my-4 w-full bg-gray-700 rounded-lg"
                />)}
                <input
                    type="text"
                    placeholder="Email Address"
                    className="p-3 my-4 w-full bg-gray-700 rounded-lg"
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="p-3 my-4 w-full bg-gray-700 rounded-lg"
                />
                <button type="submit" className="p-2 my-4 bg-red-700 text-white hover:bg-red-700 w-full font-bold rounded-lg">{ isSignInForm ? "Sign In" : "SignUp" }</button>
                <p onClick={ toggleSignInForm } className="cursor-pointer hover:text-red-700">
                    { isSignInForm ? "New to Netflix? Sign Up Now" : "Already Registered? Sign In Now" }
                </p>
            </form>
        </div>
    )
}

export default Login;