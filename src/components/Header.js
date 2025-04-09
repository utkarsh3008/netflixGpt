import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
    const navigate = useNavigate();
    const user = useSelector( store => store.user );
    console.log(user);
    

    const handleSignOut = () => {
        signOut( auth ).then( () => {
            // Sign-out successful.
            navigate( "/" );
        } ).catch( ( error ) => {
            // An error happened.
            console.log(error);
            
        } );

    }
    return (
        <header className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-baseline">
            <img
                className="w-40"
                src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
                alt="logo"
            />
            {user && (<div>
                <img
                    src={user.photoURL}
                    alt="profile picture"
                    className="w-8"
                />
                <button onClick={ handleSignOut } className="font-bold text-white">Sign Out</button>
            </div>)}
        </header>
    )
}

export default Header;

// https://i.pinimg.com/736x/3b/88/8a/3b888ae33caddd009ea0262a6dace304.jpg
// https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png