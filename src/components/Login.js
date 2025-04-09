import { useState, useRef } from "react";
import Header from "./Header";
import { checkFormValidation } from "../utils/Validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";


const Login = () => {
    const [ isSignInForm, setIsSignInForm ] = useState( true );
    const [ errorMessage, setErrorMessage ] = useState( null );
    const email = useRef( "" );
    const password = useRef( "" );
    const name = useRef( "" );
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleButtonChange = () => {
        const message = checkFormValidation( email.current.value, password.current.value );
        setErrorMessage( message );
        if ( message ) return;

        if ( !isSignInForm ) {
            // Sign Up logic
            createUserWithEmailAndPassword( auth, email.current.value, password.current.value )
                .then( ( userCredential ) => {
                    // Signed up logic 
                    const user = userCredential.user;
                    console.log( user );
                    updateProfile( user, {
                        displayName: name.current.value, photoURL: "https://media.licdn.com/dms/image/v2/D4D35AQHMUhF0Q69fCA/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1726585962857?e=1744531200&v=beta&t=0mT0MpmHyhxqW0BQyD4sHFsybelc0sIZ-UeaOKFzMJQ"
                    } ).then( () => {
                        const { uid, email, displayName, photoURL } = auth.currentUser;
                        dispatch( addUser( { uid: uid, email: email, displayName: displayName, photoURL: photoURL } ) )
                        navigate( "/browse" )
                    } ).catch( ( error ) => {
                        setErrorMessage( error.message );
                    } );
                } )
                .catch( ( error ) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage( errorCode + "-" + errorMessage )
                    // ..
                } );
        }
        else {
            // Sign In logic
            signInWithEmailAndPassword( auth, email.current.value, password.current.value )
                .then( ( userCredential ) => {
                    // Signed in logic
                    const user = userCredential.user;
                    console.log( user );
                    navigate( "/browse" )


                    // ...
                } )
                .catch( ( error ) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage( errorCode + "-" + errorMessage )

                } );
        }

    }

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
            <form onSubmit={ ( e ) => e.preventDefault() } className=" w-3/12 absolute bg-black p-12 my-36 mx-auto right-0 left-0 text-white bg-opacity-90">
                <h1 className="font-bold text-3xl py-2">{ isSignInForm ? "Sign In" : "SignUp" }</h1>
                { !isSignInForm && ( <input
                    type="text"
                    placeholder="Full Name"
                    className="p-3 my-4 w-full bg-gray-700 rounded-lg"
                    ref={ name }
                /> ) }
                <input
                    type="text"
                    placeholder="Email Address"
                    className="p-3 my-4 w-full bg-gray-700 rounded-lg"
                    ref={ email }
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="p-3 my-4 w-full bg-gray-700 rounded-lg"
                    ref={ password }
                />
                <p className="text-red-600 font-bold">{ errorMessage }</p>
                <button onClick={ handleButtonChange } className="p-2 my-4 bg-red-700 text-white hover:bg-red-700 w-full font-bold rounded-lg">{ isSignInForm ? "Sign In" : "SignUp" }</button>
                <p onClick={ toggleSignInForm } className="cursor-pointer hover:text-red-700">
                    { isSignInForm ? "New to Netflix? Sign Up Now" : "Already Registered? Sign In Now" }
                </p>
            </form>
        </div>
    )
}

export default Login;