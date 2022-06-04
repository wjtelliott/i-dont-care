import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
export default function Header({handleConfirmClick}) {

    const { user, logout, loginWithRedirect } = useAuth0();

    //! We can use this in the future to have the search bar sticky when scrolled past.
    // const [ scrolledAmount, setScrolledAmount ] = useState(0);
    // window.addEventListener('scroll', () => setScrolledAmount(window.scrollY));

    const
        _TITLE_NAME = 'Restaurant Picker',
        _TITLE_SHORT_NAME = 'iDontCare';

    return (
        <header className='sticky-top w-100 bg-dark text-white d-flex flex-nowrap justify-content-between px-4 py-1'>
            <p id='header-alt' className='display-4 w-75 align-self-center my-auto'>{_TITLE_SHORT_NAME}</p>
            <p className='display-4 w-75 align-self-center m-auto'>{_TITLE_NAME}</p>
            <div className="dropdown align-self-center mx-5">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Profile
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    {
                        // Login / sign up button
                        !user &&
                        <li><button className='dropdown-item' onClick={loginWithRedirect}>Sign In / Sign Up</button></li>
                    }
                    {
                        // Logout button
                        user &&
                        <li><button className='dropdown-item' onClick={logout}>Logout</button></li>
                    }
                    {
                        user &&
                        handleConfirmClick &&
                        <li><button className='dropdown-item' onClick={handleConfirmClick}>Preferences</button></li>
                    }
                </ul>
            </div>
        </header>
    );
};