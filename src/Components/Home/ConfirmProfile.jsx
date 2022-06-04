import React from 'react';
export default function ConfirmProfile({handleCancel}) {
    const windowStyles = {
        display: 'block',
        width: '800px',
        margin: '0 auto',
        position: 'fixed',
        top: '120px',
        boxShadow: '20px 20px 40px 1px #656565',
        zIndex: 9999
    }
    const overlayStyles = {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 998,
        background: 'rgba(0,0,0,0.3)'
    }
    return (
        <div>
            <div id='overlay' style={overlayStyles}></div>
            <dialog id='window' className='rounded' style={windowStyles}>
                <form className='m-auto text-center font-size-3 justify-content-evenly' method='POST'>
                    <div className="form-row">
                        <div className="form-group col-md-8 m-auto">
                            <label for="inputName">Name</label>
                            <input required type="text" className="form-control text-dark" minLength='8' maxLength='32' id="inputName" name='name' placeholder="Name" />
                        </div>
                    </div>
                    <div className="form-row my-2">
                        <div className="form-group col-md-4 m-auto">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" name='rememberExclusions' id="flexCheckDefault" />
                                <label className="form-check-label" for="flexCheckDefault">
                                    Remember exclusions
                                </label>
                            </div>
                        </div>
                    </div>
                    <input type='submit' value='Submit Profile' className='btn btn-success my-2 mx-2 m-auto' />
                    <button className='btn btn-danger my-2 mx-2 m-auto' onClick={handleCancel}>Cancel</button>
                </form>
            </dialog>
        </div>
    )
}